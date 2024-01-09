import { fail, redirect } from '@sveltejs/kit';
import {
	IsJsonString,
	IsEmptyFile,
	IsString,
	IsStringNotEmpty,
	IsObject,
	IsPhoto,
	IsFile,
	GetExtension
} from '$lib/utils/type';

import bcrypt from 'bcrypt';
import { db } from '$lib/database';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { create } from 'domain';

const FULL_UPLOAD_PATH = `uploads/valeurs/`;
const PARTIAL_UPLOAD_PATH = '/uploads/valeurs/';

export const load = async (serverloadEvent) => {
	let { locals } = serverloadEvent;
	if (!locals.user) {
		throw redirect(302, '/admin/login');
	}

	const { params } = serverloadEvent;
	const { id = '' } = params;
	let valeur = await db.valeur.findUnique({
		where: {
			id
		}
	});

	valeur = valeur == null ? {} : valeur;

	return {
		valeur
	};
};

export const actions = {
	create: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData());

		if (!locals.user || locals.user.role == null || locals.user.role != 'ADMIN') {
			return fail(400, {
				data: data,
				errorMsg: "Vous n'etes pas connecté"
			});
		}

		let { id, photo, photoFile, titre, description } = data;

		if (titre.length < 1) {
			return fail(400, {
				data: data,
				errorMsg: '❌ Le titre ne doit pas être vide'
			});
		}

		if (titre.description < 1) {
			return fail(400, {
				data: data,
				errorMsg: '❌ La description ne doit pas être vide'
			});
		}

		try {
			if (IsPhoto(photoFile)) {
				if (!existsSync(FULL_UPLOAD_PATH)) {
					mkdirSync(FULL_UPLOAD_PATH);
				}

				const fsPhotoPath = `${FULL_UPLOAD_PATH}${photoFile.name}`;
				const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${photoFile.name}`;

				writeFileSync(fsPhotoPath, Buffer.from(await photoFile.arrayBuffer()));
				photo = dbPhotoPath;
			}

			const valeur = await db.valeur.upsert({
				where: {
					id: id.toString()
				},
				update: {
					titre,
					description,
					photo
				},
				create: {
					titre,
					description,
					photo
				}
			});

			return {
				data: valeur,
				errorMsg: undefined
			};
		} catch (err) {
			return fail(400, {
				data: data,
				errorMsg: "❌ Une erreur est survenue lors de l'enregistrement de la valeur"
			});
		}
	},
	delete: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData());
		const { id = null } = data;

		if (!locals.user || locals.user.role == null || locals.user.role != 'ADMIN') {
			return fail(400, {
				data: data,
				errorMsg: "Vous n'etes pas connecté"
			});
		}

		if (!IsStringNotEmpty(id)) {
			return fail(400, {
				data: data,
				errorMsg: "❌ L'identifiant de la valeur est requise"
			});
		}

		try {
			const valeurToDelete = await db.valeur.findUnique({
				where: {
					id
				}
			});

			if (valeurToDelete == null) {
				return fail(400, {
					data: data,
					errorMsg: "Le valeur n'existe pas"
				});
			}

			await db.valeur.delete({
				where: {
					id
				}
			});

			return {
				data: undefined,
				errorMsg: undefined
			};
		} catch (err) {
			return fail(400, {
				data: data,
				errorMsg: '❌ Une erreur est survenue lors de la suppression de la valeur'
			});
		}
	}
};

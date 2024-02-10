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

const FULL_UPLOAD_PATH = `uploads/pageExpertise/`;
const PARTIAL_UPLOAD_PATH = '/uploads/pageExpertise/';

export const load = async (serverloadEvent) => {
	let { locals } = serverloadEvent;
	if (!locals.user) {
		throw redirect(302, '/admin/login');
	}

	const { params } = serverloadEvent;
	let pageExpertise = await db.pageExpertise.findUnique({
		where: {
			id: '1'
		}
	});

	if (pageExpertise == null) {
		throw redirect(302, '/admin/home');
	}

	return {
		pageExpertise
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

		let {
			titre,
			h2,
			description,
			photoPrincipale,
			photoSecondaire,
			photoPrincipaleFile,
			photoSecondaireFile
		} = data;

		if (titre.length < 1) {
			return fail(400, {
				data: data,
				errorMsg: '❌ Le titre ne doit pas être vide'
			});
		}

		if (h2.length < 1) {
			return fail(400, {
				data: data,
				errorMsg: '❌ Le sous-titre de la valeur ne doit pas être vide'
			});
		}

		if (description.length < 1) {
			return fail(400, {
				data: data,
				errorMsg: '❌ La description ne doit pas être vide'
			});
		}

		try {
			if (IsPhoto(photoPrincipaleFile)) {
				if (!existsSync(FULL_UPLOAD_PATH)) {
					mkdirSync(FULL_UPLOAD_PATH);
				}

				const fsPhotoPath = `${FULL_UPLOAD_PATH}${photoPrincipaleFile.name}`;
				const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${photoPrincipaleFile.name}`;

				writeFileSync(fsPhotoPath, Buffer.from(await photoPrincipaleFile.arrayBuffer()));
				photoPrincipale = dbPhotoPath;
			}

			if (IsPhoto(photoSecondaireFile)) {
				if (!existsSync(FULL_UPLOAD_PATH)) {
					mkdirSync(FULL_UPLOAD_PATH);
				}

				const fsPhotoPath = `${FULL_UPLOAD_PATH}${photoSecondaireFile.name}`;
				const dbPhotoPath = `${PARTIAL_UPLOAD_PATH}${photoSecondaireFile.name}`;

				writeFileSync(fsPhotoPath, Buffer.from(await photoSecondaireFile.arrayBuffer()));
				photoSecondaire = dbPhotoPath;
			}

			const pageExpertise = await db.pageExpertise.update({
				where: {
					id: '1'
				},
				data: {
					titre,
					h2,
					description,
					photoPrincipale,
					photoSecondaire
				}
			});

			return {
				data: pageExpertise,
				errorMsg: undefined
			};
		} catch (err) {
			return fail(400, {
				data: data,
				errorMsg: "❌ Une erreur est survenue lors de l'enregistrement de la page expertise"
			});
		}
	}
};

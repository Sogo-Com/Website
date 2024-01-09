import { db } from '$lib/database';

export const load = async (serverloadEvent) => {
	const domaines = await db.domaine.findMany();
	const clients = await db.client.findMany();

	return {
		domaines,
		clients
	};
};

export const actions = {
	search: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData());
		let { domaine, nom } = data;


		try {
			const clients = await db.client.findMany({
				include: {
					attachePresses: true,
					dossierPresses: true,
					communiquePresses: true
				},
				where: {
				  domaine: {
            id: {
              contains: domaine
            }
          },
          nom: {
            contains: nom
          }
				}
			});

			return {
				data: {
          clients,
          domaine,
          nom
        },
				errorMsg: undefined
			};
		} catch (err) {
			return fail(400, {
				data: data,
				errorMsg: '❌ Une erreur est survenue'
			});
		}
	}
};

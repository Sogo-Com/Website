import { db } from '$lib/database';
import { SECRET_RECAPCHA_KEY } from "$env/static/private";
import { fail } from '@sveltejs/kit';

export async function POST(req) {

	try {



		let { request } = req;
		let { nom, prenom, email, telephone, societe, message, token } = await request.json();


		const url = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_RECAPCHA_KEY}&response=${token}`;

		const recapchaPostResponse = await fetch(url, {
			method: 'post'
		})
		const recacpchaResponse = await recapchaPostResponse.json()
		if(recacpchaResponse.success == false){
			return {
				status: 500,
				body: { error: "Erreur recapcha" }
			};
		}
		console.log(recacpchaResponse);

		const contact = await db.contact.create({
			data: {
				nom,
				prenom,
				email,
				message,
				telephone,
				societe
			}
		});

		return new Response(
			JSON.stringify({
				status: 200,
				success: 'Contact created successfully'
			}),
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);

	} catch (e) {
		return {
			status: 500,
			body: { error: "Une erreur s'est produite lors de la soumission du formulaire." }
		};
	}
}

export async function DELETE(req) {
	let { langCode } = req.params;
	let { request } = req;

	let { id } = await request.json();
	console.log(id);
	const deleteContact = await db.contact.delete({
		where: {
			id
		}
	});
	return new Response(
		JSON.stringify({
			status: 200,
			success: 'Contact deleted Successfully'
		}),
		{
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
}

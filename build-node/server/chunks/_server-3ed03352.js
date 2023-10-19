import { d as db } from './index4-21780dd4.js';
import '@prisma/client';

async function POST(req) {
  req.params;
  let { request } = req;
  let { nom, prenom, email, telephone, societe } = await request.json();
  const contact = await db.contact.create({
    data: {
      nom,
      prenom,
      email,
      telephone,
      societe
    }
  });
  console.log(contact);
  return new Response(JSON.stringify({
    status: 200,
    success: "Contact created successfully"
  }), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}
async function DELETE(req) {
  req.params;
  let { request } = req;
  let { id } = await request.json();
  console.log(id);
  await db.contact.delete({
    where: {
      id
    }
  });
  return new Response(JSON.stringify({
    status: 200,
    success: "Contact deleted Successfully"
  }), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export { DELETE, POST };
//# sourceMappingURL=_server-3ed03352.js.map

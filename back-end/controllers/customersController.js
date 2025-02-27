const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getCustomers = async (req, res) => {
  const customers = await prisma.customer.findMany();
  res.json(customers);
};

exports.createCustomers = async (req, res) => {
  const { name, email } = req.body;
  const newCustomer = await prisma.customer.create({
    data: { name, email },
  });
  res.json(newCustomer);
};

exports.deleteCustomers = async (req, res) => {
  const { id } = req.params;
  await prisma.customer.delete({ where: { id: Number(id) } });
  res.json({ message: "Client supprimé" });
};

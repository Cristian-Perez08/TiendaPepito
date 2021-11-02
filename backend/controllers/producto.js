import prod from "../models/producto.js";

const registerProd = async (req, res) => {
  if (!req.body.name || !req.body.precio || !req.body.stock)
    return res.status(400).send("Incomplete data");

  const existinProd = await prod.findOne({ name: req.body.name });

  if (existinProd) return res.status(400).send("El Producto ya existe");

  const prodSchema = new prod({
    name: req.body.name,
    precio: req.body.precio,
    stock: req.body.stock,
    dbStatus: true,
  });

  const result = await prodSchema.save();

  if (!result) return res.status(400).send("Failet to register Producto");

  return res.status(200).send({ result });
};

export default { registerProd };

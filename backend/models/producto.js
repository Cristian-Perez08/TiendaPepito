import mongoose from "mongoose";

const prodSchema = new mongoose.Schema({
  name: String,
  precio: Number,
  registerDate: { type: Date, default: Date.now },
  stock: Number,
  dbStatus: Boolean,
});

const prod = mongoose.model("productos", prodSchema);

export default prod;

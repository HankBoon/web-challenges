// import { products } from "../../../lib/products";
import dbConnect from "@/db/connect";
import Product from "@/db/models/Product.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id);
    return response.status(200).json(product);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }

  //   const product = products.find((product) => product.id === id);

  //   if (!product) {
  //     response.status(404).json({ status: "Not Found" });
  //     return;
  //   }

  //   response.status(200).json(product);
}

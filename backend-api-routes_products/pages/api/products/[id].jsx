import { getProductById } from "@/services/productServices.js";

export default function handler(request, response) {
  const { id } = request.query;

  response.status(200).json(getProductById(id));

  if (!getProductById(id)) {
    return response.status(404).json({ status: "Not Found!" });
  }
}

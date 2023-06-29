import { NextApiRequest, NextApiResponse } from "next";
import products from '../../../../data-base.json';

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  const { id } = request.query

  const product = products.find(index => index.id === Number(id))
  response.status(200).json(product)
}
import { NextApiRequest, NextApiResponse } from "next";
import products from '../../../data-base.json';

export default function handler (request: NextApiRequest, response: NextApiResponse) {
  response.status(200).json(products)
}
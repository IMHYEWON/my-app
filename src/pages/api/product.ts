import type { NextApiRequest, NextApiResponse } from "next";
import { QueryResult, sql } from "@vercel/postgres";

type Product = {
    product_id: number;
    product_name: string;
    price: number;
    description: string;
  };

type Data = {
    name: string;
    products: Product[];
  };
  
  async function getProducts() : Promise<Product[]> {
    'use verceldb';
    const result: QueryResult = await sql`SELECT * FROM PRODUCT`;
    const products: Product[] = result.rows.map((row) => {
      return {
        product_id: row.product_id,
        product_name: row.product_name,
        price: row.price,
        description: row.description,
      };
    });

    return products;
  }

  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
  ) {
    const products = await getProducts();
    const data: Data = { name: "John Doe", products : products }; // products의 형식을 정의
    res.status(200).json(data); 

}
  
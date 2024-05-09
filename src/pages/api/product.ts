import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
    products: {
      id: number;
      name: string;
      price: number;
    }[];
  };
  
  export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
  ) {

    res.status(200).json({
        name: "John Doe",
        products: [
          {
            id: 1,
            name: "Product 1",
            price: 100,
          },
          {
            id: 2,
            name: "Product 2",
            price: 200,
          },
          {
            id: 3,
            name: "Product 3",
            price: 300,
          },
        ],
    })

}
  
// pages/products.tsx
import { GetServerSideProps } from 'next';
import { QueryResult, sql } from '@vercel/postgres';

type Product = {
    product_id: number;
    product_name: string;
    price: number;
    description: string;
  };

type ProductsProps = {
  products: Product[];
};

const ProductsPage = ({ products }: ProductsProps) => (

    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Product List</h2>
            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
            {products.map((product) => (
                <li className="flex items-center space-x-3 rtl:space-x-reverse" key={product.product_id}>
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                <h2 className="font-semibold">{product.product_name}</h2>
                <p>Price: {product.price}</p>
                <p>{product.description}</p>
                </li>
            ))}
            </ul>
        </div>
  </div>
);

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const result: QueryResult = await sql`SELECT * FROM PRODUCT`;
    const products: Product[] = result.rows.map((row) => {
        return {
            product_id: row.product_id,
            product_name: row.product_name,
            price: row.price,
            description: row.description,
        };
    });
    console.log('products:', products);
    return { props: { products } };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { props: { products: [] } };
  }
};

export default ProductsPage;

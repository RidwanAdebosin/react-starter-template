import { getProducts } from "../api/product";
import { useQuery } from "@tanstack/react-query";

type Product = {
  id: number;
  name: string;
  extras?: Record<string, unknown>; // replace 'extras' with the actual field name where value type is unknown
};

const Products = () => {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products.</p>;

  return (
    <ul>{data?.map((product) => <li key={product.id}>{product.name}</li>)}</ul>
  );
};

export default Products;

import { getProducts } from "../api/product";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products.</p>;

  return (
    <ul>
      {data?.map((product: any) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};

export default Products;

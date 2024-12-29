import { TProducts } from "@/types/products";
import ProductCard from "./ProductCard";
import Link from "next/link";

const ProductList = async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const products: TProducts = await data.json();
  return (
    <>
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/${product.id}`}
          style={{ textDecoration: "none" }}
        >
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
          />
        </Link>
      ))}
    </>
  );
};

export default ProductList;

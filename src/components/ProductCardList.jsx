import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductCardList = () => {
  const { products, loading } = useProducts();

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:p-8 lg:p-16">
      {loading ? (
        <div className="col-span-full h-screen flex justify-center items-center">
          <h1 className="text-2xl font-medium text-center font-montserrat">
            ¡Los mejores productos están cargando especialmente para tí! :)
          </h1>
        </div>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </main>
  );
};

export default ProductCardList;

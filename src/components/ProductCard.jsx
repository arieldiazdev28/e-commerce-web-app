const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-100 border-2 border-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col">
      <img
        className="w-full h-48 object-cover aspect-[4/3]"
        src={product.image}
        alt="Imagen de laptop"
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-nunito font-bold text-gray-800">
          {product.nombre}
        </h3>
        <p className="text-sm text-gray-600 font-nunito font-normal min-h-[48px]">
          {product.descripcion}
        </p>
        <span className="text-xl font-nunito font-medium text-green-600">
          ${product.precio}
        </span>
        <button className="mt-2 bg-blue-600 text-white font-nunito py-2 rounded-lg hover:bg-blue-700">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

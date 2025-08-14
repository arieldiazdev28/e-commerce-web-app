import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <h2 className="text-2xl font-bold font-montserrat text-white tracking-wide">
        DigitalMarket
      </h2>
      <BuildingStorefrontIcon className="w-5 h-5 md:w-7 md:h-7 text-white" />
    </div>
  );
};

export default Logo;

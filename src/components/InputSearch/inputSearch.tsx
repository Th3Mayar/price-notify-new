import PriceChecker from "../PriceChecker.tsx";


const InputSearch = () => {
  return (
    <div className="relative" style={{ height: "400px", width: "100%", overflow: "hidden" }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="https://res.cloudinary.com/dxgdtufe1/image/upload/v1701648498/public/fsyfig5irmvz2gjh7xds.svg"
          alt="PriceNotify"
          style={{
            width: "100%", // La imagen ocupa el ancho completo
            height: "150%", // Altura un poco más larga
            maxHeight: "none", // Eliminar la restricción de altura máxima
            objectFit: "cover", // La imagen se ajusta para cubrir el contenedor
          }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1/2 bg-white p-4 rounded-md border border-black flex items-center">
          <span
            className="text-black pr-2 cursor-pointer"
            role="img"
            aria-label="Icono de búsqueda"
          >
            🔍
          </span>
          <PriceChecker/>
          <span
            className="text-red-500 pl-20 cursor-pointer"
            role="img"
            aria-label="Icono de equis"
          >
            ❌
          </span>
        </div>
      </div>
    </div>
  );
};

export default InputSearch;
import { imagenes } from "../../../config/defaultConfig.ts";
import PriceChecker from "../PriceChecker.tsx";

const InputSearch = () => {
  return (
    <>
    <div className="relative" style={{ height: "400px", width: "100%", overflow: "hidden" }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={imagenes.fondoInicio}
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
          <PriceChecker/>
        </div>
      </div>
    </div>
    </>
  );
};

export default InputSearch;
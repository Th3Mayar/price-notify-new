import PriceChecker from "../PriceChecker.tsx";
import styles from './InputSearch.css';
import {imagenes} from '../../../config/defaultConfig.ts';

const InputSearch = () => {
  return (
    <div className="relative" style={{ height: "300px", width: "100%" }}>
      <img
        src={imagenes.fondoInicio}
        alt="PriceNotify"
      />
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

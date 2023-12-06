import { Producto } from "../../types/userType";

interface ElementNotifyProps {
  element: Producto;
}

const ElementNotify: React.FC<ElementNotifyProps> = ({ element }) => {
  return (
    <li className="flex flex-col w-[100%] border-spacing-2 text-center border-b-2 p-3" style={{ borderColor: 'rgba(255, 255, 255, 0.2)'}}>
      <p className="text-center">{element.nombre}</p>
      <p className="font-semibold text-white">
        <i className="fas fa-eye"></i>
        {element.precio}
      </p>
    </li>
  );
};

export default ElementNotify;

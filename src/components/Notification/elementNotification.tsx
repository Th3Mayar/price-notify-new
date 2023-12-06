import { useEffect } from "react";
import { Producto } from "../../types/userType";
import { useApolloClient } from "@apollo/client";

interface ElementNotifyProps {
  element: Producto;
  date: string;
}

function parseStringToDate(date: string | number | Date) {
  return new Date(+date);
}

function mostrarTiempo(currentDate: Date, parsedDate: Date) {
  const minutesDifference = Math.floor(
    (currentDate.getTime() - parsedDate.getTime()) / (1000 * 60)
  );
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);
  const weeksDifference = Math.floor(daysDifference / 7);
  const monthsDifference = Math.floor(
    currentDate.getMonth() -
      parsedDate.getMonth() +
      12 * (currentDate.getFullYear() - parsedDate.getFullYear())
  );
  const yearsDifference = Math.floor(
    currentDate.getFullYear() - parsedDate.getFullYear()
  );

  return minutesDifference < 60 ? `${minutesDifference} minutes` : minutesDifference > 60
    ? `${hoursDifference} hours`
    : hoursDifference > 24
    ? `${daysDifference} days`
    : daysDifference > 7
    ? `${weeksDifference} weeks`
    : weeksDifference > 4
    ? `${monthsDifference} months`
    : monthsDifference > 12
    ? `${yearsDifference} years`
    : "Less than a month";
}

const ElementNotify: React.FC<ElementNotifyProps> = ({ element, date }) => {
  const client = useApolloClient();

  useEffect(() => {
    client.resetStore();
  }, [client]);
  
  const currentDate = new Date();
  const parsedDate = parseStringToDate(date);
  const time = mostrarTiempo(currentDate, parsedDate);

  return (
    <li
      className="flex flex-col w-[100%] border-spacing-2 text-center border-b-2 p-3"
      style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
    >
      <p className="text-center">{element.nombre}</p>
      <p className="font-semibold text-white">
        <i className="fas fa-eye">
        </i>
        <span className=" pl-3">
          {time}
        </span>
      </p>
    </li>
  );
};

export default ElementNotify;

import { FormEventHandler, useEffect, useState } from "react";
import Modal from "./InputSearch/modal";

type ModalValueType = number | string | null;

export function PriceChecker() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [priceWithUSD, setPriceWithUSD] = useState("");
  const [modalValue, setModalValue] = useState<ModalValueType>(null);
  const [showModal, setShowModal] = useState(false);

  const GetProductByUrl = (url: string) => {
    if (!url) {
      alert("No has ingresado una URL.");
      return;
    }

    fetch(url)
      .then((response) => response.text())
      .then((html_text) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html_text, "text/html");

        const priceElement = doc.querySelector("span.es--char53--VKKip5c");

        if (priceElement) {
          const priceWithUSD = priceElement.textContent;
          setPriceWithUSD("Precio con USD: " + priceWithUSD);
          console.log(priceElement);
        } else {
          alert("No se encontró un precio en la página.");
        }
      })
      .catch((error) => {
        alert("Ha ocurrido un error al obtener la página: " + error);
      });
  };

  const handleInputSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(form);
    const search = data["search"] as string;

    //Buscar producto mediante la url
    GetProductByUrl(search);

    //Abrir modal para mostrar el resultado del busqueda
    setShowModal(!showModal);
  };
  useEffect(() => {
    if (modalValue) {
      //Agregar producto a la lista de productos.
      console.log(modalValue);
    }
    console.log(modalValue);
  }, [modalValue]);
  return (
    <>
      <form onSubmit={handleInputSubmit} className="flex w-[100%] items-center">
        <button
          className="text-black pr-2 cursor-pointer"
          role="img"
          aria-label="Icono de búsqueda"
          type="submit"
        >
          🔍
        </button>
        <input
          name="search"
          type="text"
          className="text-black outline-none py-1 px-2 rounded-l-md w-[100%]"
          placeholder="Paste a link to a product"
        />
        <button
          className="text-red-500 cursor-pointer"
          role="img"
          aria-label="Icono de equis"
        >
          ❌
        </button>
      </form>
      {showModal && (
        <Modal
          title="Modal"
          setState={setModalValue}
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
      {priceWithUSD && <p>{priceWithUSD}</p>}
    </>
  );
}

export default PriceChecker;

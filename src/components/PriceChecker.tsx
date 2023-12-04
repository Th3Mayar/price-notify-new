import React, { useState } from "react";
import Modal from './InputSearch/modal';

function PriceChecker() {
  const [url, setUrl] = useState("");
  const [priceWithUSD, setPriceWithUSD] = useState("");

  const handleCheckPrice = () => {
    if (!url) {
      alert("No has ingresado una URL.");
      return;
    }

    fetch(url)
      .then((response) => response.text())
      .then((html_text) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html_text, "text/html");

        const priceElement = doc.querySelector("span.ux-textspans");

        if (priceElement) {
          const priceWithUSD = priceElement.textContent;
          setPriceWithUSD("Precio con USD: " + priceWithUSD);
          console.log(priceElement)
        } else {
          alert("No se encontró un precio en la página.");
        }
      })
      .catch((error) => {
        alert("Ha ocurrido un error al obtener la página: " + error);
      });
  };

  const handleInputKeyPress = (event: { key: string; }) => {
    if (event.key === "Enter") {
      handleCheckPrice();
    }
  };

  return (
    <>
    <Modal isOpen={false} onClose={function (): void {
        throw new Error("Function not implemented.");
      } }/>
      <input
        type="text"
        className="text-black w-4/5 outline-none py-1 px-2 rounded-l-md"
        placeholder="Paste a link to a product"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onKeyPress={handleInputKeyPress}
      />
      {priceWithUSD && <p>{priceWithUSD}</p>}
    </>
  );
}

export default PriceChecker;

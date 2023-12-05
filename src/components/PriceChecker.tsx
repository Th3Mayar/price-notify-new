import { FormEventHandler, useEffect, useState, useContext } from "react";
import Modal from "./InputSearch/modal";
import { Producto } from "../types/userType";
import { gql, useMutation } from "@apollo/client";
import { UserContext } from "../context/userContext";
//FindOne
type ModalValueType = number | string | null;

const query = gql`
  mutation NuevoProducto($input: ProductoInput) {
    nuevoProducto(input: $input) {
      nombre
      createdAt
      descripcion
      id
      precio
      precioStop
      updatedAt
      url
      images
    }
  }
`;

export function PriceChecker() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [priceWithUSD, setPriceWithUSD] = useState("");
  const [nuevoProducto, mutation] = useMutation(query);
  const [modalValue, setModalValue] = useState<ModalValueType>(null);
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState<Producto | null>(null);
  const { token, user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (mutation.error) {
      alert(mutation.error.message);
    }
  }, [mutation]);

  const GetProductByUrl = async (url: string) => {
    if (!url) {
      alert("No has ingresado una URL.");
      return;
    }

    const result = await fetch("http://localhost:5000/scrapping", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });
    const data = await result.json();
    setProduct({ ...data, url });
    console.log(data);
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
    if (modalValue && product) {
      console.log("Product:", product);
      console.log("Token:", token);
      nuevoProducto({
        variables: {
          input: {
            ...product,
            precioStop: +modalValue,
          },
        },
        context: {
          headers: {
            Authorization: token,
          },
        },
      }).then((data) => {
        console.log("Response:", data);
        const newsProducts = user?.productos;
        newsProducts?.push(data.data.nuevoProducto);
        setUser({
          ...user,
          productos: newsProducts,
        });
      });
    }
  }, [modalValue, product, token]);

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

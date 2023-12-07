import { imagenes } from '../../../config/defaultConfig';
import React from 'react';
import { Producto } from '../../types/userType';
import { useMutation,gql } from '@apollo/client';
import { UserContext } from '../../context/userContext';
import { useContext } from 'react'; 

const query= gql`
mutation EliminarProducto($id: ID!) {
  eliminarProducto(id: $id)
}
`

interface Props {
  product: Producto;
}

const Products: React.FC<Props> = ({ product }) => {
  const [eliminarProducto] = useMutation(query)
  const {user,setUser} = useContext(UserContext)
  async function borrar (){
    await eliminarProducto({
      variables:{
        id: product.id
      }
    })
    const productos = user?.productos?.filter((producto)=>{
      return producto.id != product.id
    })
    if(productos && productos.length > 0){
      setUser({
        ...user,
        productos
      })
    }
  }
  return (
    <>
      <main className="py-8 px-4 ">
        <section className="container mx-auto">
          <h2 className="text-2xl font-semibold ml-20 mb-4">
            {product.nombre}
          </h2>
          <div className="flex justify-center gap-10 ">
            <div className="flex space-x-6 border-b-2 pb-4 flex-1 content-center items-center">
              {product.images.length > 0 ? (
                product.images.map((img, index) => {
                  if (index > 2) {
                    return null;
                  }
                  return (
                    <div key={index} className="flex items-center ">
                      <img
                        src={img}
                        alt={product.nombre}
                        width={200}
                        height={150}
                        className="mr-4"
                      />
                      {index < 2 && <div className="border-r-2 h-24"></div>}
                    </div>
                  );
                })
              ) : (
                <>
                  <img
                    src={imagenes.logo}
                    alt="Imagen 1"
                    width={200}
                    height={150}
                    className="mr-4"
                  />
                  <div className="border-r-2 h-24"></div>
                  <img
                    src={imagenes.logo}
                    alt="Imagen 1"
                    width={200}
                    height={150}
                    className="mr-4"
                  />
                  <div className="border-r-2 h-24"></div>
                  <img
                    src={imagenes.logo}
                    alt="Imagen 1"
                    width={200}
                    height={150}
                    className="mr-4"
                  />
                </>
              )}
            </div>
            <div className="w-1/2 mb-2 flex-1 flex flex-col">
              <h2 className="text-2xl font-semibold mb-5">
                Sobre este envío del artículo:
              </h2>
              <h4 className="text-lg mb-5 flex-1">
                {product.descripcion}
              </h4>
              <div className="flex space-x-4">
                <div>
                  <h2 className="text-2xl font-semibold mb-2"
                  >
                    Precio actual:
                  </h2>
                  <button className="bg-red-500 text-white px-10 py-2 rounded"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #a85128, #fedeba)',
                  }}>
                    $USD {product.precio}
                  </button>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Precio de stop:
                  </h2>
                  <button className="bg-green-500 text-white px-12 py-2 rounded">
                    $USD {product.precioStop}
                  </button>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2 text-center">
                  ㅤㅤ
                  </h2>
                  <button
                  onClick={borrar}
                    className="bg-red-500 text-white px-10 py-2 rounded"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
      </section>
    </main>
  </>
);
  
};

export default Products;


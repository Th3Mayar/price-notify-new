import {imagenes} from '../../../config/defaultConfig';
import React from 'react';
import { Producto } from '../../types/userType';

interface Props {
  product: Producto;
}

const Products: React.FC<Props> = ({ product }) => {
  console.log(product)
  return (
    <>
      <main className="py-8 px-4">
        <section className="container mx-auto">
          <h2 className="text-2xl font-semibold ml-20 mb-4">
            {product.nombre}
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex space-x-">
              { 
              product.images.length > 0 ? product.images.map((img,index)=>{
                if(index>2){
                  return <></>
                }
                  return (
                    <img
                      src={img}
                      alt={product.nombre}
                      width={200}
                      height={150}
                     />
                  )
                }):(
                  <>
                  <img
                    src={imagenes.logo}
                    alt="Imagen 1"
                    width={200}
                    height={150}
                  />
                  <img
                    src={imagenes.logo}
                    alt="Imagen 1"
                    width={200}
                    height={150}
                  />
                  <img
                    src={imagenes.logo}
                    alt="Imagen 1"
                    width={200}
                    height={150}
                  />
                  </>
                )
              }
            </div>
            <div className="w-1/2 mb-2">
              <h2 className="text-2xl font-semibold mb-5">
                Sobre este artículo:
              </h2>
              <h4 className="text-lg mb-5">
                {product.descripcion}
              </h4>
              <div className="flex space-x-4">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Precio actual:
                  </h2>
                  <button className="bg-red-500 text-white px-10 py-2 rounded">
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
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Products;

import {imagenes} from '../../../config/defaultConfig';

const Products = () => {
  return (
    <>
      <main className="py-8 px-4">
        <section className="container mx-auto">
          <h2 className="text-2xl font-semibold ml-20 mb-4">
            Unidad de disco duro externo
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex space-x-">
              <img
                src={imagenes.logo}
                alt="Imagen 1"
                width={200}
                height={150}
              />
              <img
                src={imagenes.logo}
                alt="Imagen 2"
                width={200}
                height={150}
              />
              <img
                src={imagenes.logo}
                alt="Imagen 3"
                width={200}
                height={150}
              />
            </div>
            <div className="w-1/2 mb-2">
              <h2 className="text-2xl font-semibold mb-5">
                Sobre este artículo:
              </h2>
              <h4 className="text-lg mb-5">
                Almacena y accede fácilmente a 2 TB de contenido donde estés,
                con la unidad portátil Seagate Portable Drive, un disco duro
                externo USB.
              </h4>
              <div className="flex space-x-4">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Precio actual:
                  </h2>
                  <button className="bg-red-500 text-white px-10 py-2 rounded">
                    US$64.99
                  </button>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Precio de stop:
                  </h2>
                  <button className="bg-green-500 text-white px-12 py-2 rounded">
                    US$49.99
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

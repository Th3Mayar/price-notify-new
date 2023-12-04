import Footer from "../footer";
import InputSearch from "../InputSearch/inputSearch";

const Dashboard = () => {
  return (
    <> 
      <InputSearch />
      <section>
        <div className="h-6 bg-repeat-x relative -top-5"></div>
        <div className="text-center max-w-md mx-auto p-5 flex flex-col md:flex-row items-center gap-5">
          <p className="text-lg text-white flex ml-2 p-2">
            {/*<img
            src={images[3]}
            alt="Imagen"
            className="max-w-md flex-wrap w-44 -ml-20 p-2 -ml-3"
            />*/}
            Thank you very much for visiting our site. If you have not yet
            registered for our application, you can do so using this button. If
            you already have an account, you can find the option to log in in
            the menu above.
          </p>
        </div>
        <div className="text-center flex gap-3 justify-center bg-white bg-opacity-10" style={{ backgroundColor: "#002E39" }}>
  <a
    href="./login"
    className="xl:text-lg my-2 inline-block py-2 px-8 bg-black text-white font-black border-transparent border-4 rounded-3xl hover:bg-white hover:border-black hover:text-black transition duration-200 group"
  >
    Login In
  </a>
  <a
    href="./register"
    className="xl:text-lg my-2 inline-block py-2 px-8 bg-red-500 text-white font-black border-transparent border-4 rounded-3xl hover:bg-white hover:border-black hover:text-black transition duration-200 group"
  >
    Sign Up
  </a>
</div>
      </section>
      <section className="mb-10">
        <div className="lg:container 2xl:w-4/5 mx-auto md:flex gap-10 md:w-full p-3">
          <div className="card text-center bg-white 2xl:w-4/5 mx-auto mt-16 rounded-2xl overflow-hidden xl:w-4/5">
            <div className="cover bg-black">
              <iframe
                width="900"
                height="360"
                src="https://www.youtube.com/embed/zKlZah1n4os?si=OvDJ84809jk74vfD"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="content bg-wave-pattern bg-repeat-x relative -top-3">
              <h3 className="text-black text-2xl py-8 font-bold">
                Use of application
              </h3>
              <p className="text-lg text-black p-5">
              Here we present a short and intuitive tutorial on how to use our website designed for users who want an effective way to track the price of specific products on Amazon or other online competitors and receive notifications when a product's price drops to their desired level.
              </p>
              <a
                href="#"
                className="xl:text-lg my-2 inline-block py-2 px-8 bg-red-500 text-white font-black border-transparent border-4 rounded-3xl hover:bg-white hover:border-black hover:text-black transition duration-200 group"
              >
                Play video
              </a>
            </div>
          </div>
          <div className="right w-4/5 md:w-1/2 text-center mx-auto">
            <h2 className="font-black text-white text-4xl py-6">PriceNotify</h2>
            <p className="font-bold text-white text-xl mx-auto py-2 w-4/5">
              ¿How about this company?
            </p>
            <p className="text-white text-center w-4/5 mx-auto">
              We are an app in charge of notifying you, when a product that you
              have provided us has dropped to the price that you have assigned
              to us, sending you an email and showing you in the notification
              bar, we also have the functionalities of...
            </p>
            <div className="card text-center bg-white 2xl:w-4/5 mx-auto mt-16 rounded-2xl overflow-hidden">
              <div className="cover bg-black">
                <iframe
                  width="450"
                  height="270"
                  src="https://www.youtube.com/embed/YdDZNvULaMk?si=4MKqWmwIxoAdyPox"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div className="content bg-wave-pattern bg-repeat-x relative -top-3 text-black">
                <h3 className="font-black text-2xl py-8">Sign Up</h3>
                <p className="text-lg">
                  This is a brief tutorial on how to register in the app.
                </p>
                <a
                  href="#"
                  className="xl:text-lg my-2 inline-block py-2 px-8 bg-red-500 text-white font-black border-transparent border-4 rounded-3xl hover:bg-white hover:border-black hover:text-black transition duration-200 group"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};


export default Dashboard;
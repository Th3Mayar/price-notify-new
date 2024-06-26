import { FormEventHandler, useContext, useEffect } from "react";
import { imagenes } from "../../../../config/defaultConfig.ts";
import { gql, useMutation } from "@apollo/client";
import { UserContext } from "../../../context/userContext.tsx";
import { Link } from "react-router-dom";

const query = gql`
  mutation AutenticarUsuario($input: AutenticarInput) {
    autenticarUsuario(input: $input) {
      token
    }
  }
`;

const LoginPage = () => {
  const [autenticarUsuario, mutation] = useMutation(query);
  const { setToken } = useContext(UserContext) as {
    setToken: (token: string) => void;
  };

  useEffect(() => {
    if (mutation.error) {
      alert(mutation.error.message);
    }
  }, [mutation]);
  
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(form);
    const { email, password } = data;

    const token = await autenticarUsuario({
      variables: {
        input: {
          email,
          password,
        },
      },
    });

    if (token) {
      setToken(token.data.autenticarUsuario.token);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div
          className="w-3/4 flex items-center justify-center"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.1)",
            margin: "0 2rem",
            height: "70%",
            width: "60%",
          }}
        >
          <div className="flex w-full">
            <div style={{ borderRadius: "10px", overflow: "hidden", flex: 1 }}>
              <img
                src={imagenes.logo}
                alt="Login Image"
                width={450}
                height={450}
                className="flex justify-center mt-10"
              />
            </div>
            <div
              className="flex flex-col justify-center p-8"
              style={{ flex: 1 }}
            >
              <div className="w-full max-w-md space-y-8">
                <div>
                  <h1 className="text-3xl font-bold text-center text-gray-800 mt-2">
                    Welcome back!
                  </h1>
                </div>
                <div>
                  <p className="mt-2 text-gray-600 text-center">
                    Please sign in to your account.
                  </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 font-bold text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200" // Quitamos 'font-bold'
                      style={{ color: 'black' }} // Agregamos el estilo 'color: black'
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block font-bold mb-2 text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      name="password"
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200" // Quitamos 'font-bold'
                      style={{ color: 'black' }} // Agregamos el estilo 'color: black'
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
                <div className="text-center">
                  <p className="text-gray-600">
                    You do not have an account?{" "}
                    <Link
                      to="/register"
                      className="text-black font-bold underline"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;

import { FormEventHandler, useEffect } from "react";
import { imagenes } from "../../../../config/defaultConfig.ts";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const query = gql`
  mutation NuevoUsuario($input: UsuarioInput) {
    nuevoUsuario(input: $input) {
      email
      id
      nombre
    }
  }
`;

const RegisterPage = () => {
  const [nuevoUsuario, mutation] = useMutation(query);
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(form);
    const { email, password, confirmpassword, nombre, apellido } = data;

    if (password !== confirmpassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const newusuario = await nuevoUsuario({
      variables: {
        input: {
          email,
          password,
          nombre,
          apellido,
        },
      },
    });

    if (newusuario) {
      alert("Usuario registrado correctamente");
      navigate("/login");
    }
  };

  useEffect(() => {
    if (mutation.error) {
      alert(mutation.error.message);
    }
  }, [mutation]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div
        className="w-3/4 flex items-center justify-center"
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.1)",
          marginTop: -100,
          margin: "0 2rem",
          height: "70%", 
          width: "60%", 
        }}
      >
        <div className="flex w-full">
          <div
            className="flex flex-col justify-center p-8"
            style={{ flex: 1 }}
          >
            <div className="w-full max-w-md space-y-4">
              <h1 className="text-3xl font-bold text-center text-gray-800 mt-2 mb-4">
                We welcome you!
              </h1>
              <p className="text-gray-600 text-center mb-4">
                Please, Create your account here
              </p>
              <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="nombre"
                    className="block mb-1 font-bold text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    style={{ color: "black" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="apellido"
                    className="block mb-1 font-bold text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    id="apellido"
                    name="apellido"
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    style={{ color: "black" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 font-bold text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    style={{ color: "black" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-1 font-bold text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    style={{ color: "black" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="con-password"
                    className="block mb-1 font-bold text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="con-password"
                    name="confirmpassword"
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    style={{ color: "black" }}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <input
                    type="submit"
                    className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 mb-2"
                    value="Register"
                  />
                  <p className="text-gray-600 mb-4">
                    Do you already have an account?{" "}
                    <a href="/login" className="text-black font-bold underline">
                      Sign in
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={imagenes.logo}
              alt="Login Image"
              width={450}
              height={450}
              className="mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

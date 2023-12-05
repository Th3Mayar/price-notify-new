import { imagenes } from "../../../config/defaultConfig";
import { FormEventHandler, useContext, useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { UserContext } from "../../context/userContext";

const query = gql`
  mutation EditarUsuario($input: UsuarioInput) {
    editarUsuario(input: $input) {
      id
      nombre
      apellido
      email
      password
      gender
      phone
      address
    }
  }
`;

const ProfileUser = () => {
  const [editarUsuario, mutation] = useMutation(query);
  const { user, setUser, token } = useContext(UserContext);
  const [nombre, setNombre] = useState(user?.nombre);
  const [apellido, setApellido] = useState(user?.apellido);
  const [gender, setGender] = useState(user?.gender);
  const [address, setAddress] = useState(user?.address);
  const [phone, setPhone] = useState(user?.phone);
  const [password, setPassword] = useState(user?.password);

  useEffect(() => {
    if (user) {
      setNombre(user.nombre);
      setApellido(user.apellido);
      setGender(user.gender);
      setAddress(user.address);
      setPhone(user.phone);
      setPassword(user.password);
    }
  }, [user]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(form);
    console.log(data);
    const editUser = await editarUsuario({
      variables: {
        input: {
          nombre,
          apellido,
          password,
          gender,
          phone,
          address,
        },
      },
      context: {
        headers: {
          Authorization: token,
        },
      },
    });

    if (editUser) {
      alert("Usuario editado correctamente");
      setUser({
        ...user,
        nombre,
        apellido,
        password,
        gender,
        phone,
        address
      });
    }
  };

  useEffect(() => {
    if (mutation.error) {
      alert(mutation.error.message);
    }
  }, [user, mutation]);

  return (
    <>
      <div
        className="relative"
        style={{ height: "300px", width: "100%", overflow: "hidden" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src={imagenes.configProfile}
              alt="PriceNotify"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: "0",
                left: "0",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                padding: "20px 70px",
                borderRadius: "20px",
                fontWeight: "bold",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginRight: "20px",
                }}
              >
                <img
                  src={imagenes.profilephoto}
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <span style={{ color: "black", fontSize: "24px" }}>
                User Profile
              </span>
            </div>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center"
        style={{ backgroundColor: "#002E39" }}
      >
        <div
          className="w-3/4 flex items-center justify-center"
          style={{
            backgroundColor: "#002E39",
            borderRadius: "10px",
            boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.1)",
            margin: "0 2rem",
            height: "70%",
            width: "60%",
            marginTop: "1rem",
            padding: "1rem",
          }}
        >
          <div
            className="flex flex-col w-full"
            style={{ backgroundColor: "#002E39" }}
          >
            <div className="flex w-full justify-between">
              <div className="flex flex-col w-5/12 px-4">
                <div className="flex items-center mb-4">
                  <label
                    htmlFor="name"
                    className="block font-bold mr-2 text-gray-700"
                    style={{ color: "white", width: "25%" }}
                  >
                    Name:
                  </label>
                  <input
                    onChange={(e) => {
                      setNombre(e.target.value);
                    }}
                    id="name"
                    name="nombre"
                    type="text"
                    placeholder="Enter your full name"
                    className="px-2 py-2 border border-gray-300 rounded-full focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    value={nombre}
                    style={{
                      color: "white",
                      width: "60%",
                      backgroundColor: "#071C21",
                    }}
                  />
                </div>
                <div className="flex items-center mb-4">
                  <label
                    htmlFor="name"
                    className="block font-bold mr-2 text-gray-700"
                    style={{ color: "white", width: "25%" }}
                  >
                    Last Name:
                  </label>
                  <input
                    onChange={(e) => {
                      setApellido(e.target.value);
                    }}
                    name="apellido"
                    type="text"
                    placeholder="Enter your full name"
                    className="px-2 py-2 border border-gray-300 rounded-full focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    value={apellido}
                    style={{
                      color: "white",
                      width: "60%",
                      backgroundColor: "#071C21",
                    }}
                  />
                </div>
                <div className="flex items-center mb-4">
                  <label
                    htmlFor="gender"
                    className="block font-bold mr-2 text-gray-700"
                    style={{ color: "white", width: "25%" }}
                  >
                    Gender:
                  </label>
                  <select
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                    name="gender"
                    id="gender"
                    className="px-2 py-2 border border-gray-300 rounded-full focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    value={gender}
                    style={{
                      color: "white",
                      width: "60%",
                      backgroundColor: "#071C21",
                    }}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div
                className="flex items-center justify-center w-2/12"
                style={{ marginTop: "-2rem" }}
              >
                <div
                  className="rounded-full h-32 w-32 flex items-center justify-center overflow-hidden"
                  style={{
                    backgroundColor: "#f3f4f6",
                  }}
                >
                  <img
                    src={imagenes.profileUser}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col w-5/12 px-4">
                <div className="flex items-center mb-4">
                  <label
                    htmlFor="email"
                    className="block font-bold mr-2 text-gray-700"
                    style={{ color: "white", width: "25%" }}
                  >
                    Email address:
                  </label>
                  <input
                    disabled
                    name="nombre"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="px-2 py-2 border border-gray-300 rounded-full focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    value={user?.email}
                    style={{
                      color: "white",
                      width: "60%",
                      backgroundColor: "#071C21",
                    }}
                  />
                </div>
                <div className="flex items-center mb-4 ">
                  <label
                    htmlFor="adrress"
                    className="block font-bold mr-2 text-gray-700"
                    style={{ color: "white", width: "25%" }}
                  >
                    Address:
                  </label>
                  <input
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    name="address"
                    id="address"
                    type="text"
                    placeholder="Enter your address"
                    className="px-2 py-2 border border-gray-300 rounded-full focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    value={address}
                    style={{
                      color: "white",
                      width: "60%",
                      backgroundColor: "#071C21",
                    }}
                  />
                </div>
                <div className="flex items-center mb-4">
                  <label
                    htmlFor="phone"
                    className="block font-bold mr-2 text-gray-700"
                    style={{ color: "white", width: "25%" }}
                  >
                    Phone:
                  </label>
                  <input
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    name="phone"
                    id="phone"
                    type="text"
                    placeholder="+1 (829) 234-1231"
                    className="px-2 py-2 border border-gray-300 rounded-full focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    value={phone}
                    style={{
                      color: "white",
                      width: "60%",
                      backgroundColor: "#071C21",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="flex flex-col mt-0 items-center w-1/3 mx-auto"
              style={{ marginTop: "-2rem" }}
            >
              <label
                htmlFor="password"
                className="block font-bold mb-2 text-gray-700"
                style={{ color: "white" }}
              >
                Password:
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                name="password"
                id="image-desc"
                type="password"
                placeholder="Enter your Password"
                className="w-full px-2 py-2 border border-gray-300 rounded-full focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                style={{
                  color: "white",
                  width: "80%",
                  backgroundColor: "#071C21",
                }}
              />
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="bg-purple-200 hover:bg-purple-300 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
                style={{
                  display: "block",
                  backgroundColor: "#5479F7",
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ProfileUser;

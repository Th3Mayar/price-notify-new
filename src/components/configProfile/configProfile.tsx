import {imagenes} from '../../../config/defaultConfig'

const ProfileUser = () => {
  return (
    <>
      <div className="relative" style={{ height: "300px", width: "100%", overflow: "hidden" }}>
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
              <span style={{ color: "black", fontSize: "24px" }}>User Profile</span>


            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center" style={{ backgroundColor: "#002E39" }}>

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
          <div className="flex flex-col w-full" style={{ backgroundColor: "#002E39" }}>
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
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="px-2 py-2 border border-gray-300 rounded-full focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    required
                    style={{ color: "white", width: "60%", backgroundColor: "#071C21" }}
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
                  id="gender"
                  className="px-2 py-2 border border-gray-300 rounded-full focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  required
                  style={{ color: "white", width: "60%", backgroundColor: "#071C21" }}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
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
                    id="phone"
                    type="text"
                    placeholder="+1 (829) 234-1231"
                    className="px-2 py-2 border border-gray-300 rounded-full focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    required
                    style={{ color: "white", width: "60%", backgroundColor: "#071C21" }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center w-2/12" style={{ marginTop: "-2rem" }}>
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
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="px-2 py-2 border border-gray-300 rounded-full focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    required
                    style={{ color: "white", width: "60%", backgroundColor: "#071C21" }}
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
                    id="address"
                    type="text"
                    placeholder="Enter your address"
                    className="px-2 py-2 border border-gray-300 rounded-full focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    required
                    style={{ color: "white", width: "60%", backgroundColor: "#071C21" }}
                  />
                </div>
                <div className="flex items-center mb-4">
                  <label
                    htmlFor="username"
                    className="block font-bold mr-2 text-gray-700"
                    style={{ color: "white", width: "25%" }}
                  >
                    Username:
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    className="px-2 py-2 border border-gray-300 rounded-full focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    required
                    style={{ color: "white", width: "60%", backgroundColor: "#071C21" }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-0 items-center w-1/3 mx-auto"style={{ marginTop: "-2rem" }}>
              <label
                htmlFor="password"
                className="block font-bold mb-2 text-gray-700"
                style={{ color: "white" }}
              >
                Password:
              </label>
              <input
                id="image-desc"
                type="password"
                placeholder="Enter your Password"
                className="w-full px-2 py-2 border border-gray-300 rounded-full focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                style={{ color: "white", width: "80%", backgroundColor: "#071C21" }}
              />
            </div>
            <div className="flex justify-center mt-4" >
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
      </div>
    </>
  );
};

export default ProfileUser;
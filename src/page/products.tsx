import Products from "../components/Products/products";
import { UserContext } from "../context/userContext";
import {useContext} from "react" ;

const ProductsPage = () => {
  const {user}=useContext(UserContext)
  console.log(user)
  return (
    <div className="flex flex-col-reverse">
    
      {
        user && user.productos && user.productos.map((product)=>{
          
          return <Products product={product} key={product.id}/>
        })
      }
    </div>
  );
};

export default ProductsPage;

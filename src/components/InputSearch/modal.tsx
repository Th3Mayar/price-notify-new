import { SetStateAction, Dispatch, FormEventHandler } from "react";
import "./modal.css";
import { imagenes } from "../../../config/defaultConfig";

type ModalProps = {
  title: string;
  onClose: () => void;
  setState: Dispatch<SetStateAction<null | number | string>>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Modal: React.FC<ModalProps> = ({ title, onClose, setState }) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(form);
    const priceStop = data["priceStop"] as string;
    console.log(priceStop);
    setState(priceStop);
    onClose();
  };

  return (
    <>
      <div className="overlay">
        <form className="modal relative" onSubmit={handleSubmit}>
          <div className="w-[100%] flex flex-col items-center content-center gap-5">
            <span className="close-button" onClick={onClose}>
              <i className="fas fa-times"></i>
            </span>
            <h2 className="titleModal">What will be your stop price?</h2>
            <input
              name="priceStop"
              type="text"
              placeholder="US$0.00"
              className="inputPrice w-[100%]"
            />
            <div className="buttons">
              <button type="submit" id="accept" className="button">
                Accept
              </button>
              <button className="button cancel" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
          <div className="flex w-[100%]">
            <img src={imagenes.logo}/>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal;

import { useState, ChangeEvent } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const [stopPrice, setStopPrice] = useState<string>("");

  const handleAccept = () => {
    console.log("Stop Price:", stopPrice);
    onClose();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStopPrice(e.target.value);
  };

  return (
    <>
      {isOpen && (
        <div className="overlay">
          <div className="modal">
            <span className="close-button" onClick={onClose}>
              &times;
            </span>
            <h2>What will be your stop price?</h2>
            <input
              type="text"
              placeholder="US$0.00"
              value={stopPrice}
              onChange={handleInputChange}
            />
            <div className="buttons">
              <button className="button accept" onClick={handleAccept}>
                Accept
              </button>
              <button className="button cancel" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

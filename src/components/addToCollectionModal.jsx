import { useState } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeSelectedCollectionAction } from "../actions/collectionActions";
import close from "../resources/close_111152.png";
import SelectCollection from "./selectCollection";

const AddToCollectionModal = ({disabled,...rest}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selected = useSelector((x) => x.collectionReducer.selected);
  const dispatch = useDispatch();
  
  const closeModal = () => {
    dispatch(removeSelectedCollectionAction());
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <button disabled={disabled} onClick={openModal}>ADD TO COLLECTION</button>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <img className="close-icon" src={close} onClick={closeModal} />
        <button onClick={closeModal} disabled={!!!selected}>
          ADD
        </button>
        <span className="modal-header">Select collection</span>
        <SelectCollection />
      </ReactModal>
    </div>
  );
};

export default AddToCollectionModal;

import { useState } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  createCollectionAction,
  removeSelectedCollectionAction,
} from "../actions/collectionActions";
import close from "../resources/close_111152.png";
import SelectCollection from "./selectCollection";

const AddToCollectionModal = ({ disabled, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNewCollection, setShowNewCollection] = useState(false);
  const [collectionName, setCollectionName] = useState("");
  const selected = useSelector((x) => x.collectionReducer.selected);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(removeSelectedCollectionAction());
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const handleShowNewCollection = () => {
    if (showNewCollection) setShowNewCollection(false);
    else setShowNewCollection(true);
  };

  const handleCollectionNameChange = (e) => {
    setCollectionName(e.target.value);
  };
  const addCollection = () => {
    dispatch(createCollectionAction(collectionName));
  };
  return (
    <div>
      <button disabled={disabled} onClick={openModal}>
        ADD TO COLLECTION
      </button>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <img className="close-icon" src={close} onClick={closeModal} />
        <button
          onClick={closeModal}
          className="Modal__submit"
          disabled={!!!selected}
        >
          ADD
        </button>
        <span className="modal-header">Select collection</span>
        <br />
        <span onClick={handleShowNewCollection}>Create new collection</span>
        {showNewCollection && (
          <div>
            <input
              type="text"
              value={collectionName}
              onChange={handleCollectionNameChange}
              placeholder="Collection name"
            />
            <button onClick={addCollection}>ADD</button>
          </div>
        )}
        <SelectCollection />
      </ReactModal>
    </div>
  );
};

export default AddToCollectionModal;

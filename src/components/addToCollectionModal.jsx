import { useState } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  createCollectionAction,
  hideAddToCollectionAction,
  removeSelectedCollectionAction,
  showAddToCollectionAction,
} from "../actions/collectionActions";
import { startAddColorToCollection } from "../actions/colorsActions";
import close from "../resources/close_111152.png";
import down from "../resources/angle-down-solid.svg";
import CollectionForm from "./CollectionForm";
import SelectCollection from "./selectCollection";

const AddToCollectionModal = ({ disabled, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNewCollection, setShowNewCollection] = useState(false);
  const [collectionName, setCollectionName] = useState("");
  const { selected, showAddToCollection } = useSelector(
    (x) => x.collectionReducer
  );
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(removeSelectedCollectionAction());
    dispatch(hideAddToCollectionAction());
  };
  const openModal = () => {
    dispatch(showAddToCollectionAction());
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

  const handleAddToCollection = () => {
    dispatch(startAddColorToCollection());
  };
  return (
    <div>
      <button disabled={disabled} onClick={openModal}>
        ADD TO COLLECTION
      </button>
      <ReactModal
        isOpen={showAddToCollection}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <img className="close-icon" src={close} onClick={closeModal} />
        <button
          onClick={handleAddToCollection}
          className="Modal__submit"
          disabled={!!!selected}
        >
          ADD
        </button>
        <span className="modal-header">Select collection</span>
        <br />
        <div onClick={handleShowNewCollection}>
          <span className="modal__new-collection">Create new collection</span>
          <img src={down} className="modal__down" />
        </div>
        {showNewCollection && (
          <CollectionForm />
          /*<div>
            <input
              type="text"
              value={collectionName}
              onChange={handleCollectionNameChange}
              placeholder="Collection name"
            />
            <button onClick={addCollection}>ADD</button>
          </div>*/
        )}
        <SelectCollection />
      </ReactModal>
    </div>
  );
};

export default AddToCollectionModal;

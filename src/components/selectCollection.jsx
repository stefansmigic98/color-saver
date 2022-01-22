import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCollectionsAction,
  setSelectedCollectionAction,
} from "../actions/collectionActions";

const SelectCollection = () => {
  const {selected,collections} = useSelector((x) => x.collectionReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsAction());
  }, []);
  const selectCollection = (col, e) => {
    dispatch(setSelectedCollectionAction(col));
  };

  return (
    <div>
      <span>{!!selected ? selected.name : "No collection selected"}</span>
      <span className="modal-collections-header">COLLECTION</span>
      <div className="container_flex-column">
        {collections.map((item) => (
          <span
            onClick={(e) => selectCollection(item, e)}
            className={`modal-collections-item ${
              !!selected && selected.id == item.id
                ? "modal-collections-selected"
                : ""
            }`}
          >
            {item.data.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const collectionsArry = [
  { id: 1, name: "prva" },
  { id: 2, name: "druga" },
  { id: 3, name: "treca" },
];

export default SelectCollection;

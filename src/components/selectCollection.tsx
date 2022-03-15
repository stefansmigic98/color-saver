import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCollectionsAction,
  setSelectedCollectionAction,
} from "../actions/collectionActions";
import { RootState } from "../store";

const SelectCollection: React.FC<{}> = () => {
  const {selected,collections} = useSelector((state: RootState) => state.collectionReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsAction());
  }, []);
  const selectCollection = (col:any) => {
    dispatch(setSelectedCollectionAction(col));
  };

  return (
    <div>
      <span>{!!selected ? selected.name : "No collection selected"}</span>
      <span className="modal-collections-header">COLLECTION</span>
      <div className="container_flex-column">
        {collections.map((item: any) => (
          <span
            onClick={(e) => selectCollection(item)}
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

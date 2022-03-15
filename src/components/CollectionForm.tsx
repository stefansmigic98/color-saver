import { useState } from "react";
import { createCollectionAction } from "../actions/collectionActions";
import TextInput from "./Form/TextInput";

const CollectionForm = () => {
  const [collectionName, setCollectionName] = useState<string>('');
  const onSubmit = (event: any) => {
    console.log("radi");
    event.preventDefault();
    createCollectionAction(collectionName);

  };
  const onNameChange = (name: string)=>{
    setCollectionName(name);
  }

  return (
    <form className="modal_collection-form" onSubmit={onSubmit}>
      <TextInput label="Collection name" onChangeHandler={onNameChange} />
      <input className="modal_collection-submit" type="submit" value="Add Collection" />
    </form>
  );
};

export default CollectionForm;

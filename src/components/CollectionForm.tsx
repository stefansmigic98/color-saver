import { useForm } from "react-hook-form";

const CollectionForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form className="modal_collection-form" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("collectionName")} />
      <input  type="submit" value="Add Collection" />
    </form>
  );
};

export default CollectionForm;

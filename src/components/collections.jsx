import { useEffect } from "react";
import { useSelector } from "react-redux";

const Collections = () => {
  const { collections } = useSelector((x) => x.collectionReducer);
  useEffect(() => {
    console.log(collections);
  }, [collections]);
  return (
    <div>
      {collections.map((element) => (
        <div>{element.data.name}</div>
      ))}
    </div>
  );
};

export default Collections;

import { useSelector } from "react-redux";
import { RootState } from "../store";
import Collections from "./collections";
import NotAuthorized from "./notAuthorized";
import SavedColors from "./savedColors";

const SavedColorsArea = () => {
  const pageState = useSelector((state: RootState) => state.pageReducer);
  const authState = useSelector((state: RootState) => state.authReducer);

  return (
    <div>
      {!!authState ? (
        (() => {
          switch (pageState.page) {
            case "colors":
              return <SavedColors />;
            case "collections":
              return <Collections />;
            default:
              return <SavedColors />;
          }
        })()
      ) : (
        <NotAuthorized />
      )}
    </div>
  );
};

export default SavedColorsArea;

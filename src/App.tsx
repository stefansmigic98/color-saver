import Preview from "./components/preview";
import ColorPicker from "./components/colorPicker";
import Header from "./components/Header/header";
import SavedColorsArea from "./components/savedColorsArea";
import ColorsHeader from "./components/colorsHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { startGetColors } from "./actions/colorsActions";
import Shades from "./components/shades";
import { RootState } from "./store";

const App:React.FC = () => {
  const authState = useSelector((state: RootState) => state.authReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGetColors());
  }, [authState]);

  return (
    <div>
      <Header />
      <div className="container_main">
        <div className="container_flex container_picker">
          <ColorPicker />
          <Preview />
          <Shades />
        </div>
        <div className="container_saved-colors">
          <ColorsHeader />
          <SavedColorsArea />
        </div>
      </div>
    </div>
  );
};

export default App;

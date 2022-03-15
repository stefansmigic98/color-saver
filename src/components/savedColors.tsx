import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

import ColorCard from "./colorCard";
///https://htmlcolorcodes.com/color-chart/web-safe-color-chart/
const SavedColors: React.FC<{}> = () => {
  const { savedColors } = useSelector((state: RootState) => state.colorReducer);

  return (
    <div className="saved-colors">
      {savedColors.map((color) => (
        <ColorCard key={color.id} color={color} />
      ))}
    </div>
  );
};

export default SavedColors;

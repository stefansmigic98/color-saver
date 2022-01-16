import { useEffect } from "react";
import { useSelector } from "react-redux";

import ColorCard from "./colorCard";
import ColorsHeader from "./colorsHeader";
///https://htmlcolorcodes.com/color-chart/web-safe-color-chart/
const SavedColors = () => {
  const { savedColors } = useSelector((state) => state.colorReducer);
  
  return (
    <div className="saved-colors">
      {savedColors.map((color) => (
        <ColorCard key={color.id} color={color} />
      ))}
    </div>
  );
};


export default SavedColors;

import { ChromePicker } from "react-color";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setColorAction } from "../actions/colorsActions";

function ColorPicker() {
  const dispatch = useDispatch();
  const [color, setColor] = useState("#cd2020");
  const [chosenColor, setChosenColor] = useState("#cd2020");

  const handleChange = (color) => {
    setColor(color.hex);
    dispatch(setColorAction({ color: color }));
  };
  const handleChangeComplete = (color) => {
    setChosenColor(color.hex);
    dispatch(setColorAction({ color: color }));
  };



  return (
    <div className="color-picker">
      <ChromePicker
        color={color}
        onChange={handleChange}
        onChangeComplete={handleChangeComplete}
        disableAlpha={true}
      />
    </div>
  );
}

export default ColorPicker;

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { startSaveColor } from "../actions/colorsActions";
import AddToCollectionModal from "./addToCollectionModal";
import copy from "../resources/copy_icon.svg";
import { copyText } from "../utils/copy";
import { getFontColor, rgbToString } from "../utils/colors";
import { useState } from "react";
import { useEffect } from "react";
import { RootState } from "../store";

const Preview = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [fontColor, setFontColor] = useState("#ffffff");
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.authReducer);
  const colorState = useSelector((state: RootState) => state.colorReducer);

  useEffect(() => {
    setFontColor(getFontColor(colorState.color.rgb));
  }, [colorState]);

  const saveColor = () => {
    dispatch(startSaveColor());
  };

  const handleCopy = (color:string) => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
    copyText(color);
  };

  return (
    <div>
      <div
        className="preview"
        style={{
          background: colorState.color ? colorState.color.hex : "black",
        }}
      >
        {isCopied && (
          <span className="preview_copied" style={{ color: fontColor }}>
            Copied!
          </span>
        )}
      </div>
      <div className="color-values-area">
        <div className="color-value">
          <span>{colorState.color.hex && colorState.color.hex}</span>
          <div className="preview_tooltip">
            <img
              src={copy}
              className="copy_icon preview_copy"
              onClick={() => handleCopy(colorState.color.hex)}
            />
          </div>
        </div>
        <div className="color-value">
          <span>
            {colorState.color.rgb && rgbToString(colorState.color.rgb)}
          </span>
          <div className="preview_tooltip">
            <img
              src={copy}
              className="copy_icon preview_copy"
              onClick={() => handleCopy(rgbToString(colorState.color.rgb))}
            />
          </div>
        </div>
      </div>
      <div className="preview_buttons">
        <button disabled={!!!authState} onClick={saveColor}>
          SAVE
        </button>

        <AddToCollectionModal disabled={!!!authState} />
      </div>
    </div>
  );
};

export default Preview;

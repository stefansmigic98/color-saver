import { useState } from "react";
import { copyText } from "../utils/copy";
import more from "../resources/more_icon.svg";
import close from "../resources/close_111152.png";
import { useDispatch } from "react-redux";
import { startDeleteColor } from "../actions/colorsActions";
import { useEffect } from "react";
import { getFontColor } from "../utils/colors";

const ColorCard = ({ color, ...rest }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [displayOptions, setDisplayOptions] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);
  const [fontCol, setFontCol] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    let font = getFontColor(color.data.rgb);
    setFontCol(font);
  }, []);
  const handleCopy = (color) => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 300);
    copyText(color);
  };

  const handleDisplayMore = () => {
    if (displayOptions) {
      if (!deleteClicked) {
        setDisplayOptions(false);
      }
    } else {
      setDisplayOptions(true);
    }
  };

  const handleDelete = (color) => {
    if (deleteClicked) {
      setDeleteClicked(false);
    } else {
      setDeleteClicked(true);
    }
  };

  const confirmDelete = (decis) => {
    if (decis) {
      //delete item
      dispatch(startDeleteColor(color.id));
    } else {
      setDeleteClicked(false);
      setDisplayOptions(false);
    }
  };
  const deleteDialog = (
    <div className="saved_color_del">
      <div>
        <span>Do you want to delete this item?</span>
      </div>
      <div className="saved_color_del_btn">
        <button
          onClick={() => {
            confirmDelete(true);
          }}
        >
          Yes
        </button>
        <button
          onClick={() => {
            confirmDelete(false);
          }}
        >
          No
        </button>
      </div>
    </div>
  );

  const options = (
    <div className="saved_color_options">
      <span
        onClick={() => {
          handleDelete(color.id);
        }}
      >
        <img src={close} />
      </span>
    </div>
  );
  return (
    <div className="saved_color" style={{ background: color.data.hex }}>
      {displayOptions && options}
      <span
        className={
          displayOptions
            ? "saved_color_more saved_color_more_clicked"
            : "saved_color_more"
        }
        onClick={handleDisplayMore}
      >
        <img src={more} />
      </span>
      {deleteClicked ? (
        deleteDialog
      ) : (
        <span
          style={{color: fontCol}}
          className="saved_color_name "
          onClick={() => {
            handleCopy(color.data.hex);
          }}
        >
          {isCopied ? "Copied" : color.data.hex}
        </span>
      )}
    </div>
  );
};

export default ColorCard;

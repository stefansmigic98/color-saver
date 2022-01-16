import { copyText } from "../utils/copy";
import { useState } from "react";

const ShadesItem = ({ color, font, ...rest }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (color) => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 300);
    copyText(color);
  };

  return (
    <div key={color} className="shades_item" style={{ background: color }}>
      <span
        style={{ color: font }}
        onClick={() => {
          handleCopy(color);
        }}
      >
        {isCopied ? "Copied" : color}
      </span>
    </div>
  );
};

export default ShadesItem;

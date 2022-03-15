import { copyText } from "../utils/copy";
import { useState } from "react";

interface ShadesItemProps {
  color: string;
  font: string;
}

const ShadesItem: React.FC<ShadesItemProps> = ({ color, font }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (color: string) => {
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

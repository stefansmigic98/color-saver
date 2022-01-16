import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getFontColor, hexToRgb, shadeHexColor } from "../utils/colors";
import { copyText } from "../utils/copy";
import ShadesItem from "./shadesItem";

const Shades = (props) => {
  const baseColor = useSelector((state) => state.colorReducer.color);
  const [shades, setShades] = useState([]);

  useEffect(() => {
    const col = shadeHexColor(baseColor.hex, 0.5);
    setShades([]);
    let arr = [];

    for (let i = 0; i < 10; i++) {
      const sc = shadeHexColor(baseColor.hex, -0.5 + i / 10);
      const fnt = getFontColor(hexToRgb(sc));
      arr.push({ color: sc, font: fnt });
    }
    setShades(arr);
  }, [baseColor]);

  return (
    <div className="shades">
      <div className="shades_items">
        {shades.map((item) => (
          <ShadesItem key={item.color} color={item.color} font={item.font} />
        ))}
      </div>
    </div>
  );
};

export default Shades;

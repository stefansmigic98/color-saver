import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { getFontColor, hexToRgb, shadeHexColor } from "../utils/colors";
import ShadesItem from "./shadesItem";

interface Shade {
  color: string;
  font: string;
}

const Shades: React.FC<{}> = () => {
  const baseColor = useSelector((state: RootState) => state.colorReducer.color);
  const [shades, setShades] = useState<Shade[]>([]);

  useEffect(() => {
    const col = shadeHexColor(baseColor.hex, 0.5);
    setShades([]);
    let arr:Shade[] = [];

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

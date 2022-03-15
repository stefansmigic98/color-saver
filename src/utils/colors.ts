interface RGB {
  r: number;
  g: number;
  b: number;
}

const rgbToString = ({ r, g, b }: RGB) => {
  return "rgb(" + r + "," + g + "," + b + ")";
};

const getShades = (color: any) => {
  //console.log(color);
};

const getFontColor = ({ r, g, b } :RGB) => {
  /*
    if (r > 200 || g > 200 || b > 200) {
        return "#000000";
    }
    return "#ffffff";
    */
  if (r + g + b > 425) {
    return "#000000";
  }
  return "#ffffff";
};

function shadeHexColor(color: string, percent: number) {
  var f = parseInt(color.slice(1), 16),
    t = percent < 0 ? 0 : 255,
    p = percent < 0 ? percent * -1 : percent,
    R = f >> 16,
    G = (f >> 8) & 0x00ff,
    B = f & 0x0000ff;
  return (
    "#" +
    (
      0x1000000 +
      (Math.round((t - R) * p) + R) * 0x10000 +
      (Math.round((t - G) * p) + G) * 0x100 +
      (Math.round((t - B) * p) + B)
    )
      .toString(16)
      .slice(1)
  );
}

function hexToRgb(hex: string) {
  const red = parseInt(hex[1] + hex[2], 16);
  const green = parseInt(hex[3] + hex[4], 16);
  const blue = parseInt(hex[5] + hex[6], 16);
  return { r: red, g: green, b: blue };
}
export { rgbToString, getShades, getFontColor, shadeHexColor, hexToRgb };

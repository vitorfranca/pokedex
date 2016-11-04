const colors = {
  toRGB: (hex) => {
    if(!hex) return {r:0, g:0, b:0};
    // strip the leading # if it's there
    hex = hex.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if(hex.length == 3){
        hex = hex.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(hex.substr(0, 2), 16),
        g = parseInt(hex.substr(2, 2), 16),
        b = parseInt(hex.substr(4, 2), 16);
    return { r, g, b };
  },

  toHex: (n) => {
    n = parseInt(n, 10);
    if (isNaN(n)) return "00";
    n = Math.max(0, Math.min(n, 255));
    return "0123456789ABCDEF".charAt((n - n % 16) / 16)
      + "0123456789ABCDEF".charAt(n % 16);
  },

  getLuminosity: (color) => {
    if (!color) return 1;
    const rgb = colors.toRGB(color);
    return calculateLuminosity(rgb);
  },

  isDark: (color) => {
    return colors.getLuminosity(color) < 0.5;
  },

  isBright: (color) => {
    return colors.getLuminosity(color) >= 0.5;
  },

  getTextColorForBg: (bgColor) => {
    return colors.isBright(bgColor) ? "#333333" : "#FFFFFF";
  }
}

const calculateLuminosity = (rgb) => {
  return ((rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114)) / 255;
}

module.exports = colors;

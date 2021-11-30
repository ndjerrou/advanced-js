export default (a, b, nature = "quelconque", unitA = "cm", unitB = "cm") => {
  if (nature.toLowerCase() === "rectangle") {
    let cCarre = 0;
    let c = 0;
    if (unitA === "cm" && unitB === "cm") {
      cCarre = a * a + b * b;
      c = Math.sqrt(cCarre);
      return c.toFixed(2);
    } else {
      // conversions
      switch (unitA) {
        case "km": {
          a = a * 100000;
          break;
        }
        case "m": {
          a = a * 100;
          break;
        }
        case "mm": {
          a = a * 0.1;
          break;
        }
        default: {
        }
      }
      switch (unitB) {
        case "km": {
          b = b * 100000;
          break;
        }
        case "m": {
          b = b * 100;
          break;
        }
        case "mm": {
          b = b * 0.1;
          break;
        }
        default: {
        }
      }
      cCarre = a * a + b * b;
      c = Math.sqrt(cCarre);
      return c.toFixed(2);
    }
  }
  return "Le triangle doit être rectangle !";
};

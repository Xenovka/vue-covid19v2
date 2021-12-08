const numeral = require("numeral");

export default function numberFormat(num) {
  return numeral(num).format("0,0");
}

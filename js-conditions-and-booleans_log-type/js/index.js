let data = [];
switch (typeof data) {
  case "undefined":
    console.log("undefined!");
    break;
  case "null":
    console.log("null!");
    break;
  case "number":
    console.log("number!");
    break;
  case "NaN":
    console.log("Not anumber!");
    break;
  case "string":
    console.log("string!");
    break;
  case "boolean":
    console.log("boolean!");
    break;
  case "function":
    console.log("function!");
    break;
  case "array":
    console.log("array!");
    break;
  default:
    console.log("I have no idea!");
}

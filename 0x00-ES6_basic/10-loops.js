export default function appendToEachArrayValue(array, appendString) {
  //for (var idx in array) {
  //var value = array[idx];
  //array[idx] = appendString + value;
  //}

  const newArray = [];
  for (const idx in array) {
    newArray.push(`${appendString}${value}`);
  }

  return newArray;
}

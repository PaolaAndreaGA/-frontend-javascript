/*eslint-disable*/
export default function guardrail(mathFunction) {
  const myArray = [];
  try {
    myArray.push(mathFunction());
  }
  catch(err) {
    myArray.push(err.toString());
  }
  finally {
    myArray.push('Guardrail was processed');
  }
  return myArray;
}

export function objectToArray(inputObject: Record<string, any>): any[] {
  if (Object.keys(inputObject).length === 0) {
    return [];
  }
  const keys = Object.keys(inputObject);
  const resultArray = keys.map((key) => inputObject[key]);
  return resultArray;
}

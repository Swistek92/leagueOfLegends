function objectToArray(inputObject: Record<string, any>): any[] {
  // Sprawdź, czy przekazany obiekt jest pusty
  if (Object.keys(inputObject).length === 0) {
    return [];
  }

  // Pobierz wszystkie klucze z obiektu wejściowego
  const keys = Object.keys(inputObject);

  // Mapuj te klucze na odpowiadające im wartości
  const resultArray = keys.map((key) => inputObject[key]);

  return resultArray;
}

export default objectToArray;

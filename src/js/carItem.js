function splitAddress(car) {
  const { address } = car;
  const addressParts = address.split(',').map(part => part.trim());
  const city = addressParts[addressParts.length - 2];
  const country = addressParts[addressParts.length - 1];
  return { city, country };
}
export { splitAddress };

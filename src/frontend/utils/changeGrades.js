export function celsiusToFahrenheit(grade) {
  const fahrenheit = (grade * 9 / 5) + 32;
  return fahrenheit;
}

export function fahrenheitToCelsius(grade) {
  const celsius = (grade - 32) * 5 / 9;
  return celsius;
}

export default {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
};

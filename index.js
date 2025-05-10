//! Start by creating the variables for the data recorded
const tempsInCelsius = [25, 18, 15, 28, 20, 23, 30, 22, 24, 21, 27, 19, 26, 17, 29];
const tempsInFahrenheit = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];

//* Then work on the conversion of the temperature from Celsius and Fahrenheit 
const celsiusTempsToFahrenheit = tempsInCelsius.map(temp => ((temp * 9 / 5) + 32));
const fahrenheitTempsToCelsius = tempsInFahrenheit.map(temp => ((temp -32)*5/9));

//All in Fahrenheit
const all_temperature_in_fahrenheit = tempsInFahrenheit.concat(celsiusTempsToFahrenheit)
const all_temperature_in_celsius = tempsInCelsius.concat(fahrenheitTempsToCelsius)


// //! Start the calculation of the total temperatures
// //* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius
const tot_temperature_in_fahrenheit = all_temperature_in_fahrenheit.reduce((sum, temp) => sum + temp, 0);
const tot_temperature_in_celsius = all_temperature_in_celsius.reduce((sum, temp) => sum + temp, 0);

// //! Start the calculation of the average temperatures
// //* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius
const avg_temperature_in_celsius = tot_temperature_in_celsius / all_temperature_in_celsius.length;
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / all_temperature_in_fahrenheit.length;

// //! Console.log the results for your own inspection if you'd like
console.log(tot_temperature_in_fahrenheit);
console.log(tot_temperature_in_celsius);
console.log(avg_temperature_in_fahrenheit);
console.log(avg_temperature_in_celsius);

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};
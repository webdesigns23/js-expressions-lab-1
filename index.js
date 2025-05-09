//! Start by creating the variables for the data recorded
const day1TempF = 32;
const day2TempF = 70;
const day3TempF = 80;
const day4TempF = 72;
const day5TempF = 68;
const day6TempF = 75;
const day7TempF = 82;
const day8TempF = 65;
const day9TempF = 77;
const day10TempF = 78;
const day11TempF = 73;
const day12TempF = 79;
const day13TempF = 71;
const day14TempF = 74;
const day15TempF = 76;
const day16TempC = 25;
const day17TempC = 18;
const day18TempC = 15;
const day19TempC = 28;
const day20TempC = 20;
const day21TempC = 23;
const day22TempC = 30;
const day23TempC = 22;
const day24TempC = 26;
const day25TempC = 24;
const day26TempC = 21;
const day27TempC = 27;
const day28TempC = 19;
const day29TempC = 17;
const day30TempC = 29;

//* Then work on the conversion of the temperature from Fahrenheit to Celsius
const day1TempC = (day1TempF-32)*5/9;
const day2TempC = (day2TempF-32)*5/9;
const day3TempC = (day3TempF-32)*5/9;
const day4TempC = (day4TempF-32)*5/9;
const day5TempC = (day5TempF-32)*5/9;
const day6TempC = (day6TempF-32)*5/9;
const day7TempC = (day7TempF-32)*5/9;
const day8TempC = (day8TempF-32)*5/9;
const day9TempC = (day9TempF-32)*5/9;
const day10TempC = (day10TempF-32)*5/9;
const day11TempC = (day11TempF-32)*5/9;
const day12TempC = (day12TempF-32)*5/9;
const day13TempC = (day13TempF-32)*5/9;
const day14TempC = (day14TempF-32)*5/9;
const day15TempC = (day15TempF-32)*5/9;

//conversion of the temperture from Celsius to Fahrenheit
const day16TempF = (day16TempC* 9 /5) + 32;
const day17TempF = (day17TempC* 9 /5) + 32;
const day18TempF = (day18TempC* 9 /5) + 32;
const day19TempF = (day19TempC* 9 /5) + 32;
const day20TempF = (day20TempC* 9 /5) + 32;
const day21TempF = (day21TempC* 9 /5) + 32;
const day22TempF = (day22TempC* 9 /5) + 32;
const day23TempF = (day23TempC* 9 /5) + 32;
const day24TempF = (day24TempC* 9 /5) + 32;
const day25TempF = (day25TempC* 9 /5) + 32;
const day26TempF = (day26TempC* 9 /5) + 32;
const day27TempF = (day27TempC* 9 /5) + 32;
const day28TempF = (day28TempC* 9 /5) + 32;
const day29TempF = (day29TempC* 9 /5) + 32;
const day30TempF = (day30TempC* 9 /5) + 32;

//! Start the calculation of the total temperatures
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius
const tot_temperature_in_fahrenheit = (day1TempF + day2TempF + day3TempF + day4TempF + day5TempF + day6TempF + day7TempF + day8TempF + day9TempF + day10TempF + day11TempF + day12TempF + day13TempF + day14TempF + day15TempF + day16TempF + day17TempF + day18TempF + day19TempF + day20TempF + day21TempF + day22TempF + day23TempF + day24TempF + day25TempF + day26TempF + day27TempF + day28TempF + day29TempF + day30TempF) 

const tot_temperature_in_celsius =(day1TempC +day2TempC +day3TempC +day4TempC +day5TempC +day6TempC +day7TempC +day8TempC +day9TempC +day10TempC +day11TempC +day12TempC +day13TempC +day14TempC +day15TempC +day16TempC +day17TempC +day18TempC +day19TempC +day20TempC +day21TempC +day22TempC +day23TempC +day24TempC +day25TempC +day26TempC +day27TempC +day28TempC +day29TempC +day30TempC)

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit/30; 
const avg_temperature_in_celsius = tot_temperature_in_celsius/30;

//! Console.log the results for your own inspection if you'd like
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
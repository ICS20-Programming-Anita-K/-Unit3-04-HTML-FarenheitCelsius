// Created by: Anita Kay
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function converts temperature from degrees Fahrenheit to degrees Celsius.
 */
function calcTemp () {
  // get user input
  let fahrenheit = parseFloat(document.getElementById("temp-f").value)


  // calculate the temperature in celsius
  let celsius = (5/9) * (fahrenheit - 32)

  // display the results
  document.getElementById("temp-c").innerHTML = "The temperature in degrees Celsius is " + celsius.toFixed(2) + "°C."
}
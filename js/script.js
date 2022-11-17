// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan lee
// Created on: nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  buttonOnChecked = document.getElementById("flash1").checked

  if (buttonOnChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
      "<p>Value is: 1</p>"
  } else {
    document.getElementById("radio-button-value").innerHTML =
      "<p>Value is: 6</p>"
  }
}

// Copyright (c) 2022 brennan-lee All rights reserved
//
// Created by: brennan-lee
// Created on: nov 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(
    "/ICS2O-5-02-My-first-Radio-Button-Program/sw.js",
    {
      scope: "/ICS2O-5-02-My-first-Radio-Button-Program/",
    }
  )
}

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
      "<p>Value is: 6</p>"
  } else {
    document.getElementById("radio-button-value").innerHTML =
    "<p>Value is: 4</p>"
  }
}

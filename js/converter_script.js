const calcTemp = () => {
  let numberTemp = document.getElementById("temp").value;
  let tempSelected = document.getElementById("temp_diff");
  let valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

  const celToFar = (cel) => {
    let fahrenheit = Math.round((cel * 9) / 5 + 32);
    return fahrenheit;
  };

  const farToCel = (far) => {
    let celcius = Math.round(((far - 32) * 5) / 9);
    return celcius;
  };

  let result;

  if (valueTemp == "cel") {
    result = celToFar(numberTemp);
    document.getElementById(
      "resultContainer"
    ).innerHTML = `= ${result}°Fahrenheit`;
  } else {
    result = farToCel(numberTemp);
    document.getElementById(
      "resultContainer"
    ).innerHTML = `= ${result}°Celcius`;
  }
};

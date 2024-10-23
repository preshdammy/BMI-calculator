function calcBmi() {
  let weight = +(document.getElementById('inputSect').value)
  let height = +(document.getElementById('inputSect1').value)

  if ( weight <= 0 || height <= 0) {
    output.innerHTML = "Please enter valid values!";
    return;
  }

  let bmi = weight / (height* height)
  let group;

 if (bmi < 18.5) {
    group = '(Underweight)'
  }
  else if (bmi < 25) {
    group = '(Normal weight)'
  }
  else if (bmi < 30) {
   group = '(Overweight)'
  }
  else {
    group = '(Obese)'
  }

  output.innerHTML = `Your BMI is ${bmi.toFixed(1)} ${group}`
  
}

function clearr() {

  document.getElementById('inputSect').value = '';
  document.getElementById('inputSect1').value = '';
  document.getElementById('output').innerHTML = '';
}

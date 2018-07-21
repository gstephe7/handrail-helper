const results = document.getElementById('results');
const calculate = document.getElementById('calculate');
const reset = document.getElementById('reset');
const error = document.getElementById('error');
var inches = document.getElementById('inches');
var numerator = document.getElementById('numerator');
var denominator = document.getElementById('denominator');
var run = document.getElementById('run');
var inchesValue = 0;
var numeratorValue = 0;
var denominatorValue = 0;
var runValue = 0;
var pitch = document.getElementById('pitch');
var topRailRightValue = document.querySelectorAll('.topRailRightValue');
var slopedPostValue = document.querySelectorAll('.slopedPostValue');
var slopedRailRightValue = document.querySelectorAll('.slopedRailRightValue');


function displayResults() {

  inchesValue = Number(inches.value);
  numeratorValue = Number(numerator.value);
  denominatorValue = Number(denominator.value);
  runValue = Number(run.value);
  var rise = 0;

  if (inchesValue > 0 && runValue >= 0 || numeratorValue > 0 && runValue >= 0) {

    inches.style.outline = 'none';
    numerator.style.outline = 'none';
    denominator.style.outline = 'none';
    run.style.outline = 'none';
    error.style.display = 'none';

    if (numeratorValue <= 0 || denominatorValue <= 0) {
      rise = inchesValue;
    } else {
      rise = inchesValue + (numeratorValue / denominatorValue);
    }

    var angle = Math.atan(rise / runValue);
    var degrees = Number((angle * 180 / Math.PI).toFixed(2));

    pitch.innerHTML = degrees;

    topRailRightValue.forEach(num => num.innerHTML = Number((180 - degrees) / 2).toFixed(1));
    slopedPostValue.forEach(num => num.innerHTML = Number(90 - degrees).toFixed(1));
    slopedRailRightValue.forEach(num => num.innerHTML = Number((90 + degrees) / 2).toFixed(1));

    results.style.display = 'block';
    results.scrollIntoView();

  } else {

    inches.style.outline = 'solid red';
    numerator.style.outline = 'solid red';
    denominator.style.outline = 'solid red';
    run.style.outline = 'solid red';
    error.style.display = 'block';

  }

}


function resetResults() {
  results.style.display = 'none';

  inches.value = '';
  numerator.value = '';
  denominator.value = '';
  run.value = 12;

  inchesValue = 0;
  numeratorValue = 0;
  denominatorValue = 0;
  runValue = 0;

  inches.style.outline = 'none';
  numerator.style.outline = 'none';
  denominator.style.outline = 'none';
  run.style.outline = 'none';
  error.style.display = 'none';

  form.scrollIntoView();
}


calculate.addEventListener('click', displayResults);
document.addEventListener('keyup', function(e) {
  if (e.keyCode === 13) {
    displayResults();
  }
});
reset.addEventListener('click', resetResults);

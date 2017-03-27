const bands = ['The Plot in You', 'Come Tierra', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'A ver si es cierto que esta madre jala', 'We Came as Romans', 'Barbie Girl alv compa', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML =
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');

console.log(sortedBands);

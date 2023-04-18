import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 300;

const refs = {
  inputFilter : document.getElementById ('search-box'),
  rezultFilter : document.querySelector('country-info'),
};

refs.inputFilter.addEventListener("input",debounce(onInputCountries,DEBOUNCE_DELAY ));
nameCountries="sw";

const BASE_URL='https://restcountries.com/v3.1/name';
const fields =`?feilds=name,capital,population,flags,languages`;

fetch(`${BASE_URL}/${nameCountries}${fields}`)
  .then(data => data.json())
  .then((data) => console.log((data.capital)));





 function onInputCountries (e) {
 e.preventDefault();
console.log ("etarget",e.target.value);
//  nameCountries = e.target.value.trim();

 console.log("cc",nameCountries);
 }



// function fetchCountries(nameCountries){
//   return fetch ( `${BASE_URL}/${nameCountries}${fields}`)
//   .then(response => response.json()
//   .then(response => response[0])
//   .then(({name, capital,  population, languages, flags})=>console.log(3,name, name.official, capital, flags.svg, languages, population)))
//   .catch(error=> console.log(error))
//   ;
// }

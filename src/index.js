import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 300;

import { fetchCountries } from './js/API';
console.log (fetchCountries);
const refs = {
  inputFilter: document.getElementById('search-box'),
  rezultFilter: document.querySelector('country-info'),
};

refs.inputFilter.addEventListener(
  'input',
  debounce(onInputCountries, DEBOUNCE_DELAY)
);


function onInputCountries(e) {
  e.preventDefault();
  const searchQuery = refs.inputFilter.value.trim();
  console.log (searchQuery);
  fetchCountries(searchQuery).then(res => {
    const { name, flags } = res[0];
    console.log(name.official);
    console.log(flags.png);
  });
}



// function fetchCountries(nameCountries){
//   return fetch ( `${BASE_URL}/${nameCountries}${fields}`)
//   .then(response => response.json()
//   .then(response => response[0])
//   .then(({name, capital,  population, languages, flags})=>console.log(3,name, name.official, capital, flags.svg, languages, population)))
//   .catch(error=> console.log(error))
//   ;
// }

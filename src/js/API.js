const BASE_URL='https://restcountries.com/v3.1/name';
const fields =`?feilds=name,capital,population,flags,languages`;

export function fetchCountries(nameCountries) {
  fetch(`${BASE_URL}/${nameCountries}${fields}`)
    .then(data => {
      if (!data.ok) {
        throw new Error(data.status);
      }
      return data.json();
    });
  
}


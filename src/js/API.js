const BASE_URL='https://restcountries.com/v3.1/name';
const fields =`?feilds=name,capital,population,flags,languages`;
const nameCountries ="sw";

// function fetchCountries1(nameCountries) {
//   fetch(`${BASE_URL}/${nameCountries}${fields}`)
//     .then(data => { 
//       if (!data.ok) {
//         throw new Error(data.status);
//       }
//       {console.log ("112",data.json());
//      return data;
//     //  .json()
//     }
//     });
  
// };

function fetchCountries(nameCountries) {
  return fetch(`${BASE_URL}/${nameCountries}${fields}`).then(response => {
    if (!response.ok) {
      if (response.status === 404) {
        return [];
      }
      throw new Error(response.status);
    }
    return response.json();
  });
}
export {fetchCountries};
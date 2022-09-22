const loadCountries = () => {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => displayCountries(data))
    .catch((err) => console.log(err));
};

const countriesContainer = document.getElementById("countries");
const displayCountries = (countries) => {
  const countriesHtml = countries.map((country) => {
    console.log(country);
    return getCountryHtml(country);
  });
  const country = countriesHtml.join(" ");
  countriesContainer.innerHTML = country;
};

const getCountryHtml = ({
  name,
  timezones,
  area,
  flags,
  independent,
  population,
  region,
  startOfWeek,
  unMember,
  subregion,
}) => {
  // console.log(country);
  // const { name, timezones, area, flags } = country;
  return `
  <div class="country">
  <h2>${name.common}</h2>
  <p>TimeZone: ${timezones[0]}</p>
  <p>Area: ${area} SQ</p>
  <p>isIndependent: ${independent}</p>
  <p>population: ${population}</p>
  <p>region: ${region}</p>
  <p>startOfWeek: ${startOfWeek}</p>
  <p>member of un: ${unMember}</p>
  <p>subRegion: ${subregion}</p>
  <img src="${flags.png}">
  </div>
  `;
};

//original
/* 
const getCountryHtml = (country) => {
  // console.log(country);
  return `
  <div class="country">
  <h2>${country.name.common}</h2>
  <p>TimeZone: ${country.timezones[0]}</p>
  <p>Area: ${country.area} SQ</p>
  <img src="${country.flags.png}">
  </div>
  `;
};
 */

//option 1
/* const getCountryHtml = (country) => {
  // console.log(country);
  // step 1
  const { name, flags, area, timezones } = country;
  return `
  <div class="country">
  <h2>${name.common}</h2>
  <p>TimeZone: ${timezones[0]}</p>
  <p>Area: ${area} SQ</p>
  <img src="${flags.png}">
  </div>
  `;
}; */

loadCountries();

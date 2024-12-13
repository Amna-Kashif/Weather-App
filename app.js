const API_KEY = `d7d141c1411b08eb40d72f4df8e2a01d`;
const inputdata = document.getElementById("inputField");
const showWeather = document.getElementById("showWeather");

const searchData = async () => {
  showWeather.innerHTML = `<div class="spinner-border m-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputdata.value}&appid=${API_KEY}&units=metric`;

  const fetchData = await fetch(API_URL);
  const response = await fetchData.json();

  console.log(response);

  return showData(response);
};

const showData = (data) => {
  if (data.cod == '404') {
    showWeather.innerHTML = `<h1> ${data.message}</h1>`;
    return;
  } else {

    showWeather.innerHTML = ` <div class="card text-white text-center m-3" style="width: 100%; max-width: 400px; 
    border-radius: 10px; background: linear-gradient(to bottom, #20c2aa, #4f6b91);
     box-shadow: inset 0 0 5px 1px rgba(255, 255, 255, 0.7);">
  
  <img width="80" height="80" src="${`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}"
   class="card-img-top img-fluid mx-auto" alt="...">

  <hr class="w-75" style="margin: auto;">

  <h1 class="card-text mt-3 fst-italic">${data.name}</h1>
  <h2 class="card-text fst-italic">${data.main.temp}<sup>°</sup>C</h2>

  <h2 class="d-flex fst-italic text-seconday  justify-content-center mb-2">
  <br>${data.weather[0].main}</h2>
  
  <div class="card-body d-flex flex-column flex-sm-row justify-content-around text-center fw-bold fst-italic">
  <h5 class="d-flex mb-2 mb-sm-0" style="padding: 12px;  border-radius: 10px;">feels_like:${data.main.feels_like}</h5>

    <h5 class="d-flex" style="padding: 12px; border-radius: 10px;">Wind: ${data.wind.speed} km/h</h5>
  </div>
</div>
`;
  }
};

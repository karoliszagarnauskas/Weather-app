const api = {
  key: "7242886abe19907eab9d97eafcb462bf",
  baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
if (searchbox) {
  searchbox.addEventListener('keypress', setQuery);
}

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
    // console.log(searchbox.value);
  }
}

function getResults(query){
  fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then(weather => {
    return weather.json();
  }).then(displayResults);
}

function displayResults(weather){
  // console.log(weather);
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;
  if (`${weather.weather[0].main}` == "Clouds") {
    console.log("pavyko");
  }else {
    console.log("nepavyko");
  }
  //   $sql = "SELECT * FROM items WHERE item_id=1;";
  //   $result = mysqli_query($connection, $sql);
  //   $resultCheck = mysqli_num_rows($result);
  //   if ($resultCheck >0) {
  //     while ($row = mysqli_fetch_assoc($result)) {
  //       echo  $row['item'] . "<br>";
  //     }
  //   }
  //
  // }

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

function dateBuilder(d){
  let months = ["January", "March", "April", "May", "June", "July", "August","September", "October", "November","December"];
  let days = ["Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

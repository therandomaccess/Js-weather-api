const url = 'https://api.openweathermap.org/data/2.5/'
const key = '0dd84da6e86da029b76ac79830926eef'

const setquery = (e) => {
    if (e.keyCode == '13')
        getresult(searchbar.value)
}

const getresult = (city) => 
{
    let query = `${url}weather?q=${city}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather =>{
        return weather.json()
    })
    .then(displayresult)

}
const displayresult = (results) =>
{
    let city=document.querySelector(".city")
    city.innerHTML = `${results.name},${results.sys.country}`
    let temp=document.querySelector(".temp")  
    temp.innerHTML = `${Math.round(results.main.temp)} °C `
    let desc = document.querySelector(".desc") 
    desc.innerHTML = `${results.weather[0].description}`
    let minmax=document.querySelector(".minmax")
    minmax.innerHTML=`${Math.round(results.main.temp_min)} °C /
    ${Math.round(results.main.temp_max)} °C `

}

const searchbar = document.getElementById('bar')
searchbar.addEventListener('keypress', setquery)


input=document.getElementById("inp")
input.addEventListener('input', function(event) {
    input.value= event.target.value;
});
const windsp=document.querySelector(".wind")
const humidity=document.querySelector(".humidity")
    // input=document.getElementById("inp")
const search=document.querySelector(".searchi")
const city=document.querySelector(".city")
const temp=document.querySelector(".temp")
const weather=document.querySelector(".weather")
const error= document.querySelector(".error")

async function give(){
    const windsp=document.querySelector(".wind")
    const humidity=document.querySelector(".humidity")
    // input=document.getElementById("inp")
    const search=document.querySelector(".searchi")
    const city=document.querySelector(".city")
    const temp=document.querySelector(".temp")
    const a="54d8d69657670b2d6c06971206cc164a"
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=54d8d69657670b2d6c06971206cc164a&units=metric`

    let data=await fetch(apiUrl)
    if (data.status==404) {
        weather.style.display="none"
        error.style.display="flex"

        
    } else {
        weather.style.display="block"
        error.style.display="none"
        let pdata=await data.json()
    console.log(pdata.main.temp)
    temp.innerHTML=pdata.main.temp
    windsp.innerHTML=pdata.wind.speed
    city.innerHTML=pdata.name
    humidity.innerHTML=pdata.main.humidity
    console.log(pdata.weather[0].main)
    weathericon=document.querySelector(".weather-icon")
    weatheraplha=pdata.weather[0].main
    w2=weatheraplha.toLowerCase()
    console.log(w2)
    weathericon.src="./weather-app-img/images/"+w2+".png"
    
    // console.log(pdata)
    // console.log(pdata.main.temp)
    return pdata.weather[0].main
        
    }
}


async function dataloader() {
    // search=document.querySelector(".searchi")
    search.addEventListener("click",()=>{

         give()

            
    })

}

    
    
       
    

    

    



   

 



    

  

    


dataloader()





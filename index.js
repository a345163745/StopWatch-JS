let start = document.querySelector("#start")
let display = document.querySelector("#display")
let reset = document.querySelector("#reset")
let Checkstatus = false
let sec = 0
let min = 0
let hour = 0
let interval = null
let displaysec = 0
let displaymin = 0
let displayhour = 0
//start button click event
start.addEventListener("click",function(){
    if(Checkstatus===false){
        interval = window.setInterval(timer,1000) //myInterval = setInterval(function, milliseconds);
        start.innerHTML = "Stop"
        Checkstatus = true
    }else{
        window.clearInterval(interval) //Then you can to stop the execution by calling clearInterval():
        start.innerHTML = "Start"
        Checkstatus = false
    }
    
})

reset.addEventListener("click",function(){
    window.clearInterval(interval)
    sec=0
    min=0
    hour=0
    display.innerHTML = "00:00:00"
    start.innerHTML = "Start"
    Checkstatus = false
})

function timer(){
    sec++
    if(sec === 60){
        sec=0
        min++
        if(min ===60){
            min=0
            hour++;
        }
    }
    //set extra zero for value under 10
    if(sec<10){
        displaysec = `0${sec}`
    }else{
        displaysec = sec
    }
    if(min<10){
        displaymin = `0${min}`
    }else{
        displaymin = min
    }
    if(hour<10){
        displayhour = `0${hour}`
    }else{
        displayhour = hour
    }
    display.innerHTML = `${displayhour}:${displaymin}:${displaysec}`

}

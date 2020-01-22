//Variables for hand selector in document
const secondsHand = document.querySelector('.second-hand');



//Set function to get the time
function setDate(){
    //Variable now = the new Date constructor (find out more)
    const now = new Date();
    //Establish variables for seconds, minutes and hours
    const seconds = now.getSeconds();
    //Establish variable for hand position according to time (360deg)
    const secondsDegrees = ((seconds / 60) * 360);


    const minutes = now.getMinutes();
    const hours = now.getHours();

console.log(seconds)
};

//setInterval is an inbuilt method  -https://javascript.info/settimeout-setinterval
//It takes the specified function (setDate) and runs it every second (1000m/s) as a loop
setInterval(setDate, 10000);



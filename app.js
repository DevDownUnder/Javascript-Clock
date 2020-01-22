//Variables for hand selector in document
const secondsHand = document.querySelector('.second-hand');



//Set function to get the time
function setDate(){
    //Variable now = the new Date constructor (find out more)
    const now = new Date();
    //Establish variables for seconds, minutes and hours
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    //Establish variable for hand position according to time (360deg)
    //+90 to offset the transform 90deg in stylesheet (to make the clock start from 0)
    const secondsDegrees = ((seconds / 60) * 360) + 90; 
   
    //Second hand is selected and rotated to the correct degrees established above
    // ` (${ }) ` is a template literal - the `` allow an embedded expression (referral to the const secondsDegrees)
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`

console.log(seconds)
};

//setInterval is an inbuilt method  -https://javascript.info/settimeout-setinterval
//It takes the specified function (setDate) and runs it every second (1000m/s) as a loop
setInterval(setDate, 10000);



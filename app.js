//Variables to link to each different hand in the HTML document (DOM)
const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');


//Set function to get the time
function setDate() {
    //Variable now = the new Date constructor (method )
    const now = new Date();

    //Establish variables for seconds, minutes and hours
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    //Establish variable for hand position on clock face according to time (using 360deg)
    //+90 to offset the transform 90deg in stylesheet (to make the clock start from 0)
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90;

    //Element.change styling.which css property?
    // ` ` = what we want to do  ${ } = a variable set out previously (above)
    //Rotate the seconds hand to the degrees calculated in the variable
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`

};

//setInterval is an inbuilt method  -https://javascript.info/settimeout-setinterval
//It takes the specified function (setDate) and runs it every second (1000m/s) as a loop
setInterval(setDate, 1000);



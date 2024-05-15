// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

const timeToMilitary=(timeInput)=>{
    const typeOfHour=timeInput.slice(timeInput.length-2,timeInput.length);
    const hour=timeInput.slice(0,timeInput.length-2);
    const splitHour=hour.split(":")
    let sumHour="00";
    const twelveHour=12;

    if(splitHour[0]==="12" && typeOfHour==="AM"){
        sumHour="00";
    }else if(parseInt(splitHour[0])<12 && typeOfHour==="AM" || parseInt(splitHour[0])===12 && typeOfHour==="PM"){
        sumHour=splitHour[0];
    }else {
        sumHour=twelveHour+parseInt(splitHour[0]);
    }
    splitHour[0]=sumHour;
    const newHour=splitHour.join(":");
    return newHour;
}
timeToMilitary("06:40:03AM")

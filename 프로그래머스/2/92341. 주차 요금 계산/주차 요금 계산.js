function solution(fees, records) {
    var answer = [];
    const parking = new Map();
    const total = new Map();
    
    for(const record of records){
        const [time, car, type] = record.split(' ');
        
        const carIn = parking.get(car);
        if(!carIn){
            parking.set(car,time);
        } else{
            const minute = calMinute(carIn, time);
            const curMinute = total.get(car);
            curMinute ? total.set(car,curMinute+minute):total.set(car,minute);
            parking.set(car,null);
        }
    }
    
    for(const [car,time] of parking.entries()){
        if(!time)
            continue;
        const minute = calMinute(time, '23:59');
        const curMinute = total.get(car);
        curMinute ? total.set(car,curMinute+minute):total.set(car,minute);
        parking.set(car,null);
    }
    
    const cars = [];

    for(const [car,minute] of total.entries()){
        let fee = fees[1];
        if(minute>fees[0]){
            fee += Math.ceil((minute-fees[0])/fees[2]) * fees[3];
        }
        
        cars.push([car,fee]);
    }
    cars.sort((a,b)=>a[0]-b[0]);
    cars.forEach(e=>answer.push(e[1]));
    
    return answer;
}

function calMinute(carIn, carOut){
    const inTime = carIn.split(':');
    const outTime = carOut.split(':');

    return (outTime[0]-inTime[0])*60 + (outTime[1]-inTime[1]);
}
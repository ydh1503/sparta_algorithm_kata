function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let curWeight = 0;
    const trucksOnBridge = [];
    
    for(let i=0; i<truck_weights.length; i++){
        answer++;
        let truck = null;
        while(curWeight+truck_weights[i] > weight){
            truck = trucksOnBridge.shift();
            curWeight -= truck.weight;
        }
        if(truck !== null){
            const time = truck.enterTime + bridge_length;
            answer = answer > time ? answer : time;
        }
        trucksOnBridge.push({weight:truck_weights[i], enterTime: answer});
        curWeight += truck_weights[i];
    }
    answer = trucksOnBridge[trucksOnBridge.length-1].enterTime + bridge_length;
    return answer;
}
// This array contains all the segments required to make a full clock
const pathArray = [
  "M 100 20 ",
  "L 140 30.717967697 " ,
  "L 169.282032303 60 " , 
  "L 180 100 ", 
  "L 169.282032303 140 " ,
  "L 140 169.282032303 " ,
  "L 100 180 " ,
  "L 60 169.282032303 " ,
  "L 30.717967697 140 " ,
  "L 20 100 " ,
  "L 30.717967697 60 ",
  "L 60 30.717967697 " ,
  "Z"
];

// The path looks differnt when hour = 12 hence a unique path data
const pathDataZeroHour = "M 95 21.339745962 Q 100 20 105 21.339745962 L 105 21.339745962 Q 110 22.679491924 113.660254038 26.339745962 L 113.660254038 26.339745962 Q 117.320508076 30 118.660254038 35 L 118.660254038 35 Q 120 40 118.660254038 45 L 118.660254038 45 Q 117.320508076 50 113.660254038 53.660254038 L 113.660254038 53.660254038 Q 110 57.320508076 105 58.660254038 L 105 58.660254038 Q 100 60 95 58.660254038 L 95 58.660254038 Q 90 57.320508076 86.339745962 53.660254038 L 86.339745962 53.660254038 Q 82.679491924 50 81.339745962 45 L 81.339745962 45 Q 80 40 81.339745962 35 L 81.339745962 35 Q 82.679491924 30 86.339745962 26.339745962 L 86.339745962 26.339745962 Q 90 22.679491924 95 21.339745962 Z";

// calculate path data function defintion
function calcCurrentPathData(hourIndex){
  let currentPathData = pathArray[0];
  let position = 1;
  let subgroupPosition = hourIndex;     
  
  
  if (hourIndex != 0) {
      // hence unless the current element in the group is not the identity do the following
    while(subgroupPosition>0){
      currentPathData = currentPathData + pathArray[subgroupPosition];
      position++;
      subgroupPosition = (hourIndex * position)%12;  // eg: (5*2)%12 --> 10
    }
    
    currentPathData = currentPathData + pathArray[12];
    
  } else {  // if the hour is 12
    currentPathData = pathDataZeroHour;
  }

  
  return currentPathData;
}


export function runGhadi (){
  
  // get the path trace and the path itself
  let pathLine = document.querySelector("#path");
  let pathTrace = document.querySelector("#trace");
  let pathBulb = document.querySelector("#bulb");
  

  
  window.setInterval(function () {
    
    // Update time every second
    let samaya = new Date();
    let currentMinutes = samaya.getMinutes();
    let currentSeconds = samaya.getSeconds();
    let currentHour = samaya.getHours()%12;
    const currentTimeInterval = currentMinutes + currentSeconds/60;

    
    // use the path data calculated acc to the hour and pass it to the svg paths
    pathLine.setAttribute('d', calcCurrentPathData(currentHour));
    pathTrace.setAttribute('d', calcCurrentPathData(currentHour));
    pathBulb.setAttribute('d', calcCurrentPathData(currentHour));
    
    // get the total length of the path 
    let l = pathLine.getTotalLength();
    
    let currentOffset = (l/60)*currentTimeInterval;

  
    // making path traverse as each second passes
    const dashArrayValue = currentOffset.toString() + ", "  + l.toString();
    pathLine.style.strokeDasharray =  dashArrayValue;
    
    // positioning bulb as each second passes
    pathBulb.style.strokeDasharray =  ".25 ," +  l;
    pathBulb.style.strokeDashoffset = "-"+currentOffset;
    
  
  }, 1000);
}
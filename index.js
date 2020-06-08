// Your code here
function saturdayFun(activity = 'roller-skate'){
 const thingsTodo = `This Saturday, I want to ${activity}!`;
 return thingsTodo;
}
saturdayFun('bathe my dog');

function mondayWork(work = 'go to the office'){
 const workTodo = `This Monday, I will ${work}.`;
 return workTodo;
}
mondayWork('work from home');

function wrapAdjective(vflair = "*"){
  return function(status = 'special'){
    let person = `You are ${vflair}${status}${vflair}!`;
      return person;
  }
}
wrapAdjective("%")("a hard worker")


let arrayOfTransforms = [
          function(a){ return a * 2 },
          function(a){ return a + 1000},
          function(a){ return a % 7 }
        ];
  
function actionApplyer(start = 0,arr = []){
  console.log(arr)
  for(let i = 0; i<arr.length;i++){
    start = arr[i](start);
  }
  return start;
}
actionApplyer(13, arrayOfTransforms);

  let Calculator = {
    add: (x,y) => {
      return x + y
    },
    subtract: (x,y) => {
      return x - y
    },
    multiply: (x,y) => {
      return x * y
    },
    divide: (x,y) => {
      return x / y
    }
  }
  let result = [Calculator.add(1,3), Calculator.subtract(1,3), Calculator.multiply(1,3), Calculator.divide(10,5)];
 console.log(result);

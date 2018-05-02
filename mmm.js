let data = [10,22,5,3,7,8,2,0,5,12,9,4]
data = data.sort((a,b)=>a-b)
console.log(data)
let median = 0;
let q1 = 0;
let q3 = 0;

if(data.length % 2 == 0){
    console.log(data.length/2-1)
    median = (data[data.length/2-1] + data[data.length/2]) / 2
    q1 = data[data.length/2/2] + data[data.length/2/2 + 1] / 2
    q3 = data[data.length*3/4] + data[data.length*3/4 + 1] / 2
}
else{
    median = data[(data.length-1)/2]
    q1 = data[(data.length-1)]
}
let sum = 0;
let variance = 0;
data.forEach(function(i){
    sum += i
})

let mean = sum/data.length
data.forEach(function(i){
    variance += (i-mean)*(i-mean)
})
variance = variance/data.length - 1;
let std = Math.sqrt(variance)
console.log(sum,mean,variance,std, median)

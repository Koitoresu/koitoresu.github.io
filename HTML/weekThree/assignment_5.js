const peterWeight = 92; 
const peterHeight = 1.95;
const lucasWeight = 78;
const lucasHeight = 1.95;
const tempInF = 32;
const tempInC = 15;

console.log('Assignment 5');
console.log('');
console.log('Part A');

console.log(`The BMI of Petter is ${peterBMI = calcBMI(peterWeight, peterHeight)}, 
The BMI of Lucas is ${lucasBMI = calcBMI(lucasWeight, lucasHeight)}, 
Peter’s BMI is higher than Lucas’s BMI that is ${(peterBMI > lucasBMI) ? true : false}`);

console.log('');
console.log('Part B');

console.log(`${tempInF}°F is ${convertTempFtoC(tempInF)}°C`);
console.log(`${tempInC}°C is ${convertTempCtoF(tempInC)}°F`);

console.log('');
console.log('Part C');

console.log(`Lucas BMI is ${lucasBMI} which is ${(lucasBMI > peterBMI) ? 'higher' : 'lower'} than Peter's BMI of ${peterBMI}`);

console.log('');
console.log('Part D');

const convertCtoFahrenheit = (celsius) => {
    const convertToF=(celsius * 9/5) + 32;
    console.log(`${celsius}°C is ${convertToF}°F`);
    return;
};

const convertFtoCelsius = (fahrenheit) =>{
    const convertToC = ((fahrenheit-32) * 5/9)
    console.log(`${fahrenheit}°F is ${convertToC}°C.`);
    return;
};

const tempC=[100,0,10];
for (let i=0; i<tempC.length; i++) {
    convertCtoFahrenheit(tempC[i])
};

const tempF=[32,10,102];
for(let i=0; i<tempF.length;i++){
    convertFtoCelsius(tempF[i])
};

function calcBMI(mass, height) {
    BMI = (mass / (height * height));
    return BMI;
};

function convertTempCtoF(x) {
    celsius = x;
    return ((celsius * 9/5) + 32)
};

function convertTempFtoC(x) {
    fahrenheit = x;
    return ((fahrenheit-32) * 5/9)
};

const peter = {
    firstName: 'Peter', 
    lastName: 'Smith',
    birthYear: 1990,
    jobTitle: 'student',
    score: [100, 99,90, 96],

    calcAvgScore: function() {
        this.avgScore = (this.score[0] + this.score[1]+ this.score[2] + this.score[3]) / this.score.length;
        return this.avgScore;
    },

    showSummary: function() {
        console.log(`${this.firstName} ${this.lastName} has completed ${this.score.length} tasks, and ${this.firstName}'s average score is ${this.calcAvgScore()}, ${this.firstName}'s highest score is ${Math.max(...this.score)}`);
    }
}

console.log('This is Part A');
console.log('');

document.querySelector('.task1').textContent  = peter.showSummary();

console.log('');
console.log('This is Part B');
console.log('');

document.getElementById("submit").onclick = function(){
    var tempInC = document.getElementById("c").value;

        if (tempInC =="")throw console.log("No entry. Please enter a value between -88 and 58");
        if (isNaN(tempInC))throw console.log("Invalid input. Please enter a value between -88 and 58");
        if ( tempInC <= -89  )throw console.log("Input too low. Please enter a value between -88 and 58");
        if ( tempInC >= 59  )throw console.log("Input too high. Please enter a value between -88 and 58");
        if ( tempInC > -89 && tempInC < 59 ) {
            const convert=(tempInC*(9/5))+32;
            const msg=(`${tempInC}°C is ${convert}°F`);
           
            console.log(msg);
            document.querySelector('.task2').textContent  = msg;
            return msg;
        }  
};


console.log('');
console.log('This is Part C');
console.log('');

const open1 = document.getElementById('open1');
const modalContainer1 = document.getElementById('modalContainer1');
const close1 = document.getElementById('close1');
open1.addEventListener('click',() => {
    modalContainer1.classList.add('show')
});
close1.addEventListener('click',() => {
    modalContainer1.classList.remove('show')
});

const open2 = document.getElementById('open2');
const modalContainer2 = document.getElementById('modalContainer2');
const close2 = document.getElementById('close2');
open2.addEventListener('click',() => {
    modalContainer2.classList.add('show')
});
close2.addEventListener('click',() => {
    modalContainer2.classList.remove('show')
});

const open3 = document.getElementById('open3');
const modalContainer3 = document.getElementById('modalContainer3');
const close3 = document.getElementById('close3');
open3.addEventListener('click',() => {
    modalContainer3.classList.add('show')
});
close3.addEventListener('click',() => {
    modalContainer3.classList.remove('show')
});

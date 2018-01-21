const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]

    var grades = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        F: 0
    };


for (let i = 0; i < scores.length; i++) {
    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */

    if (scores[i] >= 90) {
        grades.A += 1
    } else if (scores[i] >= 80 && scores[i] < 90) {
        grades.B += 1
    } else if (scores[i] >= 70 && scores[i] < 80) {
        grades.C += 1
    } else if (scores[i] >= 60 && scores[i] < 70) {
        grades.D += 1
    } else if (scores[i] >= 50 && scores[i] < 60) {
        grades.F += 1
    }

}
console.log("A: " + grades.A)
console.log("B: " + grades.B)
console.log("C: " + grades.C)
console.log("D: " + grades.D)
console.log("F: " + grades.F)

// lowest
var low = scores.sort();
console.log("Lowest Score: " + low[0]);

// higest
var high = scores.sort(function(a, b) {return b-a});
console.log("Higest Score: " + high[0]);

// find the most common grade

// is the current grades value higher than the last
var mostFreq = 0;

var currentGradeCountHigh = 0;

for (x in grades){
    if (mostFreq <= grades[x]) {
        mostFreq = grades[x];
    }
}

// if there is more than one most common grade
for (x in grades) {
    if (mostFreq === grades[x]) {
        console.log("Most Common Grade: ", x);
    }
}


// find the least common grade 

var leastFreq = mostFreq;

var currentGradeCountLow = 0;

for (x in grades){
    if (leastFreq >= grades[x]) {
        leastFreq = grades[x];
    }
}

// if there is more than one least common grade
for (x in grades){
    if(leastFreq === grades[x]){
        console.log("Least Common Grade: ", x);
    }
}


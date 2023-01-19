let submitBtn = document.getElementById('submit');
submitBtn.addEventListener("click", CheckIt);

function CheckIt () {
    let result = 0;

    let answer1 = document.getElementById('q1').value;
    if (answer1==="4") {
        result++;
    }

    let answer2 = document.getElementById('q2').value;
    if (answer2==="3") {
        result++;
    }

    let answer3 = document.getElementById('q3').value;
    if (answer3==="12") {
        result++;
    }

    let answer4 = document.getElementById('q4').value;
    if (answer4==="5") {
        result++;
    }

    let answer5 = document.getElementById('q5').value;
    if (answer5==="1") {
        result++;
    }

    alert("The number of correct answers is: " + result);
}
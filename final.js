
function calculateBmi() {
    var weight = document.bmiForm.weight.value;
    var height = document.bmiForm.height.value;

    if(weight > 0 && height > 0){	

        var finalBmi = weight/(height/100*height/100);
        var bmiID = document.getElementById("bmi");
        var meaningID = document.getElementById("meaning");
        
        document.getElementById("bmi").value = finalBmi.toFixed(2).toString();
 
            if(finalBmi < 18.5) {
                document.getElementById("meaning").value = "You are considered underweight.";
                document.getElementById("bmi").style.color = 'red';
            }
            if(finalBmi > 18.5 && finalBmi < 25) {
                document.getElementById("meaning").value = "You are healthy.";
                document.getElementById("bmi").style.color = 'green';
                document.getElementById("meaning").style.color = 'green';
            }
            if(finalBmi > 25 && finalBmi < 30) {
                document.getElementById("meaning").value = "You are considered overweight.";
                document.getElementById("bmi").style.color = 'orange';
                document.getElementById("meaning").style.color = 'orange';
            }
            if(finalBmi > 30 && finalBmi < 40) {
                document.getElementById("meaning").value = "You are considered severely obese.";
                document.getElementById("bmi").style.color = 'red';
                document.getElementById("meaning").style.color = 'red';
            }
            if(finalBmi > 40 && finalBmi < 45) {
                document.getElementById("meaning").value = "You are considered morbidly obese.";
                document.getElementById("bmi").style.color = 'red';
                document.getElementById("meaning").style.color = 'red';
            }
            if(finalBmi > 45) {
                document.getElementById("meaning").value = "You are considered super obese.";
                document.getElementById("bmi").style.color = 'red';
                document.getElementById("meaning").style.color = 'red';
            }
            document.getElementById("showResult").style.display ="block";
    }
    else {
        alert("Please fill everything in correctly!!");
    }
}

// SOMETHING NEW I LEARNED>>
// Making all of these conditional statements based on what the user inputs into the form was pretty 
// new to me, but not as new as formatting and making the whole page come together as well as css styling.
// I really loved styling using css, I believe that was the most fun for me!
// Learning the formula for the BMI calculator and creating the navigation bar was pretty new for me as well.
// Generally practicing and learning javascript was a difficulty for me but I would say that I have definitely
// improved from the beginning of the year since I learned so many new things and really enjoyed the class 
// overall. Event handling was the newest thing I learned throughout this final project and I wish to 
// learn more about coding in the future. Thank you Mr. Padjen!
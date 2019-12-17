
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
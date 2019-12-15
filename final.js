
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
            }
            if(finalBmi > 18.5 && finalBmi < 25) {
                document.getElementById("meaning").value = "You are healthy.";
            }
            if(finalBmi > 25 && finalBmi < 30) {
                document.getElementById("meaning").value = "You are considered overweight.";
            }
            if(finalBmi > 30 && finalBmi < 40) {
                document.getElementById("meaning").value = "You are considered severely obese.";
            }
            if(finalBmi > 40 && finalBmi < 45) {
                document.getElementById("meaning").value = "You are considered morbidly obese.";
            }
            if(finalBmi > 45) {
                document.getElementById("meaning").value = "You are considered super obese.";
            }
            
    }
    else {
        alert("Please fill everything in correctly!!");
    }
}
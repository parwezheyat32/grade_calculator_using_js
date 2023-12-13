function calculateGrade(){
    let result = document.getElementById("marksInput").value;
    let message = "";

    if(result >=90 && result <= 100){
        message = "Grade A";
    }
    else if(result >= 79 && result <= 89){
        message = "Grade B";
    }
    else if(result >= 69 && result <= 79){
        message = "Grade C";
    }
    else if(result >= 59 && result <= 69){
        message = "Grade D";
    }
    else if(result >= 49 && result <= 59){
        message = "Grade E";
    }
    else if(result >= 0 && result <= 49){
        message = "Fail";
    }
    else{
        message = "Invalid";
    }

    document.getElementById("grade").innerHTML = message;

}
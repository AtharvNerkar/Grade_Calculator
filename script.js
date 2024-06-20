// Function for calculating grades 
const calculate = () => { 

    // Getting input from user into height variable. 
    let chemistry = document.querySelector("#chemistry").value; 
    let hindi = document.querySelector("#hindi").value; 
    let maths = document.querySelector("#maths").value; 
    let phy = document.querySelector("#phy").value;
    let eng = document.querySelector("#eng").value; 
    let grades = ""; 
    
    // Input is string so typecasting is necessary. */
    if (parseFloat(chemistry)<0.0 || parseFloat(chemistry)>100.0 || parseFloat(hindi)<0.0 || parseFloat(hindi)>100.0 || parseFloat(maths)<0.0 || parseFloat(maths)>100.0 ||
    parseFloat(phy)<0.0 || parseFloat(phy)>100.0 || parseFloat(eng)<0.0 || parseFloat(eng)>100.0) {
       grades = "Invalid Marks"; }
    
    let totalgrades = 
        parseFloat(chemistry) + 
        parseFloat(hindi) + 
        parseFloat(maths) + 
        parseFloat(phy)+
        parseFloat(eng);
    
    // Checking the condition for the providing the 
    // grade to student based on percentage 
    let percentage = (totalgrades / 500) * 100; 
    if (percentage <= 100 && percentage >= 80) { 
        grades = "A"; 
    } else if (percentage < 80 && percentage >= 60) { 
        grades = "B"; 
    } else if (percentage < 60 && percentage >= 40) { 
        grades = "C"; 
    } else { 
        grades = "F"; 
    } 
    


    // Checking the values are empty if empty than 
    // show please fill them 
    if (chemistry == "" || hindi == ""
                || maths == "" || phy == "" || eng=="") { 
        document.querySelector("#showdata").innerHTML 
            = "Please enter all the fields"; 
    } else { 
    
        // Checking the condition for the fail and pass 
        if (percentage >= 39.5) { 
        document.querySelector( 
            "#showdata"
        ).innerHTML = 
            ` Out of 500 your total is ${totalgrades} 
            and percentage is ${percentage}%. <br> 
            Your grade is ${grades}. You are Pass. `; 
        } else { 
        document.querySelector( 
            "#showdata"
        ).innerHTML = 
            ` Out of 500 your total is ${totalgrades} 
            and percentage is ${percentage}%. <br> 
            Your grade is ${grades}. You are Fail. `; 
        } 
    } 
    }; 
    
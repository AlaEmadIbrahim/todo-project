console.log("ALA")

let userName = prompt("Please enter your name? ");

let gender = prompt("Please enter your gender ?", "Male or Female");

let age = prompt("Please enter your age ?");

if (age <= 0) {
    alert("Your age is less than or equal to zero")
};

let askUser = confirm("Do you want to skip the welcoming message? ");

if (gender == "Male") {
    // alert("Welcome Mr." + userName + " to our website. ")
    alert(`Welcome Mr  ${userName} to our website. `)
}
else if (gender == "Female") {
    // alert("Welcome Ms." + userName + " to our web site. ")
    alert(`Welcome Ms  ${userName} to our website.`)
} else {
    // alert("Welcome " + userName + " to our web site. ")
    alert(`Welcome ${userName} to our website.`)
};

let qusShower = prompt("Do you sing in the shower?", "yes or no");

let qusCheated = prompt("Have you ever cheated at a board game?", "yes or no");

let qusSleep = prompt("Do you talk in your sleep?", "yes or no");

let arrAnswer = [];

const answersInArray = (qus) => {
    if(qus == ""){ 
        arrAnswer.push ("invalid") 
    }else{arrAnswer.push (qus) 
       }
};

const printAnswer = (arr) => {
    for (let i = 0; i<arr.length; i++){
        console.log(arr[i])
    };
};

answersInArray(qusShower);
answersInArray(qusCheated);
answersInArray(qusSleep);

printAnswer(arrAnswer);

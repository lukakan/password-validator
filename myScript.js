const minEightCharacterMessage = "Min 8 znaków";
const minOneBigLetterMessage = "minimum 1 duża litera";
const minOneSmallLetterMessage = "minimum 1 mała litera";
const oneSpecialCharacter = "minimum 1 znak specjalny"
const passwordsEquality = "hasło i hasło powtórzone powinny być takie same"

function passwordValidator(){
    checkIfContainGivenRegexAndPutMessage(/^.{8}/, minEightCharacterMessage, "minEightcharacters");
    checkIfContainGivenRegexAndPutMessage("[A-Z]", minOneBigLetterMessage, "minOneBigLetter");
    checkIfContainGivenRegexAndPutMessage("[a-z]", minOneSmallLetterMessage, "minOneSmallLetter");
    checkIfContainGivenRegexAndPutMessage("[^A-Za-z0-9]", oneSpecialCharacter, "minOneSpecialCharacter");
}

function checkIfContainGivenRegexAndPutMessage(regex, message, htmlId){
    let htmlElement = document.getElementById(htmlId);
    let passedText = document.getElementById("passwordKeeper").value;
    if(!(passedText.match(regex)) && passedText.length>0){
        htmlElement.innerHTML = message;
    }else{
        htmlElement.innerHTML = "";
    }
}

function checkIfPasswordAreMatching(){
    let passedText = document.getElementById("passwordKeeper").value;
    let repeatedText = document.getElementById("repeatedPassword").value;
    let equalPasswordsWarining = document.getElementById("passwordMatching");
    if(passedText !== repeatedText){
        equalPasswordsWarining.innerHTML = passwordsEquality;
    }else{
        equalPasswordsWarining.innerHTML = "";
    }
}
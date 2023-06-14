var userInput=document.querySelector('#user-input');
var translatedOutput=document.querySelector('#output');
var translateBtn=document.querySelector("#convert-btn");


// var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
// var serverURL="https://api.funtranslations.com/translate/pirate.json";
// var serverURL="https://api.funtranslations.com/translate/yoda.json";
var serverURL="https://api.funtranslations.com/translate/minion.json";
function updateRequest(text){
    return serverURL+"?"+"text="+text;
}
function errorHandler(error){
    console.log("Error type:"+error);
    alert("Server is temporarily down. Please try after some time");
}
translateBtn.addEventListener("click",output);
function output(){
    fetch(updateRequest(userInput.value))
    .then(response=>response.json())
    .then(json=>translatedOutput.innerHTML=(json.contents.translated)).catch(errorHandler);
    
}
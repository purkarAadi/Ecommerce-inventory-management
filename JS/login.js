const loginButton=document.getElementById('login-button');
const errorMsg=document.getElementById('loginErrorMsg');
var id="";
const loginid=document.getElementById('loginIdInput');
function checkValidation(){
errorMsg.innerText="hello i m working";
setTimeout(function(){
    errorMsg.innerText="";

}, 3000);
}

function checkid(event){
    var characterinsert=event.data;
    if(characterinsert==null)return;
    var numbers=/[0-9]/;
    var found=0;
    
    if(!numbers.test(characterinsert)){
        const cleanedValue = event.target.value.replace(/[^0-9]/, '');
           
            event.target.value =cleanedValue;
            errorMsg.innerText="Invalid character: "+characterinsert+" only numbers are allowed.";
            setTimeout(function(){
                errorMsgSecond.innerText="";
            
            }, 2000);
    }
    
    
   

}

loginid.addEventListener('input', function(event){
checkid(event);
});
loginButton.addEventListener('click', checkValidation);
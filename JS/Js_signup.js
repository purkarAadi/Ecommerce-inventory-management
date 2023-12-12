const ele=document.getElementById('form-selector');
const customer=document.getElementById('form-customer');
const seller=document.getElementById('form-seller');
const inventory=document.getElementById('form-inventory-management');
const signupname=document.getElementById('signupName');
const errorMsgFirst=document.getElementById('errorMsgFirst');
const signupMob=document.getElementById('signupMobile');
const signupAccNumber=document.getElementById('signupAccountNumber');
const errorMsgSecond=document.getElementById('errorInventory');

function handleFormSelection(){
    if(ele.value=='customer'){
        customer.style.display='block';
        
        seller.style.display='none';
        inventory.style.display='none';
    }else if(ele.value=='seller'){
        seller.style.display='block';
        customer.style.display='none';
        inventory.style.display='none';
    }
    else if(ele.value=='inventory'){
        seller.style.display='none';
        customer.style.display='none';
        inventory.style.display='block';
    }
    else{
        customer.style.display='none';
        seller.style.display='none';
        inventory.style.display='none';
    }
    
}
function validateName(event){
    var characterinsert=event.data;
    if(characterinsert==null)return;
    // var numbers="abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers=/[0-9]/;
    const specialLetters=/[^a-zA-z0-9]/
    var found=0;
    
        if(characterinsert==' ')return;
        else if(characterinsert=='_'){
            const cleanedValue = event.target.value.replace('_', '');
           
            event.target.value = cleanedValue;
            errorMsgFirst.innerText="Invalid character: _ only characters are allowed.";
            setTimeout(function(){
                errorMsgFirst.innerText="";
            
            }, 2000);
        }
        else if(characterinsert=='^'){
            const cleanedValue = event.target.value.replace('^', '');
           
            event.target.value = cleanedValue;
            errorMsgFirst.innerText="Invalid character: ^ only characters are allowed.";
            setTimeout(function(){
                errorMsgFirst.innerText="";
            
            }, 2000);
        }
        else if(specialLetters.test(characterinsert)){
            const cleanedValue = event.target.value.replace(/[^a-zA-Z0-9\s\^\_]/g, '');
           
            event.target.value = cleanedValue;
            errorMsgFirst.innerText="Invalid character: "+characterinsert+" only characters are allowed.";
            setTimeout(function(){
                errorMsgFirst.innerText="";
            
            }, 2000);
        
        }else if(numbers.test(characterinsert)){

            const cleanedValue = event.target.value.replace(/[0-9\^]/g, '');
           
            event.target.value = cleanedValue;
            errorMsgFirst.innerText="Invalid character: "+characterinsert+" only characters are allowed.";
            setTimeout(function(){
                errorMsgFirst.innerText="";
            
            }, 2000);
            
        
    }
   
    
}


function validateMobile(event)
{   const insertedValue=event.data;
    const numbers=/[0-9]/;
    if(insertedValue==null)return;
    else if(!numbers.test(insertedValue)){
        const cleanedValue = event.target.value.replace(/[^0-9]/, '');
           
            event.target.value =cleanedValue;
            errorMsgFirst.innerText="Invalid character: "+insertedValue+" only numbers are allowed.";
            setTimeout(function(){
                errorMsgFirst.innerText="";
            
            }, 2000);
    }
}
function validateAccount(event)
{   const insertedValue=event.data;
    const numbers=/[0-9]/;
    if(insertedValue==null)return;
    else if(!numbers.test(insertedValue)){
        const cleanedValue = event.target.value.replace(/[^0-9]/, '');
           
            event.target.value =cleanedValue;
            errorMsgSecond.innerText="Invalid character: "+insertedValue+" only numbers are allowed.";
            setTimeout(function(){
                errorMsgSecond.innerText="";
            
            }, 2000);
    }
}

signupAccNumber.addEventListener('input',function(event){
    validateAccount(event);
})

signupMob.addEventListener('input', function(event){
    validateMobile(event);
})
signupname.addEventListener('input', function(event){
    validateName(event);
});
ele.addEventListener('change',handleFormSelection);
handleFormSelection();

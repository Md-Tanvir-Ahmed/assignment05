

function donation(id){
   
    const donatedAmount = document.getElementById(id).value;
    const donatedNumber = parseFloat(donatedAmount);

    return donatedNumber;
}
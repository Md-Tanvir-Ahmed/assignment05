

function donation(id){
   
    const donatedAmount = document.getElementById(id).value;
    const donatedNumber = parseFloat(donatedAmount);

    return donatedNumber;
}

function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');

    // show the section with the provided id as parameter;
    document.getElementById(id).classList.remove('hidden');
    
}
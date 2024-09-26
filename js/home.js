// Noakhali flood

function noakhali(){
    
    const noakhaliDonation = donation('noakhali-donation');
    if(!isNaN(noakhaliDonation)){
        const noakhaliFund = document.getElementById('noakhali-fund').innerText;
    const noakhaliFundNumber = parseFloat(noakhaliFund);

     const myMoney = document.getElementById('my-money').innerText;
     const myMoneyNumber = parseFloat(myMoney);

     if(myMoneyNumber >= noakhaliDonation){
        
    const totalFund = noakhaliDonation + noakhaliFundNumber;
    const newBalance = myMoneyNumber - noakhaliDonation;

    document.getElementById('noakhali-fund').innerText = totalFund;
    document.getElementById('my-money').innerText = newBalance;
    alert('You successfully donated '+ noakhaliDonation + " BDT.");

     }else{
        alert("You don't have enough money.")
        
     }


    }else{
        alert('Please input number')
    }
    
    

}
function feni(){
    
    const feniDonation = donation('feni-donation');
    if(!isNaN(feniDonation)){
        const feniFund = document.getElementById('feni-fund').innerText;
    const feniFundNumber = parseFloat(feniFund);

     const myMoney = document.getElementById('my-money').innerText;
     const myMoneyNumber = parseFloat(myMoney);

     if(myMoneyNumber >= feniDonation){
        
    const totalFund = feniDonation + feniFundNumber;
    const newBalance = myMoneyNumber - feniDonation;

    document.getElementById('feni-fund').innerText = totalFund;
    document.getElementById('my-money').innerText = newBalance;
    alert('You successfully donated '+ feniDonation + " BDT.");

     }else{
        alert("You don't have enough money.")
        
     }


    }else{
        alert('Please input number')
    }
    
    

}
function quota(){
    
    const quotaDonation = donation('quota-donation');
    if(!isNaN(quotaDonation)){
        const quotaFund = document.getElementById('quota-fund').innerText;
    const quotaFundNumber = parseFloat(quotaFund);

     const myMoney = document.getElementById('my-money').innerText;
     const myMoneyNumber = parseFloat(myMoney);

     if(myMoneyNumber >= quotaDonation){
        
    const totalFund = quotaDonation + quotaFundNumber;
    const newBalance = myMoneyNumber - quotaDonation;

    document.getElementById('quota-fund').innerText = totalFund;
    document.getElementById('my-money').innerText = newBalance;
    alert('You successfully donated '+ quotaDonation + " BDT.");

     }else{
        alert("You don't have enough money.")
        
     }


    }else{
        alert('Please input number')
    }
    
    

}
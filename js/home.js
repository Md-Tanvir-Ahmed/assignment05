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

     // add to history section
     const p = document.createElement('p');
     
     p.innerText = `${noakhaliDonation} Taka is Donated for famine-2024 at Feni, Bangladesh`;
     
 
     document.getElementById('history-container').appendChild(p);

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

    // add to history section
    const p = document.createElement('p');
    
    p.innerText = `${feniDonation} Taka is Donated for Flood Relief in Feni,Bangladesh`;
    

    document.getElementById('history-container').appendChild(p);

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
     // add to history section
     const p = document.createElement('p');
    
     p.innerText = `${quotaDonation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
     
 
     document.getElementById('history-container').appendChild(p);

     }else{
        alert("You don't have enough money.")
        
     }


    }else{
        alert('Please input number')
    }
    
    

}
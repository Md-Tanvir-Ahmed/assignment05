document.getElementById('show-donation-section').addEventListener('click',function(){
    showSectionById('donation-section');
    document.getElementById('show-donation-section').classList.add('bg-[#B4F461]');
    document.getElementById('show-history-section').classList.remove('bg-[#B4F461]');
});



document.getElementById('show-history-section').addEventListener('click',function(){
    showSectionById('history-container');
    document.getElementById('show-donation-section').classList.remove('bg-[#B4F461]');
    document.getElementById('show-history-section').classList.add('bg-[#B4F461]');
})
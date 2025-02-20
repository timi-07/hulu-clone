const showButton = document.querySelectorAll('.open-modal');
const closeButton = document.querySelectorAll('.close')
showButton.forEach(function(i){
    i.addEventListener('click',()=>{
        let prefix=i.closest('div').className;
        mName = prefix+'-modal';
        let modal = document.getElementById(mName);
        modal.showModal()
    })
})

closeButton.forEach(function(i){
    i.addEventListener('click',()=>{
        let modal=i.closest('dialog');
        modal.close()
    })
})
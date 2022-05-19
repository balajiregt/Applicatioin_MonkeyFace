const closedeyes=document.querySelector('.see-no')
const closedear=document.querySelector('.hear-no')
const closedmouth=document.querySelector('.speak-no')
let header = document.querySelector("h5");
header.innerText = "Click the 'see-no' monkey face";
//add event listener
//by default monkey- "closes eyes"- when clicked monkey "closes ears"

closedeyes.addEventListener('click', ()=>{
    if(closedeyes.classList.contains('see-no')){
        closedear.classList.add('active')
        closedeyes.classList.remove('active')
    }
    header.innerText = "Click the 'hear-no' monkey face";
})

//When monkey "closes ears"- and user clicks monkey "closes mouth"
closedear.addEventListener('click',()=>{
    if(closedear.classList.contains('hear-no')){
        closedmouth.classList.add('active')
        closedear.classList.remove('active')
    }
    header.innerText = "Click the 'speak-no' monkey face";
})

//When monkey "closes mouth"- and user clicks monkey again "closes the eyes [Goes to default state]"
closedmouth.addEventListener('click',()=>{
if(closedmouth.classList.contains('speak-no')){
    closedeyes.classList.add('active')
    closedmouth.classList.remove('active')
}
header.innerText = "Click the 'see-no' monkey face";
})


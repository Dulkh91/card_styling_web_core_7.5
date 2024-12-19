let btnTongles = false;
let btn = document.getElementById("tongleBtn")
let txtValue = document.getElementById("btnTxt")
let cards = document.querySelector(".cards")

const newCard = `
        <!-- card 1 -->
            <div class="card addCard">
                <img src="./images/lenovo.png" alt="">
                <div class="card__circle">
                    <span>&#8250;</span>
                </div>
            </div>
            <!-- card 2 -->
            <div class="card addCard">
                <img src="./images/samsung.png" alt="">
                <div class="card__circle">
                    <span>&#8250;</span>
                </div>
            </div>
            <!-- card 5 -->
            <div class="card addCard">
                <img src="./images/bosch.png" alt="">
                <div class="card__circle">
                    <span>&#8250;</span>
                </div>
            </div>`

btn.addEventListener("click", ()=>{
    if(!btnTongles){
        btnTongles = true
        txtValue.innerHTML = "Hide"
        document.getElementById("btnRow").style.transform = "rotate(-90deg)";
        
        cards.insertAdjacentHTML("beforeend",newCard)
        
    }else{
        btnTongles = false
        txtValue.innerHTML = "Show All"
        document.getElementById("btnRow").style.transform = "rotate(90deg)";
        const toggleCard = cards.querySelectorAll(".addCard")
        if(toggleCard){
            cards.removeChild(toggleCard[0])
            cards.removeChild(toggleCard[1])
            cards.removeChild(toggleCard[2])
        }
    } 
   
})
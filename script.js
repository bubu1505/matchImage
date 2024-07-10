let cardarry=[
    {
       'name':'css',
       'img':'https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png'
    },
    {
        'name':'HTML',
        'img':'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png'
    },
    {
        'name':'jQuery',
        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmLME0hpAJOqBGhaVjcgkk8hIKS3S4GAqrLg&s'
    },
    {
        'name':'JS',
        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStPTWiNvI5ztpAqoyQ78Cioqupz_vuPWmsAg&s'
    },
    {
        'name':'Node',
        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZwuIMekZ9OeeXJZj6LPK3A0KFOSjMIyL2yQ&s'
    },
    {
        'name':'React',
        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8BG6UD3b_Fowh4gtwIjw2GPTWQQ30uBy-w&s'
    
    }
]
const parentDiv=document.querySelector("#card-sec")
//it is  use to duplicate the 6 cards
const gameCard=cardarry.concat(cardarry)
// it is use to change card dinamicaly
const changCard=(arr)=>{
    for (let i = arr.length-1; i>0; i--) {
        let j=Math.floor(Math.random()*(i+1))
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
    }
    return arr
}
const shuffledChild=changCard(gameCard)
//this step is use to match two card
const matchcad=()=>{
    let selectedCard=document.querySelectorAll(".card-select")
    selectedCard.forEach((ele)=>{
        ele.classList.add('card-match')
    
    })
}

//this step is use to select card
let fir=""
let sec=""
let count=0
//it is use to select repetivily
const reset=()=>{
     fir=""
     sec=""
     count=0
    let repitedSelect=document.querySelectorAll(".card-select")
    repitedSelect.forEach((ele)=>{
        ele.classList.remove('card-select')
    })
}

parentDiv.addEventListener('click',(eve)=>{
    count++
    let curcard=eve.target
    if(curcard.id==="card-sec"){
        return false //it is use to not select the parent section
    }  
    if (count<3) {
        if(count===1){
            fir=curcard.parentNode.dataset.name
            curcard.parentNode.classList.add('card-select')
        }
        else{
            sec=curcard.parentNode.dataset.name
            curcard.parentNode.classList.add('card-select')
        }
        if(fir!==""&& sec!==""){
            if(fir===sec){ 
                setTimeout(()=>{
                    matchcad()
                    reset()
                },1000)
                
            }
            else{
                setTimeout(()=>{
                    reset()
                },1000)
            }
        }
         
    }

})

for (let i = 0; i < gameCard.length; i++) {
    const childDiv=document.createElement('div')
    childDiv.className="card"
    childDiv.dataset.name=gameCard[i].name
    //childDiv.style.backgroundImage=`url(${gameCard[i].img})`
    parentDiv.appendChild(childDiv)
    // it is use to add flip effect in it 
    const front_div=document.createElement('div')
     front_div.classList.add('front')
     childDiv.appendChild(front_div)
    const back_div=document.createElement('div')
    back_div.classList.add('back')
    childDiv.appendChild(back_div)

    back_div.style.backgroundImage=`url(${gameCard[i].img})`
}

let homeScoresEl = document.getElementById("home-team-el")
let awayScoresEl = document.getElementById("away-team-el")
const newGame = document.getElementById("new-game")
const addPeriod = document.getElementById("add-period")

let homeScore = 0
let awayScore = 0


// FOR HOME TEAM
function addHomeScore(points){
    homeScore += points
    homeScoresEl.textContent = homeScore   
    winnerHighlight()
}

// FOR AWAY TEAM
function addAwayScore(points){
    awayScore += points
    awayScoresEl.textContent = awayScore    
    winnerHighlight()
}


// TO HIGHLIGHT THE WINNER
function winnerHighlight(){
    if (homeScore > awayScore){
        homeScoresEl.style.color = "#3dff33"
        awayScoresEl.style.color = "#ff3c5d"

    } else if (homeScore < awayScore){
        awayScoresEl.style.color = "#3dff33"
        homeScoresEl.style.color = "#ff3c5d"
        
    } else{
        awayScoresEl.style.color = "#ff3c5d"
        homeScoresEl.style.color = "#ff3c5d"
    }   
}

// FOR PERIOD
let periodCount = 0
let periodEl = document.getElementById("period-el")

addPeriod.addEventListener("click", function(){
    periodCount += 1
    periodEl.textContent = periodCount

    if(periodCount >= 4){
        periodCount = 0
    }else{
        periodCount = periodCount
    }
})

// TO START NEW GAME
newGame.addEventListener("click", function(){
    awayScore = awayScore - awayScore
    awayScoresEl.textContent = awayScore
    awayScoresEl.style.color = "#ff3c5d"
    
    homeScore = homeScore - homeScore
    homeScoresEl.textContent = homeScore   
    homeScoresEl.style.color = "#ff3c5d" 
    
    periodCount = 0
    periodEl.textContent = periodCount
})
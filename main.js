document.addEventListener("DOMContentLoaded", function (event) {
    
    playerArray = [];
    computerArray = [];
    playerWinCount = 0;
    computerWinCount = 0;
    counter = 0;
 
    document.getElementById("deal").addEventListener("click", function () {
        deck.load();
        
        deck.shuffle();
        for(let i = 0; i < 26; i ++)
        {
            playerArray[i] = deck.myCardArray[i];
        }
        for(let i = 26; i < 52; i ++)
        {
            computerArray[i-26] = deck.myCardArray[i];        
        }
        console.log('playerone: ' + playerArray);
        console.log(computerArray);

    
        document.getElementById("deal").style.visibility = "hidden";
        document.getElementById("next").style.visibility = "visible";
    });
  

        document.getElementById("next").addEventListener("click", function(){

            document.getElementById("deal").style.visibility = "hidden";
            document.getElementById("next").style.visibility = "visible";
    
            document.getElementById("turnCount").innerText = counter;
            document.getElementById("playerScore").innerText = playerWinCount;
            document.getElementById("computerScore").innerText = computerWinCount;
            document.getElementById("playerCard").innerText = "S:" + playerArray[counter].suit + " R: " + playerArray[counter].rank;
            document.getElementById("computerCard").innerText = "S:" + computerArray[counter].suit + " R: " + computerArray[counter].rank
            
            if(playerArray[counter].rank > computerArray[counter].rank){
                playerWinCount++;
            } 
            else if(playerArray[counter].rank < computerArray[counter].rank)
            {
                computerWinCount++;
            } else //tie
            {
    
            }
            counter++;
            if(counter >= 26)
            {
                if(playerWinCount > computerWinCount)
                {
                    document.getElementById("winnerLoser").innerText = "You have won the game!!!"
                } else if(playerWinCount == computerWinCount)
                {
                    document.getElementById("winnerLoser").innerText = "Tie!!!"
                } else
                {
                    document.getElementById("winnerLoser").innerText = "You have lost the Game"
                }
                playerArray = [];
                computerArray = [];
                playerWinCount = 0;
                computerWinCount = 0;
                counter = 0;
                document.getElementById("deal").style.visibility = "hidden";
                document.getElementById("next").style.visibility = "hidden";
    
            }
            
        });

});

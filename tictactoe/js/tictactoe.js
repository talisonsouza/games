var tictactoe = {

    frames:['','','','','','','','',''],
    gameChacacter:['X','O'],
    gameElementContainer:null,
    currentPlayer: 0,
    gameOver:false,

    senquencesCheckWinner:
    [
        [0,1,2],
        [0,4,8],
        [0,3,6],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
    ],

    init: (elementId) =>
    {
        tictactoe.gameElementContainer = document.getElementById(elementId);    
        tictactoe.setIdElements();       
        tictactoe.setEventsClickFrames();   
   
    },

    setIdElements: () =>
    {
        Array.prototype.forEach.call(tictactoe.gameElementContainer.children, (el,index) => {   
            el.setAttribute("id", index) 
        });     
    },
    
    checkWinner: () =>
    {
        for (let index = 0; index < tictactoe.senquencesCheckWinner.length; index++) 
        {
            if(tictactoe.gameOver) break;
            tictactoe.verifyGameOver(tictactoe.senquencesCheckWinner[index][0],tictactoe.senquencesCheckWinner[index][1],tictactoe.senquencesCheckWinner[index][2]);             
        }
    },

    verifyGameOver: (a,b,c) =>
    {
        if(tictactoe.frames[a] == tictactoe.gameChacacter[tictactoe.currentPlayer]  &&
            tictactoe.frames[b] == tictactoe.gameChacacter[tictactoe.currentPlayer]  && 
            tictactoe.frames[c] == tictactoe.gameChacacter[tictactoe.currentPlayer] 
         ){
             tictactoe.gameOver = true;
             var info = document.getElementById('info')
             info.innerHTML = `Player ${tictactoe.currentPlayer} ganhou!`                          
         }
    },

    setEventsClickFrames: () =>
    {        
        Array.prototype.forEach.call(tictactoe.gameElementContainer.children, 
        (el,index) => {   

            el.addEventListener("click", function(){
                if(!tictactoe.gameOver)  
                {                    
                    tictactoe.tictactoePlay(index)   
                    tictactoe.checkWinner();                                    
                    tictactoe.changeCurrentPlayer();
                } 
            }, false);            
        });  
    },

    tictactoePlay: (index) =>
    {   

        var element = document.getElementById(index);
        var gameLetter = tictactoe.gameChacacter[tictactoe.currentPlayer]; 
     
        element.innerHTML = gameLetter;
        tictactoe.frames[index] = gameLetter;
    },

    changeCurrentPlayer: () => tictactoe.currentPlayer === 0 ? tictactoe.currentPlayer = 1 : tictactoe.currentPlayer = 0
    

};
var tictactoe = {

    frames:['','','','','','','','',''],
    gameChacacter:['X','O'],
    gameElementContainer:null,
    currentPlayer: 0,

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
        //0 ,1 , 2
        //0,4,8
        //0,3,6
        //3,4,5
        //6,7,8
        //1,4,7
        //2,5,8
        //2,4,6


    },

    setEventsClickFrames: () =>
    {
        Array.prototype.forEach.call(tictactoe.gameElementContainer.children, 
        (el,index) => {   

            //el.innerHTML = index;

            el.addEventListener("click", function(){
                tictactoe.tictactoePlay(index)
            }, false);            
        });  
    },

    tictactoePlay: (index) =>
    {   

        var element = document.getElementById(index)        
        element.innerHTML = tictactoe.gameChacacter[tictactoe.currentPlayer];

        tictactoe.currentPlayer === 0 ? tictactoe.currentPlayer = 1 : tictactoe.currentPlayer = 0;
    }

};
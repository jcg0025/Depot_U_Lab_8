document.addEventListener('DOMContentLoaded', function(){
    var addButton = document.createElement('button');
        addButton.innerText = 'Add Dice';
        addButton.className = 'addButton';
    document.body.appendChild(addButton)
    var rollButton = document.createElement('button');
        rollButton.innerText = 'Roll Dice/Die';
        rollButton.className = 'rollButton';
    document.body.appendChild(rollButton);
    
    var Die = function() {    
       this.roll = function() {
           var result = Math.floor(Math.random()*6+1);
           this.value = result;
       }     
    }
     
    var dieArray = [];
    
    
    addButton.addEventListener('click', function(){
       var diceHolder = document.createElement('div');
            diceHolder.className = 'diceHolder';
       document.body.appendChild(diceHolder);
       var newDice = new Die()
       newDice.roll()
       diceHolder.innerText = newDice.value;
       dieArray.push(newDice);
       console.log(dieArray.value);
    });
    
    rollButton.addEventListener('click', function () {
       dieArray.forEach(function(element) {
           element.roll()
           console.log(element.value);
       }, this);
    });
    

    
    
    
    
    
    
});


    
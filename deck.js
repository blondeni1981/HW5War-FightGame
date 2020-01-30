

let deck = {
    myCardArray: [],
    load: function (){
        //call cards 52
        //Let i represent suit
        for( let i = 1; i <= 4; i++){
            //Let j represent rank
                for( j = 2; j <= 14; j++){
                    this.myCardArray.push(new card(i,j)); //push card objects into myCardArray
            }
        }
    },
    shuffle: function(){
        let randomIndex, currentIndexValue;
        for(let i = 0; i < this.myCardArray.length; i ++)
        {
            randomIndex=Math.floor(Math.random() * (52));
            currentIndexValue = this.myCardArray[i];
            this.myCardArray[i] = this.myCardArray[randomIndex];
            this.myCardArray[randomIndex] = currentIndexValue;
        }
    }
   
        
    

};
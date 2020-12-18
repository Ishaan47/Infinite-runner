class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("CAR RACING GAME");
      title.position(width/2-70, 0);
  
      this.input.position(width/2-70, height/2 -20);
      this.button.position(width/2-70, height/2 +30);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("WELCOME,  " +player.name+ "  [BE READY!!] "); 
        this.greeting.position(width/2-70, height/2 -20);
      });
  
    }
  }





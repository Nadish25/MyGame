class Form {
    constructor(){
        this.input=createInput("UserName");
        this.button1=createButton("Play");
        this.button1.style('background', 'green');
        this.wait=createElement("h2");
        this.title=createElement("h1");
        this.reset=createButton("Reset")
        this.reset.style('background', 'red')

    }

    hide(){
        this.button1.hide();
        this.wait.hide();
        this.input.hide();
    }

    display(){
        this.title.html("Racing game");
        this.title.position(500,10)

        this.input.position(500,300)
        this.button1.position(500,320)
        this.reset.position(960,20)

        this.button1.mousePressed(()=>{
            this.input.hide();
            this.button1.hide();
            this.wait.html("Hello 'player'")
            this.wait.position(displayWidth/2 - 70, displayHeight/4);
            
          });


    }
};
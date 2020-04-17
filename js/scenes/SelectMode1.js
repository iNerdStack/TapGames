
class SelectMode1 extends Phaser.Scene {
    constructor() {
        super('SelectMode1');
    }
    
   
    preload()
    {
        this.load.image("background2","assets/images/background2.png");
        this.load.image("selectmode1","assets/images/menu/selectmode1.png");
        this.load.image("backbtn","assets/images/menu/backbtn.png");
        this.load.image("easy","assets/images/menu/easy.png");
        this.load.image("hard","assets/images/menu/hard.png");


        //Load Audio
        this.load.audio('click', ['assets/sounds/click.ogg'])

    }
    create()
    {

             //Audio
             this.click = this.sound.add('click');


        this.sm1background =  this.add.image(240,320, "background2");
        this.sm1background.scaleY = 1.3;
        this.selectmodemenu =  this.add.image(240,320, "selectmode1");
        this.selectmodemenu.scaleX = 0.61;
        this.selectmodemenu.scaleY = 0.61;
   
        this.backbtn =  this.add.image(245,559, "backbtn");
        this.backbtn.scaleX = 0.8;
        this.backbtn.scaleY = 0.8;
        this.backbtn.setInteractive();

        this.backbtn.on('pointerdown', function()
        {
           
        this.click.play()

        this.tweens.add({
                targets: this.backbtn,
                scaleX: { from: 0.7, to: 0.8 },
                scaleY: { from: 0.7, to: 0.8 },
                ease: 'Bounce',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 400,
                repeat: 0,            // -1: infinity
                yoyo: false,
                onComplete: function(){

                    this.scene.transition({
                        target: 'SelectGameScene',
                        duration: 500,
                        moveBelow: true,
                    });
            
                }.bind(this)
               
            });      
        }, this);
        

        this.easy1 = this.add.sprite(350,165, "easy");
        this.easy1.scaleY = 0.65;
        this.easy1.scaleX = 0.65;
        this.easy1.setInteractive();
        
        this.easy1.on('pointerdown', function()
        {
            SceneModeInfo = "Easy1";
            difficulty = "0";
            this.NextScene()

        }, this);

        this.hard1 = this.add.sprite(350,202, "hard");
        this.hard1.scaleY = 0.65;
        this.hard1.scaleX = 0.65;
        this.hard1.setInteractive();
        this.hard1.on('pointerdown', function()
        {
            SceneModeInfo = "Hard1";
            difficulty = "1";
            this.NextScene()

        }, this);
       

        this.easy2 = this.add.sprite(350,273, "easy");
        this.easy2.scaleY = 0.65;
        this.easy2.scaleX = 0.65;
        this.hard2 = this.add.sprite(350,310, "hard");
        this.hard2.scaleY = 0.65;
        this.hard2.scaleX = 0.65;
        this.easy3 = this.add.sprite(350,371, "easy");
        this.easy3.scaleY = 0.65;
        this.easy3.scaleX = 0.65;
        this.hard3 = this.add.sprite(350,408, "hard");
        this.hard3.scaleY = 0.65;
        this.hard3.scaleX = 0.65;
        this.easy4 = this.add.sprite(350,470, "easy");
        this.easy4.scaleY = 0.65;
        this.easy4.scaleX = 0.65;
        this.hard4 = this.add.sprite(350,507, "hard");
        this.hard4.scaleY = 0.65;
        this.hard4.scaleX = 0.65;
 

       
        
      
       


    }
    update()
    {

    }

    NextScene()
    {
      

        this.Mode;
        

        if(SceneModeInfo == "Easy1")
        {
           
        this.Mode = this.easy1;
    
        }
        else if(SceneModeInfo == "Hard1")
        {
           
            this.Mode = this.hard1;

        } 


        this.click.play()

        var tween =  this.tweens.add({
            targets: this.Mode,
            scaleX: { from: 0.57, to: 0.6 },
            scaleY: { from: 0.584, to: 0.6 },
            ease: 'Bounce',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 400,
            repeat: 0,            // -1: infinity
            yoyo: false,
            onComplete: this.GameMode.bind(this)
        });      

    }


    GameMode()
    {

        this.scenename;

     if(SceneModeInfo == "Easy1" | SceneModeInfo == "Hard1")
     {

        this.scenename = 'GameMode11'

     }

        this.scene.transition({
            target: this.scenename,
            duration: 700,
            moveBelow: true,
        });


    }
}
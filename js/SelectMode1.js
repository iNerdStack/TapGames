
class SelectMode1 extends Phaser.Scene {
    constructor() {
        super('SelectMode1');
    }
    
   
    preload()
    {
        this.load.image("sm1background","assets/images/menu/back1.png");
        this.load.image("selectmodemenu","assets/images/menu/selectmode1.png");
        this.load.image("easy1","assets/images/menu/easy.png");
        this.load.image("hard1","assets/images/menu/hard.png");
        this.load.image("easy2","assets/images/menu/easy.png");
        this.load.image("hard2","assets/images/menu/hard.png");
        this.load.image("easy3","assets/images/menu/easy.png");
        this.load.image("hard3","assets/images/menu/hard.png");
        this.load.image("easy4","assets/images/menu/easy.png");
        this.load.image("hard4","assets/images/menu/hard.png");


        //Load Audio
        this.load.audio('click', ['assets/sounds/click.ogg'])

    }
    create()
    {
        this.sm1background =  this.add.image(240,320, "sm1background");
        this.sm1background.scaleY = 1.3;
        this.selectmodemenu =  this.add.image(240,320, "selectmodemenu");
        this.selectmodemenu.scaleX = 0.61;
        this.selectmodemenu.scaleY = 0.61;
        //Audio
        this.click = this.sound.add('click');
        
        this.easy1 = this.add.sprite(350,165, "easy1");
        this.easy1.scaleY = 0.65;
        this.easy1.scaleX = 0.65;
        this.easy1.setInteractive();
        
        this.easy1.on('pointerdown', function()
        {
            SceneModeInfo = "Easy1";
            this.difficulty = "0";
            this.NextScene()

        }, this);

        this.hard1 = this.add.sprite(350,202, "hard1");
        this.hard1.scaleY = 0.65;
        this.hard1.scaleX = 0.65;
        this.hard1.setInteractive();
        this.hard1.on('pointerdown', function()
        {
            SceneModeInfo = "Hard1";
            this.difficulty = "1";
            this.NextScene()

        }, this);
       

        this.easy2 = this.add.sprite(350,273, "easy2");
        this.easy2.scaleY = 0.65;
        this.easy2.scaleX = 0.65;
        this.hard2 = this.add.sprite(350,310, "hard2");
        this.hard2.scaleY = 0.65;
        this.hard2.scaleX = 0.65;
        this.easy3 = this.add.sprite(350,371, "easy3");
        this.easy3.scaleY = 0.65;
        this.easy3.scaleX = 0.65;
        this.hard3 = this.add.sprite(350,408, "hard3");
        this.hard3.scaleY = 0.65;
        this.hard3.scaleX = 0.65;
        this.easy4 = this.add.sprite(350,470, "easy4");
        this.easy4.scaleY = 0.65;
        this.easy4.scaleX = 0.65;
        this.hard4 = this.add.sprite(350,507, "hard4");
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
            duration: 500,
            moveBelow: true,
        });


    }
}
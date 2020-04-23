class GameOver extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }
    
   
    preload()
    {
        

        this.load.image("background2","assets/images/background2.png");
        this.load.image("gameovermenu","assets/images/menu/gameover.png");
        this.load.image("nostar-rating","assets/images/menu/nostar-rating.png");
        this.load.image("onestar-rating","assets/images/menu/onestar-rating.png");
        this.load.image("twostar-rating","assets/images/menu/twostar-rating.png");
        this.load.image("threestar-rating","assets/images/menu/threestar-rating.png");
        this.load.image("easybtn","assets/images/menu/easy.png");
        this.load.image("hardbtn","assets/images/menu/hard.png");
        this.load.image("countdownmode","assets/images/menu/countdownmode.png");
        this.load.image("classicmode","assets/images/menu/classicmode.png");
        this.load.image("menubtn","assets/images/menu/menubtn.png");
        this.load.image("reloadbtn","assets/images/menu/reloadbtn.png");

        //Load Audio
        this.load.audio('click', ['assets/sounds/click.ogg']);
         

    }

    create()
    {


        this.click = this.sound.add('click');

        this.gobackground =  this.add.image(240,320, "background2");
        this.gameovermenu =  this.add.image(240,320, "gameovermenu");
        this.gameovermenu.scaleX = 0.85
        this.gameovermenu.scaleY=  0.85
        this.menubtn = this.add.sprite(160,522, "menubtn");
        this.menubtn.scaleX = 0.85
        this.menubtn.scaleY=  0.85
        this.menubtn.setInteractive();

        this.menubtn.on('pointerdown', function()
        {

            this.click.play()

        var tween =  this.tweens.add({
            targets: this.menubtn,
            scaleX: { from: 0.85, to: 0.9 },
            scaleY: { from: 0.85, to: 0.9 },
            ease: 'Bounce',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 400,
            repeat: 0,            // -1: infinity
            yoyo: false,
            onComplete: function() {
                
                this.scene.transition({
                    target: 'SelectGameScene',
                    duration: 500,
                    moveBelow: true,
                });
        

            }.bind(this)
        });      

        }, this);


        this.reloadbtn = this.add.sprite(320,522, "reloadbtn");
        this.reloadbtn.scaleX = 0.85
        this.reloadbtn.scaleY=  0.85
        this.reloadbtn.setInteractive();


        this.reloadbtn.on('pointerdown', function()
        {

            this.click.play();

        var tween =  this.tweens.add({
            targets: this.reloadbtn,
            scaleX: { from: 0.85, to: 0.9 },
            scaleY: { from: 0.85, to: 0.9 },
            ease: 'Bounce',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 400,
            repeat: 0,            // -1: infinity
            yoyo: false,
            onComplete: function() {
                this.scene.transition({
                    target: GameMode,
                    duration: 500,
                    moveBelow: true,
                });
        

            }.bind(this)
        });      

        }, this);


        if(Number.isNaN(accuracy))
        {
            accuracy = 0;
        }

        //Sort Rating

        if(accuracy <= 0)
        {

            this.rating =  this.add.image(240,220, "nostar-rating");
            this.rating.scaleX = 0.85
            this.rating.scaleY=  0.85

        }
        else if(accuracy > 0 && accuracy <= 50)
        {

            this.rating =  this.add.image(240,220, "onestar-rating");
            this.rating.scaleX = 0.85
            this.rating.scaleY=  0.85

        }
        else if(accuracy > 50 && accuracy < 80)
        {
            this.rating =  this.add.image(240,220, "twostar-rating");
            this.rating.scaleX = 0.85
            this.rating.scaleY=  0.85

        }
        else if(accuracy >= 80)
        {
            this.rating =  this.add.image(240,220, "threestar-rating");
            this.rating.scaleX = 0.85
            this.rating.scaleY=  0.85
        }

       

        this.scoreText = this.add.text(70,282, 'Score: ' + score, { fontSize: '21px', fill: '#fff',fontFamily: 'GameFont' });
        this.scoreText.setStroke('#3a230a',3);

        this.accuracyText = this.add.text(70,320, 'Accuracy: ' + accuracy + '% ( ' + accuratetaps + ' of ' + NumberOfTrials + ' )', { fontSize: '21px', fill: '#fff',fontFamily: 'GameFont' });
        this.accuracyText.setStroke('#3a230a',3);
       
        if(GameMode == "GameMode11")
        {
            

            this.highestComboText = this.add.text(70,358, 'Longest  Combo: ' + highestCombo + 'x', { fontSize: '21px', fill: '#fff',fontFamily: 'GameFont' });
            this.highestComboText.setStroke('#3a230a',3);

            if(SceneModeInfo == "Easy4" | SceneModeInfo == "Hard4")
            {

            }

            if (SceneModeInfo == "Easy4" | SceneModeInfo ==  "Hard4")
            {

              this.countdownmode =  this.add.image(330,410, "countdownmode");
              this.countdownmode.scaleX = 0.45
              this.countdownmode.scaleY=  0.45
  
            }
    
        }
        else if(GameMode == "GameMode21")
        {

            this.LevelText = this.add.text(70,358, 'Level: ' + Level, { fontSize: '21px', fill: '#fff',fontFamily: 'GameFont' });
            this.LevelText.setStroke('#3a230a',3);
            
            this.classicmode =  this.add.image(215,412, "classicmode");
            this.classicmode.scaleX = 0.6
            this.classicmode.scaleY=  0.6


        }
        
        this.modeText = this.add.text(70,400, 'Mode:', { fontSize: '21px', fill: '#fff',fontFamily: 'GameFont' });
        this.modeText.setStroke('#3a230a',3);


          if(SceneModeInfo ==  "Easy1" | SceneModeInfo ==  "Easy2"| SceneModeInfo ==  "Easy3" | SceneModeInfo ==  "Easy4")
          {

            this.easybtn =  this.add.image(200,410, "easybtn");
            this.easybtn.scaleX = 0.65
            this.easybtn.scaleY=  0.65

          }

          else if(SceneModeInfo ==  "Hard1" | SceneModeInfo ==  "Hard2" | SceneModeInfo ==  "Hard3" | SceneModeInfo ==  "Hard4" )
          {

            this.hardbtn =  this.add.image(200,410, "hardbtn");
            this.hardbtn.scaleX = 0.65
            this.hardbtn.scaleY=  0.65


          }
        


        



    }
    update()
    {

    }

}   
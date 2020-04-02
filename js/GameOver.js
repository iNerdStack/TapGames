class GameOver extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }
    
   
    preload()
    {
        this.load.image("gobackground","assets/images/menu/back1.png");
        this.load.image("gameovermenu","assets/images/menu/gameover.png");
        this.load.image("nostar-rating","assets/images/menu/nostar-rating.png");
        this.load.image("onestar-rating","assets/images/menu/onestar-rating.png");
        this.load.image("twostar-rating","assets/images/menu/twostar-rating.png");
        this.load.image("threestar-rating","assets/images/menu/threestar-rating.png");
        this.load.image("easybtn","assets/images/menu/easy.png");
        this.load.image("hardbtn","assets/images/menu/hard.png");
        this.load.image("menubtn","assets/images/menu/menubtn.png");
        this.load.image("reloadbtn","assets/images/menu/reloadbtn.png");

        //Load Audio
        this.load.audio('click', ['assets/sounds/click.ogg'])
         

    }

    create()
    {


        this.click = this.sound.add('click');

        this.gobackground =  this.add.image(240,320, "gobackground");
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

            this.click.play()

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

       

        this.scoreText = this.add.text(100,282, 'Score: ' + score, { fontSize: '21px', fill: '#fff',fontFamily: 'GameFont' });
        this.scoreText.setStroke('#3a230a',3);

        this.accuracyText = this.add.text(100,320, 'Accuracy: ' + accuracy + '% ( ' + accuratetaps + ' of ' + initialNumberOfTrials + ' )', { fontSize: '21px', fill: '#fff',fontFamily: 'GameFont' });
        this.accuracyText.setStroke('#3a230a',3);

        this.highestComboText = this.add.text(100,358, 'Highest  Combo: ' + highestCombo + 'x', { fontSize: '21px', fill: '#fff',fontFamily: 'GameFont' });
        this.highestComboText.setStroke('#3a230a',3);

        
        this.modeText = this.add.text(100,400, 'Mode:', { fontSize: '21px', fill: '#fff',fontFamily: 'GameFont' });
        this.modeText.setStroke('#3a230a',3);


          if(SceneModeInfo ==  "Easy1")
          {

            this.easybtn =  this.add.image(230,410, "easybtn");
            this.easybtn.scaleX = 0.65
            this.easybtn.scaleY=  0.65

          }

          else if(SceneModeInfo == "Hard1")
          {


            this.hardbtn =  this.add.image(230,410, "hardbtn");
            this.hardbtn.scaleX = 0.65
            this.hardbtn.scaleY=  0.65


          }


        



    }
    update()
    {

    }

}   
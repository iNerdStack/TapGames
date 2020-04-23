class SelectGameScene extends Phaser.Scene {
    constructor() {
        super('SelectGameScene');
    }
    

    preload()
    {
        this.load.image("background2","assets/images/background2.png");
        this.load.image("selectgame","assets/images/menu/selectgame.png");
        this.load.image("gameone","assets/images/menu/gameone.png");
        this.load.image("gametwo","assets/images/menu/gametwo.png");
        this.load.image("gamethree","assets/images/menu/gamethree.png");
        this.load.image("infobtn","assets/images/menu/infobtn.png");
        
        this.load.audio('click', ['assets/sounds/click.ogg'])

    }
    create()
    {
        this.click = this.sound.add('click');

        this.backgrounds =  this.add.image(240,320, "background2");
        this.backgrounds.scaleY = 1.3;
        this.selectgame =  this.add.image(240,320, "selectgame");
        this.selectgame.scaleX = 0.7;
        this.selectgame.scaleY = 0.7;

        this.gameone =  this.add.sprite(242,195, "gameone");
        this.gameone.scaleX = 0.70;
        this.gameone.scaleY = 0.70;
        this.gameone.setInteractive();
       
        this.gametwo = this.add.sprite(242,280, "gametwo");
        this.gametwo.scaleX = 0.70;
        this.gametwo.scaleY = 0.70;
        this.gametwo.setInteractive();

        this.gamethree = this.add.sprite(242,365, "gamethree");
        this.gamethree.scaleX = 0.70;
        this.gamethree.scaleY = 0.70;
        this.gamethree.setInteractive();



        this.gameone.on('pointerdown', this.btnOneTouch, this);
        this.gametwo.on('pointerdown', this.btnTwoTouch, this);
        this.gamethree.on('pointerdown', this.btnThreeTouch, this);


        this.infobtn = this.add.sprite(250,575, "infobtn");
        this.infobtn.scaleX = 0.85;
        this.infobtn.scaleY = 0.85;
        this.infobtn.setInteractive();
        this.infobtn.on('pointerdown', this.openExternalLink, this);
         

    }
    update()
    {
          

    }


    btnOneTouch() {
        

        
        this.click.play();


     this.tweens.add({
            targets: this.gameone,
            scaleX: { from: 0.65, to: 0.7 },
            scaleY: { from: 0.65, to: 0.7 },
            ease: 'Bounce',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 400,
            repeat: 0,            // -1: infinity
            yoyo: false,
            onComplete: function(){

                this.scene.transition({
                    target: 'SelectMode1',
                    duration: 500,
                    moveAbove: true,
                  
                });

            }.bind(this)
        });      
      
    }

    
    btnTwoTouch() {
        

        
        this.click.play();

        var tween =  this.tweens.add({
            targets: this.gametwo,
            scaleX: { from: 0.65, to: 0.7 },
            scaleY: { from: 0.65, to: 0.7 },
            ease: 'Bounce',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 400,
            repeat: 0,            // -1: infinity
            yoyo: false,
            onComplete: function(){

                this.scene.transition({
                    target: 'GameMode21',
                    duration: 500,
                    moveBelow: true,
                });

            }.bind(this)
        });      
      
    }


    btnThreeTouch() {
        

        
        this.click.play();

        var tween =  this.tweens.add({
            targets: this.gamethree,
            scaleX: { from: 0.65, to: 0.7 },
            scaleY: { from: 0.65, to: 0.7 },
            ease: 'Bounce',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 400,
            repeat: 0,            // -1: infinity
            yoyo: false,
            onComplete: function(){

                this.scene.transition({
                    target: 'SelectMode3',
                    duration: 500,
                    moveBelow: true,
                });

            }.bind(this)
        });      
      
    }

 openExternalLink ()
{
    this.click.play();

    this.tweens.add({
           targets: this.infobtn,
           scaleX: { from: 0.8, to: 0.9 },
           scaleY: { from: 0.8, to: 0.9 },
           ease: 'Bounce',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
           duration: 400,
           repeat: 0,            // -1: infinity
           yoyo: false,
           onComplete: function(){

            var url = "help.html";

            var s = window.open(url, '_blank');
        
            if (s && s.focus)
            {
                s.focus();
            }
            else if (!s)
            {
                window.location.href = url;
            }
            
           }.bind(this)
       });      
  
   
}
}
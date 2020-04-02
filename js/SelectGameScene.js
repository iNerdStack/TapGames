class SelectGameScene extends Phaser.Scene {
    constructor() {
        super('SelectGameScene');
    }
    
   
    preload()
    {
        this.load.image("backgrounds","assets/images/menu/back1.png");
        this.load.image("selectgame","assets/images/menu/selectgame.png");
        this.load.image("gameone","assets/images/menu/gameone.png");
        
        this.load.audio('click', ['assets/sounds/click.ogg'])

    }
    create()
    {
        this.click = this.sound.add('click');

        this.backgrounds =  this.add.image(240,320, "backgrounds");
        this.backgrounds.scaleY = 1.3;
        this.selectgame =  this.add.image(240,320, "selectgame");
        this.gameone =  this.add.sprite(234,195, "gameone");
        this.gameone.scaleY = 0.57;
        this.gameone.scaleX = 0.584;
        this.gameone.setInteractive();

        this.gameone.on('pointerdown', this.CheckTouch, this);

         


    }
    update()
    {
          

    }


     CheckTouch () {
        
        this.click.play();

        var tween =  this.tweens.add({
            targets: this.gameone,
            scaleX: { from: 0.57, to: 0.6 },
            scaleY: { from: 0.584, to: 0.6 },
            ease: 'Bounce',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 400,
            repeat: 0,            // -1: infinity
            yoyo: false,
            onComplete: function(){

                this.scene.transition({
                    target: 'SelectMode1',
                    duration: 50,
                    moveBelow: true,
                });

            }.bind(this)
        });      
      
    }

    NextScene()
    {
        
    
    
    }
}
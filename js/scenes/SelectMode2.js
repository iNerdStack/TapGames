class SelectMode2 extends Phaser.Scene {
    constructor() {
        super('SelectMode2');
    }
    
   
    preload()
    {
      
        this.load.image("background2","assets/images/menu/background2.png");
        this.load.image("selectmodemenu","assets/images/menu/selectmode.png");
        this.load.image("selectmodebtn","assets/images/menu/selectmodebtn.png");



        this.load.audio('click', ['assets/sounds/click.ogg'])
    }
    create()
    {

        this.click = this.sound.add('click');

        this.background2 =  this.add.image(240,320, "background2");
        this.background2.scaleY = 1.3;
        this.selectmodemenu =  this.add.image(240,320, "selectmodemenu");
        this.selectmodemenu.scaleX = 0.61;
        this.selectmodemenu.scaleY = 0.61;
     
        //First Menu Bt
        this.selectmodebtn1 =  this.add.sprite(242,195, "selectmodebtn");
        this.selectmodebtn1.scaleY = 0.57;
        this.selectmodebtn1.scaleX = 0.584;
        this.selectmodebtn1.setInteractive();

        this.selectmodebtn1.on('pointerdown', this.checkBtnClick1, this);



    }

    checkBtnClick1()
    {
  
        this.click.play();

        var tween =  this.tweens.add({
            targets: this.selectmodebtn1,
            scaleX: { from: 0.57, to: 0.6 },
            scaleY: { from: 0.584, to: 0.6 },
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
}

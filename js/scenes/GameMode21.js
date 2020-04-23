 class GameMode21 extends Phaser.Scene {
    constructor() {
        super('GameMode21');
    }
    
   
    preload()
    {
        this.numberOfVirus = 15;
        this.score = 0;
        this.numberofcorrecttaps = 0;
        this.numberoftaps = 0;
        this.level = 1;
        this.viruspeed = 2;
        this.countdowntime = 3;

        this.load.image("background2","assets/images/background2.png");
        this.load.image("scorehud","assets/images/menu/scorehud.png");
        this.load.image("gemhud","assets/images/menu/gemhud.png");
     
     
   
        
        this.load.audio('levelup', ['assets/sounds/levelup.mp3'])
    
        for (var i = 0; i < this.numberOfVirus; i++) {

           this.load.image("corona"+ i,"assets/images/coronagreen.png");

            } 

     

    }
    create()
    {

        this.levelupsound = this.sound.add('levelup');
        this.corona = [];
        this.background2  =  this.add.tileSprite (240,320, 480,640, "background2");
        this.background2.setInteractive();
        this.background2.scaleY = 1.6;
        this.background2.on('pointerdown',  function(){
                
            this.numberoftaps +=  1

},this)


        randomX = 0;

        for (var i = 0; i < this.numberOfVirus; i++) {



             var randomX = Phaser.Math.Between(40, 420)

             var randomY = Phaser.Math.Between(-400, -30)

        

            this.corona[i] = this.add.sprite(randomX,randomY, "corona"+i);
            this.corona[i].scaleY = 0.3;
            this.corona[i].scaleX = 0.3;
            this.corona[i].setInteractive();
            this.corona[i].setDataEnabled();
            this.corona[i].data.set("Name", "corona"+i);
           
         
          
            this.corona[i].on('pointerdown',  this.checkTouch.bind(this, this.corona[i]))
        }

             
            
        this.scorehud =  this.add.image(120,35, "scorehud");
        this.scorehud.scaleX = 0.55
        this.scorehud.scaleY = 0.55
        this.gemhud =  this.add.image(365,35, "gemhud");
        this.gemhud.scaleX = 0.55
        this.gemhud.scaleY = 0.55


        //Load Text

       

        
        this.scoreText = this.add.text(98, 26, '0', { fontSize: '15px', fill: '#ffffff',fontFamily: 'GameFont' });
        this.scoreText.setStroke('#3a230a',3);  
        this.LevelText = this.add.text(345, 24, "Level: "+ this.level, { fontSize: '15px', fill: '#ffffff',fontFamily: 'GameFont' });
        this.LevelText.setStroke('#3a230a',3);

        
       this.countDown =  this.time.addEvent({ delay: 1000, callback: this.onCountDown, callbackScope: this, loop: true })
        
       this.CountDownText = this.add.text(210,235, this.countdowntime, { fontSize: '119px', fill: '#ffffff',fontFamily: 'GameFont' });
       this.CountDownText.setStroke('#3a230a',3);
    
        game.input.mouse.capture = true;
            

       

    }


    update()
    {
 
if(this.countdowntime == -1)
{
 // this.background2.tilePositionY -= 0.5
      // this.background2.tilePositionX -= 0.5


      for (var i = 0; i < this.numberOfVirus; i++) {

        
     

        this.moveVirus(this.corona[i], this.viruspeed)
 
    
       
      }      

      this.levelup = Math.floor(this.score / 5000)
      
      if(this.level < this.levelup)
      {
        
        this.levelupsound.play();
        this.level = this.levelup
        this.viruspeed += 0.125;
        this.LevelText.setText("Level: " + this.level)

      } 

}
     

    }


    onCountDown()
    {


        if(this.countdowntime == 0)
        {
        
        this.CountDownText.destroy() 
        this.countDown.destroy()
         
    
         this.countdowntime = -1;
    
        }
        else if(this.countdowntime > 0)
        {
            
            this.countdowntime -= 1; 
      
            this.CountDownText.setText(this.countdowntime)

            this.add.tween({
              targets: this.CountDownText,
              scaleX: { from: 0.7, to: 0.93 },
              scaleY: { from: 0.7, to: 0.93 },
              ease: 'Cubic',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
              duration: 500,
              repeat: 0,            // -1: infinity
              yoyo: false,
            
        })
    
    }

    }

    moveVirus(virus, speed)
    {
     
        virus.y += speed
        virus.angle +=3
        if(virus.y > 700)
        {

            //Go to GameOver Scene
            score = this.score;
            GameMode  = "GameMode21";
            Level = this.level;
            SceneModeInfo = "Classic Mode";
            
            NumberOfTrials = this.numberoftaps;
            accuratetaps =  this.numberofcorrecttaps;
            accuracy = Math.floor((this.numberofcorrecttaps / this.numberoftaps) * 100)
  
            this.scene.transition({
                target: 'GameOver',
                duration: 500,
                moveBelow: true,
            });
       
        }

    }

  

    checkTouch(getCorona, pointer, x, y, PropagationObj)
    {

      //  this.touch.play();
        this.score += 100
        this.numberofcorrecttaps += 1;
        this.numberoftaps += 1;
        


        this.scoreText.setText(this.score)
     

        var randomY = Phaser.Math.Between(-400, -30)
      
        var randomX = Phaser.Math.Between(40, 420)
        
        
        
        this.tweens.add({
            targets: getCorona,
            scaleX: { from: 0.5, to: 0 },
            scaleY: { from: 0.5, to: 0 },
            ease: 'Bounce',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 400,
            repeat: 0,            // -1: infinity
            yoyo: false,
            onComplete: function(){
            
                getCorona.x = randomX;
                getCorona.y  = randomY;
                getCorona.scaleY = 0.3;
                getCorona.scaleX = 0.3;
              
            }
        });      
     
       

    }
}
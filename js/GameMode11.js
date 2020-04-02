
class GameMode11 extends Phaser.Scene {
    constructor() {
        super('GameMode11');
    }
    
   
    preload()
    {
     
        // Load Images Or Assets Or Sounds Before UsE
        this.load.image("background","assets/images/background1.png");
        this.load.image("bgframe","assets/images/bgframes1.png");
        this.load.image("scorehud","assets/images/menu/scorehud.png");
        this.load.image("gemhud","assets/images/menu/gemhud.png");
        this.load.image("corona","assets/images/corona.png");
        this.load.image('coronagreen','assets/images/coronagreen.png');
        this.load.image("good","assets/images/good.png");
        this.load.image("sharp","assets/images/sharp.png");
        this.load.image("wrong","assets/images/wrong-move.png");



        //audio
        this.load.audio('error', ['assets/sounds/error.mp3'])
        this.load.audio('success', ['assets/sounds/success.mp3'])

    }
   
    create() {
      
        //Variables
        this.highestCombo = 0;
        this.accuratetaps = 0;
        this.initialNumberOfTrials = 20;
        this.NumberOfTrials = this.initialNumberOfTrials;
        this.checkWordAnimation = 0;
        this.checkCombo = 0;
        this.score = 0;
        this.timeDelay = 0;

      
        //Sound
        this.errorsound = this.sound.add('error');
        this.successsound = this.sound.add('success');
      
        //Load Images
        this.bgframe = this.add.sprite(234,310, "bgframe");
        this.corona = this.add.sprite(236,302, "corona");
        this.background =  this.add.image(240,320, "background");
        
       //Load Huds

        this.scorehud =  this.add.image(100,35, "scorehud");
        this.scorehud.scaleX = 0.7
        this.scorehud.scaleY = 0.7
        this.scorehud =  this.add.image(385,35, "gemhud");
        this.scorehud.scaleX = 0.7
        this.scorehud.scaleY = 0.7



        //Load Text

       

        
        this.scoreText = this.add.text(75, 24, '0', { fontSize: '17px', fill: '#fff',fontFamily: 'GameFont' });
        this.scoreText.setStroke('#3a230a',3);  
        this.TrialText = this.add.text(385, 23, this.initialNumberOfTrials, { fontSize: '17px', fill: '#fff',fontFamily: 'GameFont' });
        this.TrialText.setStroke('#3a230a',3); 
        game.input.mouse.capture = true;
      

    
   
    }
    update() {
      
        
        //Check Difficulty
        if(SceneModeInfo == "Easy1"){
        
          
            this.moveVirus(this.corona,11,1);


        }

        else if(SceneModeInfo == "Hard1")
        {

            this.moveVirus(this.corona,21,1);
        
        }
    

    
    
        
      if (game.input.activePointer.isDown)
    {
        if(this.time.now > this.timeDelay)
        {
          
          this.NumberOfTrials -= 1;
          this.TrialText.setText(this.NumberOfTrials)

          this.scoreSystem(this.score)
        
          this.timeDelay = this.time.now + 1000


        }


        if(this.NumberOfTrials <  1)
        {
          

            this.moveVirus(this.corona,0,0);


        }
        
    

    }
   
    
    
    }

    moveVirus(virus, speed, status)
    {
        if(status == '1')
        {
           
            virus.x += speed
            if (virus.x > 580)
            {
                this.resetVirus(virus)
            }
     
        }

     else if(status == '0')
     {
        
        //Send All Parameters To Game Over

        score = this.score;
        highestCombo = this.highestCombo
        initialNumberOfTrials = this.initialNumberOfTrials;
        accuratetaps = this.accuratetaps;
        GameMode  = "GameMode11";
        
        accuracy = Math.floor((this.accuratetaps / this.initialNumberOfTrials) * 100)
        
        
        

  this.scene.transition({
            target: 'GameOver',
            duration: 500,
            moveBelow: true,
        });

     }
        

    }

    resetVirus(virus)
    {
        virus.x = -99;

    }

    gameOver()
    {


     


    }
    scoreSystem(score)
    {
       

        if (this.between(this.corona.x, 231, 241)) {
           
            this.accuratetaps += 1;
            this.checkCombo += 1;

          
            

            
            if(this.checkCombo > this.highestCombo)
            {

                this.highestCombo = this.checkCombo
                
            }

            

            if(this.checkCombo == 1)
            {
                this.good =  this.add.image(234,150, "good");
                this.them = this.good

            }
            else if(this.checkCombo == 2)
            {
                this.sharp =  this.add.image(234,150, "sharp");
                this.them = this.sharp
            }
            else if(this.checkCombo == 3)
            {


            }
            
  
        
         var tween = this.tweens.add({
          targets: this.them,
          scaleX: { from: 0.4, to: 0.6 },
          scaleY: { from: 0.4, to: 0.6 },
          y:-150,
          ease: 'Bounce',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
          duration: 2000,
          repeat: 0,            // -1: infinity
          yoyo: false
      });
  
      
          this.tweens.add({targets: this.them ,duration: 1000,y:100});

            this.score += 10;
            this.scoreText.setText(this.score)
            this.successsound.play()
         
          }
          else
          {

            //Failed Attempt!

            this.checkCombo = 0;
            this.wrong =  this.add.image(234,150, "wrong");
            this.them = this.wrong;

            var tween = this.tweens.add({
                targets: this.them,
                scaleX: { from: 0.4, to: 0.6 },
                scaleY: { from: 0.4, to: 0.6 },
                y:-150,
                ease: 'Bounce',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 2000,
                repeat: 0,            // -1: infinity
                yoyo: false
            });
            
            this.tweens.add({targets: this.them ,duration: 1000,y:100});
          
            this.errorsound.play()
            

          }
        
     
    }

    between(x, min, max) {
        return x >= min && x <= max;
      }

   
    

}
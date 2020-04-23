
class GameMode11 extends Phaser.Scene {
    constructor() {
        super('GameMode11');
    }
    
   
    preload()
    {
     
        // Load Images Or Assets Or Sounds Before UsE
        this.load.image("bgframe1","assets/images/bgframes1.png");
        this.load.image("scorehud","assets/images/menu/scorehud.png");
        this.load.image("gemhud","assets/images/menu/gemhud.png");
        this.load.image("corona","assets/images/corona.png");
        this.load.image('coronagreen','assets/images/coronagreen.png');
        this.load.image('coronared','assets/images/coronared.png');

        
        //hype 
        this.load.image("good","assets/images/hype/good.png");
        this.load.image("great","assets/images/hype/great.png");
        this.load.image("nice","assets/images/hype/nice.png");
        this.load.image("sharp","assets/images/hype/sharp.png");
        this.load.image("smooth","assets/images/hype/smooth.png");
        this.load.image("genius","assets/images/hype/genius.png");
        this.load.image("awesome","assets/images/hype/awesome.png");
        this.load.image("guru","assets/images/hype/guru.png");
        this.load.image("superhuman","assets/images/hype/superhuman.png");
        this.load.image("perfect","assets/images/hype/perfect.png");
        this.load.image("magician","assets/images/hype/magician.png");
        this.load.image("impressive","assets/images/hype/impressive.png");
        this.load.image("breathtaking","assets/images/hype/breathtaking.png");
        this.load.image("godmode","assets/images/hype/godmode.png");
        this.load.image("unbelievable","assets/images/hype/unbelievable.png");
        this.load.image("inhuman","assets/images/hype/inhuman.png");
        this.load.image("outofthisworld","assets/images/hype/outofthisworld.png");
        this.load.image("badass","assets/images/hype/badass.png");
        this.load.image("extraordinary","assets/images/hype/extraordinary.png");
        

        //miss
        this.load.image("wrongmove","assets/images/hype/wrongmove.png");
        this.load.image("tryagain","assets/images/hype/tryagain.png");
        this.load.image("focus","assets/images/hype/focus.png");
        this.load.image("wrong","assets/images/hype/wrong.png");
        this.load.image("youmissed","assets/images/hype/youmissed.png");

        //audio
        this.load.audio('error', ['assets/sounds/error.mp3'])
        this.load.audio('success', ['assets/sounds/success.mp3'])

    }
   
    create() {
      
        //Variables
        this.isClicked = true;
        this.highestCombo = 0;
        this.accuratetaps = 0;
        this.initialNumberOfTrials = NumberOfTrials;
        this.NumberOfTrials = this.initialNumberOfTrials;
        this.checkWordAnimation = 0;
        this.checkCombo = 0;
        this.score = 0;
        this.timeDelay = 0;
       

        
        //Sound
        this.errorsound = this.sound.add('error');
        this.successsound = this.sound.add('success');
      
        //Load Images
        this.bgframe = this.add.sprite(240,320, "bgframe1");
      //  this.bgframe = this.add.sprite(234,310, "bgframe1");
        this.corona = this.add.sprite(238,310, "corona");
      
        
       //Load Huds

        this.scorehud =  this.add.image(120,35, "scorehud");
        this.scorehud.scaleX = 0.55
        this.scorehud.scaleY = 0.55
        this.scorehud =  this.add.image(365,35, "gemhud");
        this.scorehud.scaleX = 0.55
        this.scorehud.scaleY = 0.55


        //Load Text

       

        
        this.scoreText = this.add.text(98, 26, '0', { fontSize: '15px', fill: '#ffffff',fontFamily: 'GameFont' });
        this.scoreText.setStroke('#3a230a',3);  
        this.TrialText = this.add.text(345, 24, this.initialNumberOfTrials, { fontSize: '15px', fill: '#ffffff',fontFamily: 'GameFont' });
        this.TrialText.setStroke('#3a230a',3); 
    
        this.CountDownText = this.add.text(210,247, '3', { fontSize: '100px', fill: '#ffffff',fontFamily: 'GameFont' });
        this.CountDownText.setStroke('#3a230a',3); 
       
        this.countDown = this.time.addEvent({ delay: 1000, callback: this.onCountDown, callbackScope: this, loop: true })
        countdowntime = 3;

        
        game.input.mouse.capture = true;
       


        //For Countdown Mode
        if(SceneModeInfo == "Easy4" | SceneModeInfo == "Hard4")
        {
            this.NumberOfTrials = 0;
            this.TrialText.setText("0");
            this.countdownvalue = 15;
            this.countdowntimer =  this.countdownvalue;
            this.countDowntimerEvent = this.time.addEvent({ delay: 1000, callback: this.onCountDownTimer, callbackScope: this, loop: true })
       
            this.countdowntimerText = this.add.text(215, 24, this.countdowntimer+"s", { fontSize: '35px', fill: '#ffffff',fontFamily: 'GameFont' });
            this.countdowntimerText.setStroke('#3a230a',3); 


        }
   
    }

    update() {
      

      
      this.checkMovement()
    
      if(countdowntime == -1)
      {
         

      if (game.input.activePointer.isDown)
    {

       
            if(this.time.now > this.timeDelay)
            {
                if(SceneModeInfo == "Easy4" | SceneModeInfo == "Hard4")
                {
                    this.isClicked = true;
                    this.NumberOfTrials += 1;
                    this.TrialText.setText(this.NumberOfTrials)
          
                    this.scoreSystem(this.score)

                   
                    this.timeDelay = this.time.now + 1500
                
                   
                }
                else
                {
                    this.isClicked = true;
                    this.NumberOfTrials -= 1;
                    this.TrialText.setText(this.NumberOfTrials)
          
                    this.scoreSystem(this.score)
                  
                    this.timeDelay = this.time.now + 1500


                    
            if(this.NumberOfTrials <  1)
            {
              
    
                this.moveVirus(this.corona,0,0);
    
    
            }
            
                }
        
    
            }
    
    
        }
      
       //For Countdown Game Mode
        if(SceneModeInfo == "Easy4" | SceneModeInfo == "Hard4")
        {
           if(this.countdowntimer <=  0)
            {
              
              
                this.moveVirus(this.corona,0,0);
    
    
            }
        }
    }
   
    
    
    }

    
    onCountDownTimer()
    {
        if(countdowntime == -1)
        {

        this.countdowntimer -= 1;
        this.countdowntimerText.setText(this.countdowntimer+ "s");
        this.add.tween({

            targets: this.countdowntimerText,
            scaleX: { from: 0.8, to: 1 },
            scaleY: { from: 0.8, to: 1 },
            ease: 'Cubic',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 500,
            repeat: 0,            // -1: infinity
            yoyo: false,
        
            });

        if(this.countdowntimer <= 5)
        {

           this.countdowntimerText.setFill("#cb051c") 
           this.countdowntimerText.setStroke('#ffffff',3); 
        }
        else
        {
            this.countdowntimerText.setFill("#ffffff");
            this.countdowntimerText.setStroke('#3a230a',3); 
        
            
        }
    }
    }
    onCountDown ()
{

   
    if(countdowntime <= 0)
    {
    
    this.CountDownText.destroy() 
    this.countDown.destroy()
     this.isClicked = false;

     countdowntime = -1;

    }
    else if(countdowntime > 0)
    {
      
        countdowntime -= 1; 

        this.CountDownText.setText(countdowntime);
      
        this.isClicked = true;
       
        this.add.tween({

          targets: this.CountDownText,
          scaleX: { from: 0.7, to: 0.93 },
          scaleY: { from: 0.7, to: 0.93 },
          ease: 'Cubic',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
          duration: 500,
          repeat: 0,            // -1: infinity
          yoyo: false,
      
          });
      
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
        accuratetaps = this.accuratetaps;
        GameMode  = "GameMode11";
        if(SceneModeInfo == "Easy4" | SceneModeInfo == "Hard4")
        {
        
           NumberOfTrials = this.NumberOfTrials
           accuracy = Math.floor((this.accuratetaps / NumberOfTrials) * 100)

        } else
        {
            NumberOfTrials = this.initialNumberOfTrials;
            accuracy = Math.floor((this.accuratetaps / this.initialNumberOfTrials) * 100)
        }
    
        
        
        
  this.isClicked = false;
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

     checkMovement()
    {


     //Check Difficulty
     if(SceneModeInfo == "Easy1" | SceneModeInfo == "Easy2"| SceneModeInfo == "Easy3"| SceneModeInfo == "Easy4"){
        
        if(!this.isClicked)
        {
         
           this.moveVirus(this.corona,11,1);
           
        }
          

      }

      else if(SceneModeInfo == "Hard1"| SceneModeInfo == "Hard2"| SceneModeInfo == "Hard3"| SceneModeInfo == "Hard4")
      {
          if(!this.isClicked)
          {

          this.moveVirus(this.corona,21,1);
          
          }        
      }
  


    }

    scoreSystem(score)
    {

        if (this.between(this.corona.x, 233, 247)) {
            this.corona.setTexture('coronagreen')  
        }
        else
        {   
            this.corona.setTexture('coronared')  
        }
          
        
        setTimeout(() => { 


              this.corona.setTexture('corona')
              this.isClicked = false;
              this.checkMovement();

         }, 1000);
       
        

        if (this.between(this.corona.x, 233, 247)) {
           
            //check wrong text function when changing this

            if(SceneModeInfo == "Easy4" | SceneModeInfo == "Hard4")
            {

              this.countdowntimer = this.countdownvalue + 1;

            }

            this.accuratetaps += 1;
            this.checkCombo += 1;

             
      
            
            if(this.checkCombo > this.highestCombo)
            {

                this.highestCombo = this.checkCombo
                
            }

            

            if(this.checkCombo == 1)
            {
   
            this.randomtext = this.randomIntFromInterval(1,3)
                 
            if(this.randomtext == 1)
            {

                this.good =  this.add.image(234,150, "good");
                this.them = this.good

            }
            else if(this.randomtext == 2)
            {

                this.great =  this.add.image(234,150, "great");
                this.them = this.great

            }
            else if(this.randomtext == 3)
            {

                this.nice =  this.add.image(234,150, "nice");
                this.them = this.nice

            }
                
            }
            else if(this.checkCombo == 2)
            {
               
               
                this.randomtext = this.randomIntFromInterval(1,2)
                 
                if(this.randomtext == 1)
                {
                    this.sharp =  this.add.image(234,150, "sharp");
                    this.them = this.sharp
                }
                else if(this.randomtext == 2)
                {
    
                    this.smooth =  this.add.image(234,150, "smooth");
                    this.them = this.smooth
    
                }



            
            }
            else if(this.checkCombo == 3)
            {
                this.genius =  this.add.image(234,150, "genius");
                this.them = this.genius

            }
            else if(this.checkCombo == 4)
            {

                this.awesome =  this.add.image(234,150, "awesome");
                this.them = this.awesome

            }
            else if(this.checkCombo == 5)
            {
                
                this.guru =  this.add.image(234,150, "guru");
                this.them = this.guru

            }
            else if(this.checkCombo == 6)
            {
                
                this.superhuman =  this.add.image(234,150, "superhuman");
                this.them = this.superhuman

            }
            else if(this.checkCombo == 7)
            {

                this.randomtext = this.randomIntFromInterval(1,2)
                 
                if(this.randomtext == 1)
                {
                    this.perfect =  this.add.image(234,150, "perfect");
                    this.them = this.perfect

                }
                else if(this.randomtext == 2)
                {
    
                    this.magician =  this.add.image(234,150, "magician");
                    this.them = this.magician
    
                }


            }
            else if(this.checkCombo == 8)
            {
                
                this.impressive =  this.add.image(234,150, "impressive");
                this.them = this.impressive

            }
            else if(this.checkCombo == 9)
            {
                
                this.breathtaking =  this.add.image(234,150, "breathtaking");
                this.them = this.breathtaking

            }
            else if(this.checkCombo == 10)
            {
                
                this.godmode =  this.add.image(234,150, "godmode");
                this.them = this.godmode

            }
            else if(this.checkCombo > 10)
            {

                this.randomtext = this.randomIntFromInterval(1,5)
                 
                if(this.randomtext == 1)
                {
                
                this.unbelievable =  this.add.image(234,150, "unbelievable");
                this.them = this.unbelievable

                }
                else if(this.randomtext == 2)
                {
    
                    this.inhuman =  this.add.image(234,150, "inhuman");
                    this.them = this.inhuman
                          //out-of-this-world
                }
                else if(this.randomtext == 3)
                {
    
                    this.outofthisworld =  this.add.image(234,150, "outofthisworld");
                    this.them = this.outofthisworld
                          
                }
                else if(this.randomtext == 4)
                {
    
                    this.badass =  this.add.image(234,150, "badass");
                    this.them = this.badass
                          
                }
                else if(this.randomtext == 5)
                {
    
                    this.extraordinary =  this.add.image(234,150, "extraordinary");
                    this.them = this.extraordinary
                          
                }


                
                

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

           
            this.score = this.score +  (100 * this.checkCombo);


            this.scoreText.setText(this.score)
            this.successsound.play()
         
          }
          else
          {

            //Failed Attempt!

            this.checkCombo = 0;


            //random wrong 

               this.randomtext = this.randomIntFromInterval(1,5)
        
    

                if(this.randomtext == 1)
                {

                    this.wrong =  this.add.image(234,150, "wrong");
                    this.them = this.wrong;
                
                }
                else if(this.randomtext == 2)
                {

                    this.tryagain =  this.add.image(234,150, "tryagain");
                    this.them = this.tryagain;
                
                }
                else if(this.randomtext == 3)
                {

                    this.focus =  this.add.image(234,150, "focus");
                    this.them = this.focus;
                
                }
                else if(this.randomtext == 4)
                {

                    this.wrongmove =  this.add.image(234,150, "wrongmove");
                    this.them = this.wrongmove;
                
                }
                else if(this.randomtext == 5)
                {

                    this.youmissed =  this.add.image(234,150, "youmissed");
                    this.them = this.youmissed;
                
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
          
            this.errorsound.play()
            

          }
        
     
    }

    //Other functions
    between(x, min, max) {
       
        return x >= min && x <= max;
     
    }


        randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }


    formatTime(seconds){
        // Minutes
        var minutes = Math.floor(seconds/60);
        // Seconds
        var partInSeconds = seconds%60;
        // Adds left zeros to seconds
        partInSeconds = partInSeconds.toString().padStart(2,'0');
        // Returns formated time
        return `${minutes}:${partInSeconds}`;
    }
  
}
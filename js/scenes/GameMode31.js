class GameMode31 extends Phaser.Scene {
    constructor() {
        super('GameMode31');
    }
    
   
    preload()
    {

        this.load.image("background3","assets/images/background3.png");
        this.load.image("background4","assets/images/background4.png");
        this.load.image("backtiles3x3","assets/images/3x3.png");
        this.load.image("backtiles4x4","assets/images/4x4.png");
        this.load.image("backtiles5x5","assets/images/5x5.png");
        this.load.image("bgframe2","assets/images/bgframes2.png");
        this.load.image("bgframe3","assets/images/bgframes3.png");
        this.load.image("menubtn","assets/images/menu/menubtn.png");
        this.load.image("reloadbtn","assets/images/menu/reloadbtn.png");
        this.load.image("dialog","assets/images/menu/dialog.png");
        this.load.image("reloadbtn","assets/images/menu/reloadbtn.png");
        this.load.image("menubtn","assets/images/menu/menubtn.png");
        this.load.image("infobtn","assets/images/menu/infobtn.png");
        this.load.image("backbtn","assets/images/menu/backbtn.png");
        this.load.image("cancelbtn","assets/images/menu/cancelbtn.png");
       
       //Load Audio
       this.load.audio('click', ['assets/sounds/click.ogg']);
    
    }
    create()
    {

        this.click = this.sound.add('click');

        this.timercount = 0;
        this.tapDelay = 0;
        this.NoOfTaps = 0;
        this.menubtnsize = 0.8;


              // this.background.alpha = 0;
        this.completedbackground = this.add.image(240,340, "background4");
        this.completedbackground.scaleX = 1.5;
        this.completedbackground.scaleY = 1.5;


        this.background  =  this.add.tileSprite (240,320, 480,640, "background3");
     
       
        this.bgframe1 = this.add.image(240,320, "bgframe2");
       
        this.menubtn = this.add.image(343,430, "menubtn");
        this.menubtn.scaleX = this.menubtnsize;
        this.menubtn.scaleY = this.menubtnsize;
        this.menubtn.setInteractive();

          
        this.menubtn.on('pointerdown', function()
        {

          this.click.play();

        var tween =  this.tweens.add({
            targets: this.menubtn,
            scaleX: { from: (this.menubtnsize - 0.1), to: this.menubtnsize },
            scaleY: { from: (this.menubtnsize - 0.1), to: this.menubtnsize },
            ease: 'Bounce',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 400,
            repeat: 0,            // -1: infinity
            yoyo: false,
            onComplete: function() {
        
                
             this.showDialog();


            }.bind(this)
        });      

        }, this);


     

        

        //Tiles Positioning And Parameters

        this.numberoftiles = NumberOfTiles;
       

        if(this.numberoftiles == 3)
        {
            this.backtiles3x3 = this.add.image(245,327, "backtiles3x3");
            this.backtiles3x3.scaleX = 1.15;
            this.backtiles3x3.scaleY = 1.15;
            
            this.fontSize = "25px";
            this.tilepadding = 67;
            this.startPositionY = 214;
            this.startPositionX = 60;

      
        
        }
        else if(this.numberoftiles == 4)
        {

            this.backtiles4x4 = this.add.image(245,327, "backtiles4x4");
            this.backtiles4x4.scaleX = 1;
            this.backtiles4x4.scaleY = 1;

            this.fontSize = "21px";
            this.tilepadding = 55;
            this.startPositionY = 203;
            this.startPositionX = 62;

            this.menubtn.x = 355;
            this.menubtn.y= 438;
        }
        else if(this.numberoftiles == 5)
        {

            this.backtiles5x5 = this.add.image(245,327, "backtiles5x5");
            this.backtiles5x5.scaleX = 1;
            this.backtiles5x5.scaleY = 1;

            this.fontSize = "19px";
            this.tilepadding = 46;
            this.startPositionY = 200;
            this.startPositionX = 70;

            this.menubtn.x = 362;
            this.menubtn.y= 442;
            this.menubtnsize = 0.7;
            this.menubtn.scaleX = this.menubtnsize;
            this.menubtn.scaleY = this.menubtnsize;
        }



         
      

        this.fontSize2 = "28px";
        this.NormalFillColor = "#ff7200";
        this.NormalStrokeColor = "#ffffff";
        this.ErrorFillColor = "#cb051c";
        this.ErrorFillStroke = "#fff000";
        this.CompletedFillColor = "#ffffff";
        this.CompletedFillStroke = "#9b591f";

        this.NoNumberErrors = true; 
        this.isGameCompleted  = false;
        
       
        this.PositionY = this.startPositionY;
       
        this.PositionX = this.startPositionX;
    

        this.TimerEvent = this.time.addEvent({ delay: 1000, callback: this.timeFunction, callbackScope: this, loop: true })
       
        this.TimeText = this.add.text(201, 1, "TIME",{fontSize: "29px", fill: this.CompletedFillColor,fontFamily: 'Franklin' });
        this.TimeText.setStroke(this.CompletedFillStroke,5);

        this.TimerText = this.add.text(208, 30, this.formatTime(this.timercount),{fontSize: this.fontSize, fill: this.NormalFillColor,fontFamily: 'GameFont' });
        this.TimerText.setStroke(this.NormalStrokeColor,3);

        this.TapsText = this.add.text(312, 15, "TAPS:",{fontSize: "20px", fill: this.CompletedFillColor,fontFamily: 'Franklin' });
        this.TapsText.setStroke(this.CompletedFillStroke,5);
       
        this.TapValueText = this.add.text(372, 18,this.PadWithZeroes(this.NoOfTaps,2),{fontSize: "17px", fill: this.NormalFillColor,fontFamily: 'GameFont' });
        this.TapValueText.setStroke(this.NormalStrokeColor,2);

        this.GameModeText = this.add.text(50, 15, "MODE:",{fontSize: "20px", fill: this.CompletedFillColor,fontFamily: 'Franklin' });
        this.GameModeText.setStroke(this.CompletedFillStroke,5);
       
        if(difficulty == "0")
        {


            this.ModeText = this.add.text(116, 18,"EASY",{fontSize: "17px", fill: this.NormalFillColor,fontFamily: 'GameFont' });
            this.ModeText.setStroke(this.NormalStrokeColor,2);
    

        }
        else if(difficulty == "1")
        {
            
        this.ModeText = this.add.text(116, 18,"HARD",{fontSize: "17px", fill: this.ErrorFillColor,fontFamily: 'GameFont' });
        this.ModeText.setStroke(this.ErrorFillStroke,2);


        }



        for (var i = 0; i < this.numberoftiles; i++) {
          
           eval("this.tileset" + (i + 1) + "= []");
         
        }
       
        
        this.Ytiles= [];
        this.Xtiles = [];



    
        //Generate Text
       for (var i = 0; i < this.numberoftiles; i++) {

        eval("this.totalX" + (i + 1) + "= 0;");
        eval("this.totalY" + (i + 1) + "= 0;");

        this.PositionX += this.tilepadding;

        for (var j = 0; j < this.numberoftiles; j++) {

           eval("this.randomnumber"+ (j + 1) + " = Phaser.Math.Between(1, 9)") 
           eval("this.randomnumber"+ (j + 1) +  "= this.PadWithZeroes(this.randomnumber"+ (j+1)+", 2)")
          
           eval("this.tileset"+ (j + 1)+ "["+ i+ "] = this.add.text(this.PositionX, this.PositionY + (this.tilepadding * "+j+"), this.randomnumber"+(j+1)+ ", { fontSize: this.fontSize, fill: this.NormalFillColor,fontFamily: 'GameFont' });")
           eval("this.tileset"+(j+1)+"["+i+"].setStroke(this.NormalStrokeColor,3);")
            eval("this.tileset"+(j+1)+"["+i+"].setInteractive();")
            eval("this.tileset"+(j+1)+"["+i+"].on('pointerdown',  this.onNumberClick.bind(this, this.tileset"+(j+1)+"["+i+"]))")



        }

   

       }


         //Calculate Rows
         for (var i = 0; i < this.numberoftiles; i++) {
   

              
            for (var j = 0; j < this.numberoftiles; j++) {
    
            
      
                eval("this.totalX"+(i + 1 )+ " = this.totalX" + (i + 1) + " + parseInt(this.tileset"+(j + 1) + "[" + i + "]._text)")
      
              
              }

           

            }
       
          

         //Calculate Column

       for (var i = 0; i < this.numberoftiles; i++) {
   
   


         for (var j = 0; j < this.numberoftiles; j++) {



         eval("this.totalY"+(i + 1 )+ " = this.totalY" + (i + 1) + " + parseInt(this.tileset"+(i +1) + "[" + j + "]._text)")

       
         }


    }


        this.PositionX = this.startPositionX;
        this.PositionY = this.startPositionY;


         //Create Total Text 
         for (var i = 0; i < this.numberoftiles; i++) {
         
            this.PositionX += this.tilepadding;
   
            this.Xvalue =  eval("this.totalX" + (i + 1) )
            this.Xvalue = this.PadWithZeroes(this.Xvalue, 2)

            this.Yvalue =  eval("this.totalY" + (i + 1) )
            this.Yvalue = this.PadWithZeroes(this.Yvalue, 2)
            
            this.Xtiles[i] = this.add.text(this.PositionX, this.startPositionY + (this.tilepadding * this.numberoftiles), this.Xvalue, { fontSize: this.fontSize, fill: this.NormalFillColor,fontFamily: 'GameFont' });
            this.Xtiles[i].setStroke(this.NormalStrokeColor,3);

            this.Ytiles[i] = this.add.text(this.startPositionX + (this.tilepadding * (this.numberoftiles + 1)), this.PositionY, this.Yvalue, { fontSize: this.fontSize, fill: this.NormalFillColor,fontFamily: 'GameFont' });
            this.Ytiles[i].setStroke(this.NormalStrokeColor,3);
          
         
           this.PositionY += this.tilepadding;
         
        
        }


        this.checkNumbers();
    



        //Hidden Dialog
        this.dialogbackground = this.add.rectangle(240, 320, 480, 640, 0xffffff, 1)
        this.dialogbackground.alpha = 0
        this.dialog = this.add.image(240,320, "dialog");
        this.dialog.alpha = 0; 
      
        this.cancelbtn = this.add.image(365,250, "cancelbtn");
        this.cancelbtn.scaleX = 0;
        this.cancelbtn.scaleY = 0;
        this.cancelbtn.setInteractive();
       
      
        this.cancelbtn.on('pointerdown', function()
        {


           this.click.play()

    this.tweens.add({
            targets: this.cancelbtn,
            scaleX: { from: 0.55, to: 0.7 },
            scaleY: { from: 0.55, to: 0.7 },
            ease: 'Bounce',      // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 400,
            repeat: 0,            // -1: infinity
            yoyo: false,
            onComplete: function() {
        
                this.closDialog();

            }.bind(this)
        });      

        }, this);

        
        this.backbtn = this.add.image(122,320, "backbtn");
        this.backbtn.scaleX = 0;
        this.backbtn.scaleY = 0;
        this.backbtn.setInteractive();
       
      
        this.backbtn.on('pointerdown', function()
        {

           this.click.play()

    this.tweens.add({
            targets: this.backbtn,
            scaleX: { from: 0.55, to: 0.7 },
            scaleY: { from: 0.55, to: 0.7 },
            ease: 'Bounce',      // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 400,
            repeat: 0,            // -1: infinity
            yoyo: false,
            onComplete: function() {
        
                this.scene.transition({
                    target: 'SelectMode3',
                    duration: 500,
                    moveBelow: true,
                });

            }.bind(this)
        });      

        }, this);
       
        this.backText = this.add.text(97,345, "Back",{fontSize: "20px", fill: this.CompletedFillColor,fontFamily: 'Franklin' });
        this.backText.setStroke(this.CompletedFillStroke,5);
        this.backText.scaleX = 0
        this.backText.scaleY = 0;



        this.reloadbtn = this.add.image(200,320, "reloadbtn");
        this.reloadbtn.scaleX = 0;
        this.reloadbtn.scaleY = 0;
        this.reloadbtn.setInteractive();
       
      
        this.reloadbtn.on('pointerdown', function()
        {

            this.click.play()

         this.tweens.add({
            targets: this.reloadbtn,
            scaleX: { from: 0.55, to: 0.7 },
            scaleY: { from: 0.55, to: 0.7 },
            ease: 'Bounce',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 400,
            repeat: 0,            // -1: infinity
            yoyo: false,
            onComplete: function() {
        
                this.scene.restart();

            }.bind(this)
        });      

        }, this);
       
        this.reloadText = this.add.text(170,345, "Reload",{fontSize: "20px", fill: this.CompletedFillColor,fontFamily: 'Franklin' });
        this.reloadText.setStroke(this.CompletedFillStroke,5);
        this.reloadText.scaleX = 0
        this.reloadText.scaleY = 0;



        this.infobtn = this.add.image(280,320, "infobtn");
        this.infobtn.scaleX = 0;
        this.infobtn.scaleY = 0;
        this.infobtn.setInteractive();
       
      
        this.infobtn.on('pointerdown', function()
        {


         this.click.play()

        var tween =  this.tweens.add({
            targets: this.infobtn,
            scaleX: { from: 0.55, to: 0.7 },
            scaleY: { from: 0.55, to: 0.7 },
            ease: 'Bounce',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 400,
            repeat: 0,            // -1: infinity
            yoyo: false,
            onComplete: function() {
        
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

        }, this);
       
        this.infoText = this.add.text(263,345, "Info",{fontSize: "20px", fill: this.CompletedFillColor,fontFamily: 'Franklin' });
        this.infoText.setStroke(this.CompletedFillStroke,5);
        this.infoText.scaleX = 0;
        this.infoText.scaleY = 0;



        this.dialogmenubtn = this.add.image(360,320, "menubtn");
        this.dialogmenubtn.scaleX = 0;
        this.dialogmenubtn.scaleY = 0;
        this.dialogmenubtn.setInteractive();
       
      
        this.dialogmenubtn.on('pointerdown', function()
        {

            this.click.play()

        var tween =  this.tweens.add({
            targets: this.dialogmenubtn,
            scaleX: { from: 0.55, to: 0.7 },
            scaleY: { from: 0.55, to: 0.7 },
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
       
        this.dialogmenuText = this.add.text(333,345, "Home",{fontSize: "20px", fill: this.CompletedFillColor,fontFamily: 'Franklin' });
        this.dialogmenuText.setStroke(this.CompletedFillStroke,5);
        this.dialogmenuText.scaleX = 0;
        this.dialogmenuText.scaleY = 0;


        //Completed Dialog



    }
update()
{

       //  this.background.tilePositionY -= 0.3
        // this.background.tilePositionX -= 0.5

}


showDialog()
{


this.tweens.add({
      targets: this.dialog,
      scaleX: { from: 0.75, to: 0.9 },
      scaleY: { from: 0.75, to: 0.9 },
      alpha:  { from: 0, to: 1 },
      ease: 'Bounce',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
      duration: 400,
      repeat: 0,            // -1: infinity
      yoyo: false,
      onComplete: function() {



        //Make all dialog objects visible
        this.backbtn.scaleX = 0.7;
        this.backbtn.scaleY = 0.7;
        this.cancelbtn.scaleX = 0.7;
        this.cancelbtn.scaleY = 0.7;
        this.backText.scaleX = 1
        this.backText.scaleY = 1;
        this.reloadbtn.scaleX = 0.7;
        this.reloadbtn.scaleY = 0.7;
        this.reloadText.scaleX = 1
        this.reloadText.scaleY = 1;
        this.infobtn.scaleX = 0.7;
        this.infobtn.scaleY = 0.7;
        this.infoText.scaleX = 1
        this.infoText.scaleY = 1;
        this.dialogmenubtn.scaleX = 0.7;
        this.dialogmenubtn.scaleY = 0.7;
        this.dialogmenuText.scaleX = 1
        this.dialogmenuText.scaleY = 1;

       

      }.bind(this)
  }); 

  this.tweens.add({
    targets: this.dialogbackground,
    alpha:  { from: 0, to: 1 },
    ease: 'Back',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
    duration: 400,
    repeat: 0,            // -1: infinity
    yoyo: false
}); 



}





closDialog()
{


     //Make all dialog objects visible
     this.backbtn.scaleX = 0;
     this.backbtn.scaleY = 0;
     this.cancelbtn.scaleX = 0;
     this.cancelbtn.scaleY = 0;
     this.backText.scaleX = 0;
     this.backText.scaleY = 0;
     this.reloadbtn.scaleX = 0;
     this.reloadbtn.scaleY = 0;
     this.reloadText.scaleX = 0;
     this.reloadText.scaleY = 0;
     this.infobtn.scaleX = 0;
     this.infobtn.scaleY = 0;
     this.infoText.scaleX = 0;
     this.infoText.scaleY = 0;
     this.dialogmenubtn.scaleX = 0;
     this.dialogmenubtn.scaleY = 0;
     this.dialogmenuText.scaleX = 0;
     this.dialogmenuText.scaleY = 0;

    this.tweens.add({
          targets: this.dialog,
          scaleX: { from: 0.9, to: 0 },
          scaleY: { from: 0.9, to: 0 },
          alpha:  { from: 1, to: 0 },
          ease: 'Bounce',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
          duration: 400,
          repeat: 0,            // -1: infinity
          yoyo: false,
          onComplete: function() {
    
            //Make all dialog objects visible
      
    
          }.bind(this)
      }); 
    
      this.tweens.add({
        targets: this.dialogbackground,
        alpha:  { from: 1, to: 0 },
        ease: 'Back',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
        duration: 400,
        repeat: 0,            // -1: infinity
        yoyo: false
    }); 
    
    
    
    }
    
timeFunction()
{

    this.timercount += 1;
    this.TimerText.setText(this.formatTime(this.timercount));

}
sumValues()
{
    for (var i = 0; i < this.numberoftiles; i++) {
   
        eval("this.totalX" + (i + 1)  +  " = 0;") 
        eval("this.totalY" + (i + 1)  +  " = 0;") 
    }
       //Calculate Rows
         for (var i = 0; i < this.numberoftiles; i++) {
   

              
            for (var j = 0; j < this.numberoftiles; j++) {
    
            
      
                eval("this.totalX"+(i + 1 )+ " = this.totalX" + (i + 1) + " + parseInt(this.tileset"+(j + 1) + "[" + i + "]._text)")
      
              
              }

        
            }
       
          

         //Calculate Column

       for (var i = 0; i < this.numberoftiles; i++) {
   
   


         for (var j = 0; j < this.numberoftiles; j++) {



         eval("this.totalY"+(i + 1 )+ " = this.totalY" + (i + 1) + " + parseInt(this.tileset"+(i +1) + "[" + j + "]._text)")

       
         }
        }


    for (var i = 0; i < this.numberoftiles; i++) {
   
     this.updateTotalX = eval("this.totalX" + (i + 1))
     this.updateTotalX = this.PadWithZeroes(this.updateTotalX, 2)
     this.updateTotalY = eval("this.totalY" + (i + 1))
     this.updateTotalY = this.PadWithZeroes(this.updateTotalY, 2)

     this.Xtiles[i].setText(this.updateTotalX)
     this.Ytiles[i].setText(this.updateTotalY)

    }
}

onNumberClick(getNumber, pointer, x, y, PropagationObj)
{

    if(this.time.now > this.tapDelay)
    {

    this.NoOfTaps += 1;
    
    this.TapValueText.setText(this.PadWithZeroes(this.NoOfTaps,2));

    this.tweens.add({
        targets: this.TapValueText,
        scaleX: { from: 1, to: 1.1 },
        scaleY: { from: 1, to: 1.1 },
        ease: 'Bounce',      // 'Cubic', 'Elastic', 'Bounce', 'Back'
        duration: 400,
        repeat: 0,            // -1: infinity
        yoyo: false,
    });  


    this.updateText =  parseInt(getNumber._text) + 1;
    this.updateText = this.PadWithZeroes(this.updateText, 2)
    getNumber.setText(this.updateText)
   
    this.tweens.add({
        targets: getNumber,
        scaleX: { from: 0.8, to: 1 },
        scaleY: { from: 0.8, to: 1 },
        ease: 'Bounce',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
        duration: 400,
        repeat: 0,            // -1: infinity
        yoyo: false,
        onComplete: function(){
        }
    });
    
    

    this.sumValues();
    this.checkNumbers();
    this.verifyNumbers();
    
    this.tapDelay = this.time.now + 500
}
}

  checkNumbers()
  {

 
     //Number Error Check
 
     this.checkNumberErrorX = 0;
     this.checkNumberErrorY = 0;


if(difficulty == "0")
{
    //Easy Difficulty
    //Check Rows for Three Repeated Numbers

    for (var i = 0; i < this.numberoftiles; i++) {
    
        eval("this.X" + (i + 1) +" = []");
        eval("this.Y" + (i + 1) +" = []");
        eval("this.isYgood" + (i + 1) +"= true");
        eval("this.isXgood" + (i + 1) +" = true");
 
     }
 
     //Get Values Of Rows
     for (var i = 0; i < this.numberoftiles; i++) {
       
 
         for (var j = 0; j < this.numberoftiles; j++) {
     
         eval("this.X" + (i + 1) + ".push(parseInt(this.tileset" + (i + 1)+"["+j+"]._text))")
     }
     }
 
     //Get Value Of Column
 
     for (var i = 0; i < this.numberoftiles; i++) {
 
 
         for (var j = 0; j < this.numberoftiles; j++) {
 
     
         eval("this.Y" + (i + 1) + ".push(parseInt(this.tileset" + (j + 1)+"["+(i)+"]._text))")
        
 
     }
      
 
 
 
 }

    for (var i = 0; i < this.numberoftiles; i++) {
     
        
        
        for (var j = 0; j < this.numberoftiles; j++) {
          
 
         if(eval("this.X" + (i + 1) + ".every( (val, i, arr) => val === arr[0] )"))
         {
 
             //isbad
           
                 eval('this.tileset' + (i + 1)+'['+ j +'].setFill(this.ErrorFillColor)')
                 eval("this.tileset" + (i + 1)+"["+ j +"].setStroke(this.ErrorFillStroke,3)");
                 eval("this.isXgood" + (i + 1) + "= false")
              
          
           
 
         }
         else
         {
             if(eval("this.isYgood" + (j + 1) + "== true & this.isXgood" + (j + 1) +"== true"))
             {
 
             eval("this.tileset" + (i + 1)+"["+j+"].setFill(this.NormalFillColor)")
             eval("this.tileset" + (i + 1)+"["+j+"].setStroke(this.NormalStrokeColor,3)");
            
             }
 
         }
 
        }
     }
 
 //Check Column Numbers
 
 for (var i = 0; i < this.numberoftiles; i++) {
      
         
         
     for (var j = 0; j < this.numberoftiles; j++) {
       
 
      if(eval("this.Y" + (i + 1) + ".every( (val, i, arr) => val === arr[0] )"))
      {
      
 
          eval('this.tileset' + (j + 1)+'['+ i +'].setFill(this.ErrorFillColor)')
          eval("this.tileset" + (j + 1)+"["+ i +"].setStroke(this.ErrorFillStroke,3)");
          eval("this.isYgood" + (i + 1) + "= false")
          
      }
      else
      {
         if(eval("this.isYgood" + (j + 1) + "== true & this.isXgood" + (j + 1) +"== true"))
         {
 
 
          eval("this.tileset" + (j + 1)+"["+i+"].setFill(this.NormalFillColor)")
          eval("this.tileset" + (j + 1)+"["+i+"].setStroke(this.NormalStrokeColor,3)");
          
         
         }
     }
 
 
     }
 
 
 
  }
 
 
     for (var i = 0; i < this.numberoftiles; i++) {
      
         if(eval("this.isXgood" + (i + 1) + "== false"))
         {
             
             this.checkNumberErrorX += 1;
             
         }
 
         if(eval("this.isYgood" + (i + 1) + "== false"))
         {

             this.checkNumberErrorY += 1; 


         }
     }
}
else if(difficulty == "1")
{
    //Hard Difficulty
    //Check Rows for any Repeated Numbers
    this.NumberArray = [];
    for (var i = 0; i < this.numberoftiles; i++) {
    
        
        for (var j = 0; j < this.numberoftiles; j++) {
    
     eval("this.NumberArray.push(parseInt(this.tileset" + (i + 1)+"["+j+"]._text))")
    
    }    
    }

    this.checkDuplicateNumbers = this.findDuplicateArray(this.NumberArray);

   
    for (var i = 0; i < this.numberoftiles; i++) {
    
        
        for (var j = 0; j < this.numberoftiles; j++) {



    eval("this.numbercontent = parseInt(this.tileset" + (i + 1)+"["+j+"]._text)")
    
      this.numbercontent = this.numbercontent.toString();

      

         if(this.checkDuplicateNumbers.includes(this.numbercontent))
         {

            
            //isbad
            eval('this.tileset' + (i + 1)+'['+ j +'].setFill(this.ErrorFillColor)')
            eval("this.tileset" + (i + 1)+"["+ j +"].setStroke(this.ErrorFillStroke,3)");
           
            this.checkNumberErrorX += 1;
            this.checkNumberErrorY += 1;
         
         }
         else
         {
         
            eval("this.tileset" + (i + 1)+"["+j+"].setFill(this.NormalFillColor)")
            eval("this.tileset" + (i + 1)+"["+j+"].setStroke(this.NormalStrokeColor,3)");
      
      
        }

            
    }    
    }

}


    
    //Update Number Error Check

     if(this.checkNumberErrorX == 0 & this.checkNumberErrorY == 0)
     {
      
        this.NoNumberErrors = true;

     }
     else
     {

        this.NoNumberErrors = false;
     
    }


}


   verifyNumbers()
   {


    for (var i = 0; i < this.numberoftiles; i++) {


     eval("this.XtilesValues"+(i+1) + "= []")
     eval("this.YtilesValues"+(i+1) + "= []")
       

    }


    for (var i = 0; i < this.numberoftiles; i++) {
       
        
        for (var j = 0; j < this.numberoftiles; j++) {


        eval("this.XtilesValues" + (i + 1) + ".push(parseInt(this.Xtiles["+j+"]._text))")
        eval("this.YtilesValues" + (i + 1) + ".push(parseInt(this.Ytiles["+j+"]._text))")


        }
    }

    for (var i = 0; i < this.numberoftiles; i++) {
        

        if(this.NoNumberErrors == true)
        {

            if(eval("this.XtilesValues" + (i + 1) + ".every( (val, i, arr) => val === arr[0] )"))
            {
                if(eval("this.YtilesValues" + (i + 1) + ".every( (val, i, arr) => val === arr[0] )"))
                {
    
                   this.isGameCompleted = true;
    
                }
                
    
            }
        }
    
    }

    

    if(this.isGameCompleted == true)
    {

        this.TimerEvent.destroy();
     

        for (var i = 0; i < this.numberoftiles; i++) {

            for (var j = 0; j < this.numberoftiles; j++) {
        

                eval("this.tileset" + (i + 1)+"["+j+"].setFill(this.CompletedFillColor)")
                eval("this.tileset" + (i + 1)+"["+j+"].setStroke(this.CompletedFillStroke,3)");
                eval("this.tileset" + (i + 1)+"["+j+"].disableInteractive()");

            }
           
           
           this.completedFunction();

        
           
        }
    

    }

   }

    completedFunction()
    {

      
            this.tweens.add({
                targets: this.background,
                alpha: { from: 1, to: 0 },
                duration: 800,
                repeat: 0,            // -1: infinity
                yoyo: false
            });  

            this.completedbackground.depth  = -2;
            this.background.depth =  -1;

            this.bgframe2 = this.add.image(240,348, "bgframe3");
            this.bgframe2.depth =  -1;

        

             this.tweens.add({
                targets: this.bgframe2,
                scaleX: { from: 0, to: 1 },
                scaleY: { from: 0.1, to: 1 },
                ease: 'Bounce',      // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 1000,
                repeat: 0,            // -1: infinity
                yoyo: false,
            });  


            //Time Text and Timer

            this.tweens.add({
                targets: this.TimeText,
                y: { from: 1, to: 505 },
                ease: 'Bounce',      // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 1000,
                repeat: 0,            // -1: infinity
                yoyo: false
            });  


                      
            this.TimerText.setFontSize("20px")

            this.tweens.add({
                targets: this.TimerText,
                x: { from: 208, to: 213 },
                y: { from: 1, to: 535 },
                ease: 'Bounce',     
                duration: 1000,
                repeat: 0,            
                yoyo: false
            });  

     //Taps

     this.tweens.add({
        targets: this.TapsText,
        x: { from: 312, to: 314 },
        y: { from: 15, to: 512 },
        ease: 'Bounce',     
        duration: 1000,
        repeat: 0,           
        yoyo: false,
        onComplete: function() {
         
            this.TapsText.setFontSize("25px");
      
        }.bind(this)
    });  

    this.tweens.add({
        targets: this.TapValueText,
        x: { from: 372, to: 332 },
        y: { from: 18, to: 540 },
        ease: 'Bounce',      
        duration: 1000,
        repeat: 0,            
        yoyo: false,
        onComplete: function() {
         
            this.TapValueText.setFontSize("25px");
      
        }.bind(this)
    });  


     //Mode 

     this.tweens.add({
        targets: this.GameModeText,
        x: { from: 50, to: 80 },
        y: { from: 15, to: 512 },
        ease: 'Bounce',     
        duration: 1000,
        repeat: 0,           
        yoyo: false,
        onComplete: function() {
         
            this.GameModeText.setFontSize("25px");
      
        }.bind(this)
    });  


    this.tweens.add({
        targets: this.ModeText,
        x: { from: 50, to: 83 },
        y: { from: 118, to: 542 },
        ease: 'Bounce',      
        duration: 1000,
        repeat: 0,            
        yoyo: false,
        onComplete: function() {
         
            this.ModeText.setFontSize("22px");
      
        }.bind(this)
    });


    }



    //Other Functions

   findDuplicateArray(value) {
        var object = {};
        var result = [];

        value.forEach(function (item) {
          if(!object[item])
              object[item] = 0;
            object[item] += 1;
        })

        for (var prop in object) {
           if(object[prop] >= 2) {
               result.push(prop);
           }
        }

        return result;

    }


 PadWithZeroes(value, length) {

    var word = '' + value;
    while (word.length < length) {
        word = '0' + word;
    }

    return word;

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
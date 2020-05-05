var game;
let score = 0;
let ScoreText;
let difficulty = "0";
let SceneModeInfo;
let accuracy;
let accuratetaps;
let highestCombo;
let NumberOfTrials;
let GameMode;
let ActivateSound = true;
let countdowntime;
let GameTime = "00:00";
let Level =  0;
let NumberOfTiles = 5;


window.onload=function()
{

    //On Page Load
    var config = {
        type: Phaser.CANVAS,
        width: 480,
        height: 640,
        parent: 'LoadGame',
        scene: [GameMode31,BootScene,SelectGameScene,LoadingScreen,SelectMode1,SelectMode3,
               GameMode11,GameMode21,GameOver],
audio: {

        disableWebAudio: true

}
    
    }
 
game = new Phaser.Game(config);


}

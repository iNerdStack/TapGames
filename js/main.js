var game;
let score = 2000;
let ScoreText;
let difficulty;
let SceneModeInfo;
let accuracy;
let accuratetaps;
let highestCombo;
let initialNumberOfTrials;
let GameMode;

window.onload=function()
{

    //On Page Load
    var config = {
        type: Phaser.AUTO,
        width: 480,
        height: 640,
        parent: 'LoadGame',
        scene: [SelectGameScene,SelectMode1,GameMode11,GameOver],
audio: {
        disableWebAudio: true
    }
    
    }
 

 
game = new Phaser.Game(config);


}

class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

   
    preload()
    {

        this.load.json('assets', 'assets/json/assets.json');
        this.load.image('logo', 'assets/images/logo.png');

    }
    create()
    {
        this.scene.start('LoadingScreen');

    }
}
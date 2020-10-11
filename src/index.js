import JR from './jr/jr'

const player = new JR.GameObject()

const game = JR.fastStart()

player.mesh = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:2}, game.scene);

game.engine.runRenderLoop(function () {
        game.scene.render();
        player.update()
});


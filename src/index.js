import JR from './jr/jr'

const game = new JR()

console.log(game)


const camera = game.basicCamera();

console.log(camera)

camera.position.z = 400;
const scene = game.basicScene();

console.log(scene)

console.log(game.renderer)


game.addBox(scene)

game.level.camera = camera;
game.level.scene = scene;


function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        game.renderer.setSize( window.innerWidth - 50, window.innerHeight - 100 );

}
window.addEventListener( 'resize', onWindowResize, false );

game.animate()
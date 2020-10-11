import {GameObject} from './engine/jr-core'
import Babylon from 'babylonjs'

function fastStart(){

    const canvas = document.getElementById("renderCanvas"); // Get the canvas element
    const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

    const pawns = []

    /******* Add the create scene function ******/
    const createScene = function () {

        // Create the scene space
        const scene = new BABYLON.Scene(engine);

        // Add a camera to the scene and attach it to the canvas
        const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0,0,20), scene);
        camera.attachControl(canvas, true);

        // Add lights to the scene
        const light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
        const light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

        return scene;
    };
    /******* End of the create scene function ******/

    const scene = createScene(); //Call the createScene function

    // Register a render loop to repeatedly render the scene

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
            engine.resize();
    });

    return {canvas, engine, scene}
}

export default {GameObject, fastStart}
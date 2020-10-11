import { Vector3 } from 'babylonjs';
import * as THREE from 'three';

export default function JR(){

        this.level = {}

        this.basicCamera = () => new THREE.PerspectiveCamera( 120, window.innerWidth / window.innerHeight, 1, 1000 );
        
        this.basicScene = () => new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( window.innerWidth - 50, window.innerHeight - 100 );
        document.body.appendChild(  this.renderer.domElement );

        this.addBox = (scene) => {

            const geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
            const box = new THREE.Mesh( geometry );
            scene.add( box );

            return box;

        }

        this.animate = () => {

            requestAnimationFrame( this.animate );
    
            this.renderer.render( this.level.scene, this.level.camera );
    
        }
    

}


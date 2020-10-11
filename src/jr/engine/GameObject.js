export default function GameObject(){

    this.name = "";

    this.mesh = {}

    this.update = ()=>{
        this.mesh.position.y += 0.01;
    }



}
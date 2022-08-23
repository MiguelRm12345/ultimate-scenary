//escenario
const scene=new THREE.Scene();
scene.background = new THREE.Color(0xA21EE3)

scene.fog=new THREE.Fog(0xfffffff, 25, 8)


let loader = new THREE.TextureLoader()
loader.load('../img/joseverde.jpg',function(texture){
    scene.background = texture
})

//camara
const camera = new THREE.PerspectiveCamera( 75, 
window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//Geometria 

const geometry = new THREE.CapsuleGeometry( 5, 1, 4, 20 );
const material = new THREE.MeshBasicMaterial( {color: "green"} );
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

camera.position.z = 20;


//Funcion
function animate() {
	requestAnimationFrame( animate );
    capsule.rotation.x += 0.1;
    capsule.rotation.y += 0.1;
	renderer.render( scene, camera );
}
animate();
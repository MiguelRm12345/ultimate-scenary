//escenario
const scene=new THREE.Scene();
scene.background = new THREE.Color(0xA21EE3)

scene.fog=new THREE.Fog(0xfffffff, 25, 8)

//camara
const camera = new THREE.PerspectiveCamera( 75, 
window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//Geometria 

const geometry = new THREE.BoxGeometry( 10, 10, 10 );
const material = new THREE.MeshBasicMaterial( { color: 0xfa1001 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 20;


//Funcion
function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.03;
    cube.rotation.y += 0.03;
	renderer.render( scene, camera );
}
animate();

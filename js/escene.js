//escenario
const scene=new THREE.Scene();
scene.background = new THREE.Color(0x0000000)

scene.fog=new THREE.Fog(0xfffffff, 30, 5)

//camara
const camera = new THREE.PerspectiveCamera( 75, 
window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//Geometria 
/* const geometry = new THREE.BoxGeometry( 5, 0.5, 7, 10 );
const material = new THREE.MeshBasicMaterial( { color: 000000 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cylinder ); */

/* const geometry = new THREE.CylinderGeometry( 2, 2, 10, 10 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder ); */

/* const geometry = new THREE.CapsuleGeometry( 2, 5, 20, 20);
const material = new THREE.MeshBasicMaterial( {color: 0x66F2AE } );
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule ); */

const geometry = new THREE.TorusKnotGeometry( 5, 1, 150, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );

camera.position.z = 20;


//Funcion
function animate() {
	requestAnimationFrame( animate );
    torusKnot.rotation.x += 0.02;
	renderer.render( scene, camera );
}
animate();









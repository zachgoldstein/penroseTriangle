// Step 1 - Create a simple scene with our object
//  - Setup our scene, camera, renderer, and basic mesh
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000);
camera.position.z = 20

// Add our renderer
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement);

let geometry = new THREE.BoxGeometry(10, 10, 10);
let material = new THREE.MeshBasicMaterial({ color: "red" });
let cubeMesh = new THREE.Mesh(geometry, material);
cubeMesh.rotation.x = THREE.Math.degToRad(45);
cubeMesh.rotation.y = THREE.Math.degToRad(45);
scene.add(cubeMesh);

let render = function () {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();
// Step 2 - Let's make it look cool!
// - Add an orthographic camera
// - Tune up our renderer
// - Improve our box's material

let scene = new THREE.Scene();
let camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000);
camera.position.set(500, 500, 500)
camera.lookAt(scene.position);

// Add our renderer
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement);

// Add geometry
let geometry = new THREE.BoxGeometry(50, 50, 50);
let material = new THREE.MeshLambertMaterial({ color: "lightgrey", flatShading: true });
let cubeMesh = new THREE.Mesh(geometry, material);
scene.add(cubeMesh);

// Add a light!
let light = new THREE.DirectionalLight(0xffffff, 1.8);
light.position.set(60, 100, 20);
scene.add(light);

let render = function () {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();
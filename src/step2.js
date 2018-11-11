// Step 2 - Let's make it look cool!
// - Add more lights
// - Add an orthographic camera
// - Tune up our renderer
let scene = new THREE.Scene();
let camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000);
camera.position.y = 500;
camera.position.z = 500;
camera.position.x = 500;
camera.updateProjectionMatrix();
camera.lookAt(scene.position);

// Add our renderer
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x202020, 1);
renderer.shadowMapEnabled = true;
renderer.shadowMapType = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

// Add geometry
let geometry = new THREE.BoxGeometry(50, 50, 50);
let material = new THREE.MeshLambertMaterial({ color: 0xF9F8ED, shading: THREE.FlatShading });
let cubeMesh = new THREE.Mesh(geometry, material);
cubeMesh.shapeX = 0.5;
cubeMesh.shapeY = 100;
cubeMesh.shapeZ = 100;
cubeMesh.shapeColor = 0xffffff;
scene.add(cubeMesh);

// Add a light!
let light = new THREE.DirectionalLight(0xffffff, 1.8);
light.position.set(60, 100, 20);
scene.add(light);

// Add more lights!
let shadowlight = new THREE.DirectionalLight(0xffffff, 1.8);
shadowlight.position.set(0, 50, 0);
shadowlight.castShadow = true;
shadowlight.shadowDarkness = 0.1;
scene.add(shadowlight);

let backLight = new THREE.DirectionalLight(0xffffff, 1);
backLight.position.set(-40, 100, 20);
scene.add(backLight);

let render = function () {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();
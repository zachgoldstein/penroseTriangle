// Step 3 - Add more shapes to build our penrose triangle
// - Add more boxes
// - Add a top plane
// - Add a triangular plane

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
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement);

let penroseBaseGeometry = new THREE.BoxGeometry(50, 50, 300);
let penroseBaseMaterial = new THREE.MeshLambertMaterial({ color: 0xF9F8ED, shading: THREE.FlatShading });
let penroseBaseMesh = new THREE.Mesh(penroseBaseGeometry, penroseBaseMaterial);
scene.add(penroseBaseMesh)

let penroseRiseGeometry = new THREE.BoxGeometry(50, 300, 50);
let penroseRiseMaterial = new THREE.MeshLambertMaterial({ color: 0xF9F8ED, shading: THREE.FlatShading });
let penroseRiseMesh = new THREE.Mesh(penroseRiseGeometry, penroseRiseMaterial);
penroseRiseMesh.position.x = 0;
penroseRiseMesh.position.y = 125;
penroseRiseMesh.position.z = 125;
scene.add(penroseRiseMesh)

let penroseTopGeometry = new THREE.BoxGeometry(150, 50, 50);
let penroseTopMaterial = new THREE.MeshLambertMaterial({ color: 0xF9F8ED, shading: THREE.FlatShading });
let penroseTopMesh = new THREE.Mesh(penroseTopGeometry, penroseTopMaterial);
penroseTopMesh.position.x = 100;
penroseTopMesh.position.y = 250;
penroseTopMesh.position.z = 125;
scene.add(penroseTopMesh)

let penroseTopEndGeometry = new THREE.PlaneBufferGeometry(50, 50, 32);
var penroseTopEndMaterial = new THREE.MeshLambertMaterial({ color: 0xF9F8ED, shading: THREE.FlatShading });
let penroseTopEndPlane = new THREE.Mesh(penroseTopEndGeometry, penroseTopEndMaterial);
penroseTopEndPlane.position.x = 200;
penroseTopEndPlane.position.y = 275;
penroseTopEndPlane.position.z = 125;
penroseTopEndPlane.rotation.x = THREE.Math.degToRad(-90);
scene.add(penroseTopEndPlane)

var geom = new THREE.Geometry();
var v1 = new THREE.Vector3(0, 0, 0);
var v2 = new THREE.Vector3(50, 0, 0);
var v3 = new THREE.Vector3(50, 50, 0);

geom.vertices.push(v1);
geom.vertices.push(v2);
geom.vertices.push(v3);

geom.faces.push(new THREE.Face3(0, 1, 2));
geom.computeFaceNormals();

var mesh = new THREE.Mesh(geom, penroseTopEndMaterial);
mesh.position.x = 225;
mesh.position.y = 275;
mesh.position.z = 150;
mesh.rotation.z = THREE.Math.degToRad(180);
scene.add(mesh)

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
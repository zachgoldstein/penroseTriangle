// Step 3 - Add more shapes to build our penrose triangle
// - Add more boxes
// - Add a top plane
// - Add a triangular plane

let scene = new THREE.Scene();
let camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000);
camera.position.set(500, 500, 500)
camera.lookAt(scene.position);

// Add our renderer
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement);

let material = new THREE.MeshLambertMaterial({ color: "lightgrey", flatShading: true })

let bottomBox = new THREE.BoxGeometry(50, 50, 300)
let bottomMesh = new THREE.Mesh(bottomBox, material)
scene.add(bottomMesh)

let upBox = new THREE.BoxGeometry(50, 300, 50)
let upMesh = new THREE.Mesh(upBox, material)
upMesh.position.set(0, 125, 125)
scene.add(upMesh)

let topBox = new THREE.BoxGeometry(150, 50, 50)
let topMesh = new THREE.Mesh(topBox, material)
topMesh.position.set(100, 250, 125)
scene.add(topMesh)

let topPlane = new THREE.PlaneGeometry(50, 50, 32)
let topPlaneMesh = new THREE.Mesh(topPlane, material)
topPlaneMesh.position.set(200, 275, 125)
topPlaneMesh.rotation.x = THREE.Math.degToRad(-90)
scene.add(topPlaneMesh)

let topTriGeometry = new THREE.Geometry()
topTriGeometry.vertices.push(new THREE.Vector3(0, 0, 0))
topTriGeometry.vertices.push(new THREE.Vector3(50, 0, 0))
topTriGeometry.vertices.push(new THREE.Vector3(50, 50, 0))
topTriGeometry.faces.push(new THREE.Face3(0, 1, 2))
topTriGeometry.computeFaceNormals()

let topTriMesh = new THREE.Mesh(topTriGeometry, material)
topTriMesh.position.set(225, 275, 150)
topTriMesh.rotation.z = THREE.Math.degToRad(180)
scene.add(topTriMesh)

// Add a light!
let light = new THREE.DirectionalLight(0xffffff, 1.8);
light.position.set(60, 100, 20);
scene.add(light);

let render = function () {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();
// Step 4 - Make it move!
// - Combine geometry into one group
// - Animate the group's rotation

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

let upBox = new THREE.BoxGeometry(50, 300, 50)
let upMesh = new THREE.Mesh(upBox, material)
upMesh.position.set(0, 125, 125)

let topBox = new THREE.BoxGeometry(150, 50, 50)
let topMesh = new THREE.Mesh(topBox, material)
topMesh.position.set(100, 250, 125)

let topPlane = new THREE.PlaneGeometry(50, 50, 32)
let topPlaneMesh = new THREE.Mesh(topPlane, material)
topPlaneMesh.position.set(200, 275, 125)
topPlaneMesh.rotation.x = THREE.Math.degToRad(-90)

let topTriGeometry = new THREE.Geometry()
topTriGeometry.vertices.push(new THREE.Vector3(0, 0, 0))
topTriGeometry.vertices.push(new THREE.Vector3(50, 0, 0))
topTriGeometry.vertices.push(new THREE.Vector3(50, 50, 0))
topTriGeometry.faces.push(new THREE.Face3(0, 1, 2))
topTriGeometry.computeFaceNormals()

let topTriMesh = new THREE.Mesh(topTriGeometry, material)
topTriMesh.position.set(225, 275, 150)
topTriMesh.rotation.z = THREE.Math.degToRad(180)

let group = new THREE.Group()
group.add(bottomMesh)
group.add(upMesh)
group.add(topMesh)
group.add(topPlaneMesh)
group.add(topTriMesh)
scene.add(group)

// Animate our group's y rotation
let tl = new TimelineMax({ repeat: -1, repeatDelay: 0.5 });
tl.to(group.rotation, 1, { y: THREE.Math.degToRad(15), ease: Expo.easeOut });
tl.to(group.rotation, 1, { y: THREE.Math.degToRad(0), ease: Expo.easeOut });
scene.add(group)

// Add a light!
let light = new THREE.DirectionalLight(0xffffff, 1.8);
light.position.set(60, 100, 20);
scene.add(light);

let render = function () {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();
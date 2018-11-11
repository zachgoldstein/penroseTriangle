function threejs() {
	this.shapeX = 0.5;
	this.shapeY = 100;
	this.shapeZ = 100;
	this.shapeColor = 0xffffff;
}

threejs.prototype.init = function init() {
	this.scene = new THREE.Scene();
	this.camera();
	this.renderer();
	this.light();
	this.floor();

	this.initShape();

	this.render();
};

threejs.prototype.camera = function camera() {
	this.camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
	this.camera.position.y = 500;
	this.camera.position.z = 500;
	this.camera.position.x = 500;
	this.camera.updateProjectionMatrix();
	this.camera.lookAt(this.scene.position);
};

threejs.prototype.renderer = function renderer() {
	this.renderer = new THREE.WebGLRenderer({antialias: true});
	this.renderer.setSize( window.innerWidth, window.innerHeight );
	this.renderer.setClearColor( 0x202020 , 1 );
	this.renderer.shadowMapEnabled = true;
	this.renderer.shadowMapType = THREE.PCFSoftShadowMap;
	document.body.appendChild(this.renderer.domElement);
};

threejs.prototype.light = function light() {
	var shadowlight = new THREE.DirectionalLight( 0xffffff, 1.8 );
	shadowlight.position.set( 0, 50, 0 );
	shadowlight.castShadow = true;
	shadowlight.shadowDarkness = 0.1;
	this.scene.add(shadowlight);

	var light = new THREE.DirectionalLight( 0xffffff, 1.8 );
	light.position.set( 60, 100, 20 );
	this.scene.add(light);
  
  	var backLight = new THREE.DirectionalLight( 0xffffff, 1 );
	backLight.position.set( -40, 100, 20 );
	this.scene.add(backLight);
};

threejs.prototype.floor = function floor() {
 	var geometry = new THREE.PlaneGeometry( 500, 500, 1, 1 );
	var material = new THREE.MeshBasicMaterial( { color: 0x202020 } );
	this.floor = new THREE.Mesh( geometry, material );
	this.floor.material.side = THREE.DoubleSide;
	this.floor.position.y =-150;
	this.floor.rotation.x = 90*Math.PI/180;
	this.floor.rotation.y = 0;
	this.floor.rotation.z = 0;
	this.floor.doubleSided = true;
    this.floor.receiveShadow = true;
	this.scene.add(this.floor);
};


threejs.prototype.initShape = function initShape() {
	this.myArray = new THREE.Group();
	this.scene.add(this.myArray);

		this.geometry = new THREE.BoxGeometry( 50, 50, 50 );
		this.material = new THREE.MeshLambertMaterial({color : 0xF9F8ED, shading: THREE.FlatShading});
		this.shape = new THREE.Mesh(this.geometry, this.material);
		//this.shape.rotation.y = -Math.PI/4;
		this.shape.castShadow = true;
		this.shape.receiveShadow = false;
		this.myArray.add(this.shape);
		this.tl = new TimelineMax({repeat: -1 ,repeatDelay:0.5});
		this.tl.to(this.shape.scale, 0.5, {x: 2, ease: Expo.easeOut});
		this.tl.to(this.shape.scale, 0.5, {z: 2, ease: Expo.easeOut});
		this.tl.to(this.shape.scale, 1, {y: 2, ease: Elastic.easeOut});
		this.tl.to(this.shape.scale, 0.7, {z: 1,x:1,y:1, ease: Expo.easeOut});
		this.tl.to(this.shape.rotation, 0.7, {y:-Math.PI, ease: Expo.easeOut},"=-0.7");

	

};

threejs.prototype.render = function render() {
	requestAnimationFrame(this.render.bind(this));
	this.renderer.render(this.scene, this.camera);
};

var shape = new threejs();
shape.init();




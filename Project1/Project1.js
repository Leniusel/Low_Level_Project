/*
  Doris Tran
  Low-level Project 1
*/

let scene, camera, renderer, cone, scoop;

//Make an empty waffle cone object
function emptyCone() {
  //stock photo used for project:
  //https://www.pexels.com/photo/six-baked-waffles-and-blueberries-131045/
  var texture = new THREE.TextureLoader().load('waffle.jpg'); 
  var matTextureColor = new THREE.MeshBasicMaterial( {map: texture} );
  var coneDimensions = new THREE.ConeGeometry( 3, 5, 60, 06, true);
      cone = new THREE.Mesh (coneDimensions, matTextureColor);
      cone.applyMatrix(new THREE.Matrix4().makeScale(1, -1, 1));
      scene.add(cone);
  return cone;
}

//Randomize the icecream flavor
function flavor(){
  var choice = Math.floor(Math.random() * 4);

  //prepare text for div
  var say = document.createElement('div');
  say.style.position = 'absolute';

  //stock photo used for project:
  //https://unsplash.com/photos/66IZaW9LIpI
  if (choice == 0)
    {
      var taste = new THREE.TextureLoader().load('vanilla.jpg');  
      var name = 'Classic Vanilla~';
      say.style.color = "black";
    }
  if (choice == 1)
    {
      var taste = new THREE.TextureLoader().load('berry.jpg'); 
      var name = 'Refreshing Berry~';
      say.style.color = "red";
    }
  if (choice == 2)
    {
      var taste = new THREE.TextureLoader().load('choco.jpg');
      var name = 'Rich Chocolate~';
      say.style.color = "brown";
    }
  if (choice == 3)
    {
      var taste = new THREE.TextureLoader().load('bchessecake.jpg');  
      var name = 'Blueberry Cheesecake Blues~';
      say.style.color = "blue";
    }
    say.innerHTML = name;
    say.style.top = 250 + 'px';
    say.style.left = 735 + 'px'; 
    say.style.fontSize = 30 + 'px';
   document.body.appendChild(say);
   var flavor = new THREE.MeshBasicMaterial( {map: taste} );
   return flavor;

}

//Make an icecream scoop object
function spawnScoop(){
  var scoopDimensions = new THREE.SphereBufferGeometry(3, 32, Math.round(32 / 4), 0, Math.PI * 2, 0, Math.PI * 0.5);
  chosenFlavor = flavor();
  var scoop = new THREE.Mesh(scoopDimensions, chosenFlavor);
  var capGeom = new THREE.CircleBufferGeometry(3, 32);
  capGeom.rotateX(Math.PI * 0.5);
  var bottom = new THREE.Mesh(capGeom, chosenFlavor);
  scoop.add(bottom);
  scene.add(scoop);
  scoop.position.x = 0;
  scoop.position.y = 2.5;
  scoop.position.z = 0;

  return scoop;
}



function init(){
  // crete a scene
  scene = new THREE.Scene();

  // camera
  camera = new THREE.PerspectiveCamera(80, window.innerWidth/ window.innerHeight, .01, 1000);
  
  // bluish background color
  scene.background = new THREE.Color( 0xccddff );

  // multiple renderers are available.  WebGL uses GPU when possible
  // anti-aliasing looks good but costs performance

  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);

  // add results of renderer as an HTML DOM object
  document.body.appendChild(renderer.domElement);

  // make an empty icecream Cone object
  icecreamCone = emptyCone();

  // make an random flavor icecream object
  icecream = spawnScoop();

  // place lights to see objects
  scene.add(new THREE.DirectionalLight( 0xffffff, 0.500));
  scene.add(new THREE.AmbientLight( 0xffffff));


  camera.position.set(0, 5, 20);

  renderer.domElement.addEventListener('mousedown', clickMe);
}

//I chose to reload the page since the changing mesh function broke my scene
function clickMe(space) { 
    window.location.reload();
}

//Update
function update(){
  requestAnimationFrame(update);

  // rotate cone
  cone.rotation.y += .01;

  // render the scene
  renderer.render(scene, camera);

} 

//call functions
init();
update();
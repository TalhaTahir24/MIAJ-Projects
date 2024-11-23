// Scene Setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // Black background

// Camera Setup
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer Setup
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Neon Cube Material
const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff00,  // Neon Green
    emissive: 0x00ff00, // Neon effect
    wireframe: true
});

// Cube Geometry
const geometry = new THREE.BoxGeometry();
const cube = new THREE.Mesh(geometry, cubeMaterial);
scene.add(cube);

// Lights
const ambientLight = new THREE.AmbientLight(0x444444); // Soft light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

// Orbit Controls for interactive camera movement
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.maxPolarAngle = Math.PI / 2;

// Resize listener
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube for animation
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Update controls
    controls.update();

    // Render scene
    renderer.render(scene, camera);
}

// Start animation
animate();

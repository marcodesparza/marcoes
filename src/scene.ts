

//crear las variables de control 
let starts:any = 0


// Crear la escena
const scene = new THREE.Scene();

// Crear la cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Crear el renderer
const renderer = new THREE.WebGLRenderer(
    {canvas: document.querySelector('#bg')}
);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Función para generar puntos brillantes aleatoriamente
function createStars() {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 1000; i++) {
        const x = THREE.MathUtils.randFloatSpread(200);
        const y = THREE.MathUtils.randFloatSpread(200);
        const z = THREE.MathUtils.randFloatSpread(200);
        vertices.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });
    const points = new THREE.Points(geometry, material);

    scene.add(points);
}

createStars();

// Añadir luz
const ambientLight = new THREE.AmbientLight(0x404040); // luz tenue
scene.add(ambientLight);

// Función para animar la escena
function animate() {
    requestAnimationFrame(animate);

    // Alejarse continuamente
    if (starts < 10000) {
        camera.position.z += 0.01;
        starts += 1
    }else {
        let test = camera.position.z 
        camera.position.z = test - 0.01
        if (test < -20){
            starts = 0
        }

    }

    
    renderer.render(scene, camera);
}

animate();

// Ajustar el tamaño del renderer al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'

const gui = new GUI()

const canvas = document.querySelector('canvas.webgl')

//scene
const scene = new THREE.Scene()

//testobject

const testbox = new THREE.Mesh(
    new THREE.SphereGeometry(0.5,16,16),
    new THREE.MeshBasicMaterial({color: '#ff0000'})
)
scene.add(testbox)
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
window.addEventListener('resize',()=>{
    //update size
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    //update camera
    camera.aspect = sizes.width/sizes.height
    camera.updateProjectionMatrix()

    //update renderer
    renderer.setSize(sizes.width,sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})
//base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height,1,100)
camera.position.z = 3
scene.add(camera)

//controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width,sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))







//animate
const clock = new THREE.Clock()

const tick = ()=>{
   const elpsedtime = clock.getElapsedTime()

   //update controls
   controls.update()

   //renderer
   renderer.render(scene, camera)

   //call tick function again on the next frame 
   window.requestAnimationFrame(tick)

}
tick();
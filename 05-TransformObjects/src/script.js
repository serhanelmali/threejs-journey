import "./style.css"

import * as THREE from "three"
import { MathUtils } from "three"

// Canvas
const canvas = document.querySelector(".webgl")

// Scene
const scene = new THREE.Scene()

// Objects
const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1
scene.add(group)

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
group.add(cube1)

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cube2.position.x = -2
group.add(cube2)

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
cube3.position.x = 2
group.add(cube3)

// // Position
// // mesh.position.x = 0.7
// // mesh.position.y = -0.6
// // mesh.position.z = 1
// mesh.position.set(0.7, -0.6, 1)

// // Scale
// // mesh.scale.x = 2
// // mesh.scale.y = 0.5
// // mesh.scale.z = 0.5
// mesh.scale.set(2, 0.5, 0.5)

// // Rotation
// mesh.rotation.reorder("YXZ")
// mesh.rotation.y = Math.PI * 0.25
// mesh.rotation.x = Math.PI * 0.25

// Axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

//Sizes
const sizes = {
  width: 800,
  height: 600,
}

const { width, height } = sizes

// Camera
const camera = new THREE.PerspectiveCamera(75, width / height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(width, height)

renderer.render(scene, camera)

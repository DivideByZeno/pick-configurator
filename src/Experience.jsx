import {useState, useEffect} from 'react'
import { Lightformer, SpotLight, PivotControls, Text, Html, ContactShadows, PresentationControls, Float, Center, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { Canvas, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { PointLight } from 'three'


const material = new THREE.MeshMatcapMaterial()
export default function Experience({ currentBodyType, currentMaterial }) {
    
    
    const bodyTypeClassic = useGLTF('./models/bodyTypeClassic.glb')
    const bodyTypeModern = useGLTF('./models/bodyTypeModern.glb')
    const bodyTypeCyber = useGLTF('./models/bodyTypeCyber.glb')
    const bodyTypeEgg = useGLTF('./models/bodyTypeEgg.glb')
    
    const textureLoader = new THREE.TextureLoader()
    
    const { width, height } = useThree((state) => state.viewport)
    const [pickRotation, setPickRotation] = useState([1,1,1])
    
    
    useEffect(() =>
    {
        const matcapTexture = textureLoader.load('./assets/img/matcaps/ED7F04_FCD60E_7E2D04_B73E04-256px.png', () => {
            matcapTexture.encoding = THREE.sRGBEncoding
            matcapTexture.needsUpdate = true
            
            material.matcap = matcapTexture
            material.needsUpdate = true
            console.log(material)
        })
        matcapTexture.encoding = THREE.sRGBEncoding
        matcapTexture.needsUpdate = true

        material.matcap = matcapTexture
        material.needsUpdate = true
        //debugger;
        console.log(bodyTypeClassic.scene)
        
        setPickRotation([Math.PI * 1,Math.PI,Math.PI * 1.25])
    }, [])
    
    useEffect(() =>
    {
        var materialPath = ''
        switch(currentMaterial) {
            case 'gold':
                materialPath = 'E6BF3C_5A4719_977726_FCFC82-256px.png'
                break;
            case 'plasma':
                materialPath = '2E763A_78A0B7_B3D1CF_14F209-256px.png'
                break;
            case 'fire':
                materialPath = 'FBB43F_FBE993_FB552E_FCDD65-256px.png'
                break;
            case 'chrome':
                materialPath = 'C7C7D7_4C4E5A_818393_6C6C74-256px.png'
                break;
            case 'futuristic':
                materialPath = '463F37_ACCFBB_818B78_91A494-256px.png'
                break;
            case 'water':
                materialPath = '1C70C6_09294C_0F3F73_52B3F6-256px.png'
                break;
            default:
                materialPath = '6A3C15_EFC898_D59D59_B38346-256px.png'
                break;
        }
            
        const matcapTexture = textureLoader.load('./assets/img/matcaps/' + materialPath, () => {
            matcapTexture.encoding = THREE.sRGBEncoding
            matcapTexture.needsUpdate = true
            
            material.matcap = matcapTexture
            material.needsUpdate = true
            console.log(material)
        })
        matcapTexture.encoding = THREE.sRGBEncoding
        matcapTexture.needsUpdate = true

        material.matcap = matcapTexture
        material.needsUpdate = true
        
        console.log(currentMaterial)
    }, [currentMaterial])
        
    //setPickRotation([1,1,1])
    
    return (
        <>
            
        <Environment preset="warehouse" rotation={[0,0,0]}/>

        
        <PresentationControls >
        <Float rotationIntensity={.4}>
            <rectAreaLight width={2.5} height={1.65} intensity={65} color={'#ff6900'} rotation={[-0.1, Math.PI, 0]} position={[0, 0.55, -1.15]}/>

            
            <Center top >
            {currentBodyType === 'bodyTypeClassic' &&  <mesh 
                geometry={ bodyTypeClassic.scene.children[0].geometry } 
                material={material}
                scale={[1,1,.01]}
                position={[0,1.4,0]}
                rotation={pickRotation}>
                </mesh>}
                
            {currentBodyType === 'bodyTypeModern' && <mesh 
            geometry={ bodyTypeModern.scene.children[0].geometry } 
            material={material}
            scale={[1,1,.01]}
            position={[0,1.4,0]}
            rotation={pickRotation}>
            </mesh>}
            
            {currentBodyType === 'bodyTypeCyber' && <mesh 
            geometry={ bodyTypeCyber.scene.children[0].geometry } 
            material={material}
            scale={[1,1,.01]}
            position={[0,1.4,0]}
            rotation={pickRotation}>
            </mesh>}
            
            {currentBodyType === 'bodyTypeEgg' && <mesh 
            geometry={ bodyTypeEgg.scene.children[0].geometry } 
            material={material}
            scale={[1.5,1.5,.01]}
            position={[0,1.4,0]}
            rotation={pickRotation}>
            </mesh>}
            </Center>
            
        </Float>
        </PresentationControls>
        
        </>
    )
}
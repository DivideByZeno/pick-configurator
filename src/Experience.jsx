import {useState, useEffect} from 'react'
import { useTexture, Lightformer, SpotLight, PivotControls, Text, Html, ContactShadows, PresentationControls, Float, Center, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { Canvas, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { PointLight } from 'three'


var material = new THREE.MeshMatcapMaterial()
export default function Experience({ currentBodyType, currentMaterial }) {
    
    
    const bodyTypeClassic = useGLTF('./models/bodyTypeClassic.glb')
    const bodyTypeModern = useGLTF('./models/bodyTypeModern.glb')
    const bodyTypeCyber = useGLTF('./models/bodyTypeCyber.glb')
    const bodyTypeEgg = useGLTF('./models/bodyTypeEgg.glb')
    
    const textureLoader = new THREE.TextureLoader()
    
    const { width, height } = useThree((state) => state.viewport)
    const [pickRotation, setPickRotation] = useState([1,1,1])
    
    const getMaterialPath = (currentMaterial) => {
        var materialPath = ''
        switch(currentMaterial) {
            case 'orange':
                materialPath = '6A3C15_EFC898_D59D59_B38346-256px.png'
                break;
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
            case 'wood':
                materialPath = 'wood.jpg'
                break;
            case 'light-wood':
                materialPath = 'light-wood.jpg'
                break;
            case 'sunburst':
                materialPath = 'sunburst.jpg'
                break;
            case 'opal':
                materialPath = 'opal.jpg'
                break;
            case 'granite':
                materialPath = 'granite.jpg'
                break;
            case 'stone':
                materialPath = 'stone.jpg'
                break;
            default:
                materialPath = '6A3C15_EFC898_D59D59_B38346-256px.png'
                break;
        }
        return materialPath;
    }
    
    const loadTexture = () => {
        var materialPath = getMaterialPath(currentMaterial)
            
        const matcapTexture = textureLoader.load('./assets/img/textures/' + materialPath, () => {
            matcapTexture.encoding = THREE.sRGBEncoding
            matcapTexture.needsUpdate = true
            matcapTexture.minFilter = THREE.NearestFilter
            matcapTexture.magFilter = THREE.NearestFilter
            material.map = matcapTexture
            material.matcap = null
            material.needsUpdate = true
        })
        matcapTexture.encoding = THREE.sRGBEncoding
        matcapTexture.needsUpdate = true
        matcapTexture.minFilter = THREE.NearestFilter
        matcapTexture.magFilter = THREE.NearestFilter
        material.map = matcapTexture
        material.matcap = null
        material.needsUpdate = true
    }
    
    const loadMatcap =() => {
        var materialPath = getMaterialPath(currentMaterial)
            
        const matcapTexture = textureLoader.load('./assets/img/matcaps/' + materialPath, () => {
            matcapTexture.encoding = THREE.sRGBEncoding
            matcapTexture.needsUpdate = true
            
            material.map = null;
            material.matcap = matcapTexture
            material.needsUpdate = true
        })
        matcapTexture.encoding = THREE.sRGBEncoding
        matcapTexture.needsUpdate = true
        material.map = null;
        material.matcap = matcapTexture
        material.needsUpdate = true
    }
    
    const isMaterialImage = (selection) => {
        if (selection === 'wood' || selection === 'light-wood' || selection === 'sunburst' 
        || selection === 'opal' || selection === 'granite' || selection === 'stone')
        return true;
        
        return false;
    };
    
    useEffect(() =>
    {
        if (isMaterialImage(currentMaterial)) {
            loadTexture()
        } else {
            loadMatcap()
        }
        //debugger;
        
        setPickRotation([Math.PI * 1,Math.PI,Math.PI * 1.25])
    }, [])
    
    useEffect(() =>
    {
        if (isMaterialImage(currentMaterial)) {
            loadTexture()
        } else {
            loadMatcap()
        }
    }, [currentMaterial])
        
    //setPickRotation([1,1,1])
    
    return (
        <>
            
        <Environment preset="warehouse" rotation={[0,0,0]}/>

        
        <PresentationControls >
        <Float rotationIntensity={.4}>
            <rectAreaLight width={2.5} height={1.65} intensity={65} color={'#ff6900'} rotation={[-0.1, Math.PI, 0]} position={[0, 0.55, -1.15]}/>

            
            <Center top>
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
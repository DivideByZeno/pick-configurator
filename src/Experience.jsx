import {useState, useEffect} from 'react'
import { PivotControls, Text, Html, ContactShadows, PresentationControls, Float, Center, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { Canvas, useThree } from '@react-three/fiber'

export default function Experience({ currentBodyType }) {
    
    
    const bodyTypeClassic = useGLTF('./models/bodyTypeClassic.glb')
    const bodyTypeModern = useGLTF('./models/bodyTypeModern.glb')
    const bodyTypeCyber = useGLTF('./models/bodyTypeCyber.glb')
    const bodyTypeEgg = useGLTF('./models/bodyTypeEgg.glb')
    // var myObject = pick.scene
    
    const { width, height } = useThree((state) => state.viewport)
    
    return (
        <>
        <color args={['green']} attach="background"/>
        
        <Environment background files="./hdrs/artist_workshop_1k.hdr"/>
        
        
            
        {/* <Center bottom position={[(width / 2) - .25, height / 2, 0]}>
        <Float rotationIntensity={.1} speed={1}>
            <Text font="./fonts/MetalMania-Regular.ttf"
    fontSize={ .33 } rotation-y={-0.5} maxWidth={1}>PICK CONFIG</Text>
        </Float>
            </Center> */}

            

        
        <PresentationControls >
        <Float rotationIntensity={.4}>
            <rectAreaLight width={2.5} height={1.65} intensity={65} color={'#ff6900'} rotation={[-0.1, Math.PI, 0]} position={[0, 0.55, -1.15]}/>

            
            {currentBodyType === 'bodyTypeClassic' && <primitive 
                object={ bodyTypeClassic.scene } 
                position={[0,1.4,0]}
                rotation={[Math.PI ,0,0]}>
                </primitive>}
                
            {currentBodyType === 'bodyTypeModern' && <primitive 
            object={ bodyTypeModern.scene } 
            position={[0,1.4,0]}
            rotation={[Math.PI ,0,0]}>
            </primitive>}
            
            {currentBodyType === 'bodyTypeCyber' && <primitive 
            object={ bodyTypeCyber.scene } 
            position={[0,1.4,0]}
            rotation={[Math.PI ,0,0]}>
            </primitive>}
            
            {currentBodyType === 'bodyTypeEgg' && <primitive 
            object={ bodyTypeEgg.scene } 
            position={[0,1.4,0]}
            rotation={[Math.PI ,0,0]}>
            </primitive>}
            
        </Float>
        </PresentationControls>
        
        {/* <Html>
            
    <h1>Overlay</h1>
        </Html> */}
        
        </>
    )
}
import React from 'react'
import { ARCanvas, ARMarker } from '@artcom/react-three-arjs/lib/ar';
import RenderGLTFModel from './RenderGLTFModel';

const ArModel = () => {
    return RenderGLTFModel('data/models/model_corr1.gltf', 1)
}

function ARcomponents() {


    return (
        <div>
            <ARCanvas
                gl={{ antialias: false, powerPreference: "default", physicallyCorrectLights: true }}
                onCameraStreamReady={() => console.log("Camera stream ready")}
                onCameraStreamError={() => console.error("Camera stream error")}
                onCreated={({ gl }) => {
                    gl.setSize(window.innerWidth, window.innerHeight)
                }}>
                <ambientLight />
                <pointLight position={[10, 10, 0]} intensity={10.0} />
                <ARMarker
                    params={{ smooth: true }}
                    type={"pattern"}
                    patternUrl={"data/pattern/patt.hiro"}
                    onMarkerFound={() => {
                        console.log("Marker found")
                    }}>

                    <ArModel />

                </ARMarker>
            </ARCanvas>
        </div>
    )
}

export default ARcomponents
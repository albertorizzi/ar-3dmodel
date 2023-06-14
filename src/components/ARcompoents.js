import React from 'react'
import { ARCanvas, ARMarker } from '@artcom/react-three-arjs/lib/ar';
import RenderGLTFModel from './RenderGLTFModel';

// const ArModel = () => {
//     console.log("ARMOdel")
//     return RenderGLTFModel('data/models-ex/ammonium.gltf', 0.5)
// }

// const ArModel2 = () => {
//     console.log("ARMOdel2")
//     return RenderGLTFModel('data/models-ex/sprout.gltf', 0.5)
// }

const ArModel = () => {
    console.log("ARMOdel")
    return RenderGLTFModel('data/models/linee.gltf', 2)
}

const ArModel2 = () => {
    console.log("ARMOdel2")
    return RenderGLTFModel('data/models/roleggs0098_2.gltf', 2) 
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
                }}
                resize={{ debounce: 500 }}>

                <ambientLight />
                <pointLight position={[10, 10, 0]} intensity={10.0} />


                <ARMarker
                    params={{ smooth: true }}
                    type={"barcode"}
                    //patternUrl={"data/pattern/rolegg.patt"}

                    barcodeValue={0}
                    onMarkerFound={() => {
                        console.log("Marker found")
                    }}>

                    <ArModel />

                </ARMarker>

                <ARMarker
                    params={{ smooth: true }}
                    type={"barcode"}
                    //patternUrl={"data/pattern/rolegg.patt"}

                    barcodeValue={1}
                    onMarkerFound={() => {
                        console.log("Marker found")
                    }}>

                    <ArModel2 />

                </ARMarker>
            </ARCanvas>
        </div>
    )
}

export default ARcomponents
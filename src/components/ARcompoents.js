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
    console.log("ArModel")
    return RenderGLTFModel('data/models/disney_infinity_mr_incredible/scene.gltf', 0.01)
}

const ArModel1 = () => {
    console.log("ArModel1")
    return RenderGLTFModel('data/models/disney_infinity_woody/scene.gltf', 0.02)
}

const ArModel2 = () => {
    console.log("ArModel2")
    return RenderGLTFModel('data/models/disney_infinity_dash/scene.gltf', 0.02)
}

const ArModel3 = () => {
    console.log("ArModel3")
    return RenderGLTFModel('data/models/disney_infinity_jessie/scene.gltf', 0.02)
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
                    barcodeValue={0}
                    onMarkerFound={() => {
                        console.log("Marker found")
                    }}>

                    <ArModel />
                </ARMarker>

                <ARMarker
                    params={{ smooth: true }}
                    type={"barcode"}
                    barcodeValue={1}
                    onMarkerFound={() => {
                        console.log("Marker found")
                    }}>

                    <ArModel1 />
                </ARMarker>

                <ARMarker
                    params={{ smooth: true }}
                    type={"barcode"}
                    barcodeValue={2}
                    onMarkerFound={() => {
                        console.log("Marker found")
                    }}>

                    <ArModel2 />
                </ARMarker>

                <ARMarker
                    params={{ smooth: true }}
                    type={"pattern"}
                    patternUrl={"data/pattern/patt.hiro"}
                    onMarkerFound={() => {
                        console.log("Marker found")
                    }}>

                    <ArModel3 />
                </ARMarker>
            </ARCanvas>
        </div>
    )
}

export default ARcomponents
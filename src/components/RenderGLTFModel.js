import React from 'react'
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

function RenderGLTFModel(gltfURL, scale) {
    // const gltf = useLoader(GLTFLoader, gltfURL);
    // return (
    //     <primitive
    //         scale={scale}
    //         object={gltf.scene} />
    // );

    // const dracoLoader = new DRACOLoader();
    // dracoLoader.setDecoderPath(gltfURL);

    // const gltf = useLoader(GLTFLoader, gltfURL, (loader) => {
    //     loader.setDRACOLoader(dracoLoader);
    // });

    // return (
    //     <primitive
    //         scale={scale}
    //         object={gltf.scene} />
    // )


    // Instantiate a loader
    const loader = new GLTFLoader();

    // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(gltfURL);
    loader.setDRACOLoader(dracoLoader);

     const gltf = useLoader(GLTFLoader, gltfURL, (loader) => {
        loader.setDRACOLoader(dracoLoader);
    });

    return (
        <primitive
            scale={scale}
            object={gltf.scene} />
    )

    // // Load a glTF resource
    // loader.load(
    //     // resource URL
    //     gltfURL,
    //     // called when the resource is loaded
    //     function (gltf) {
    //         console.log(gltf)

    //         return (
    //             <primitive
    //                 scale={scale}
    //                 object={gltf.scene} />
    //         )

    //     },
    //     // called while loading is progressing
    //     function (xhr) {
    //         console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    // //     },
    //     // called when loading has errors
    //     function (error) {
    //         console.log('An error happened');
    //     }
    // );
}

export default RenderGLTFModel
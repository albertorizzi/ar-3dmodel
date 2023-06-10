import { ARCanvas, ARMarker } from '@artcom/react-three-arjs/lib/ar';
import './App.css';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline bg-red-50">
        Hello world! ciao cjsss
      </h1>
      <ARCanvas
        gl={{ antialias: false, powerPreference: "default", physicallyCorrectLights: true }}
        onCameraStreamReady={() => console.log("Camera stream ready")}
        onCameraStreamError={() => console.error("Camera stream error")}
        onCreated={({ gl }) => {
          gl.setSize(window.innerWidth, window.innerHeight)
        }}>
        {/* <ambientLight />
        <pointLight position={[10, 10, 0]} intensity={10.0} /> */}
        <ARMarker
          params={{ smooth: true }}
          type={"pattern"}
          patternUrl={"data/patt.hiro"}
          onMarkerFound={() => {
            console.log("Marker Found")
          }}>

        </ARMarker>
      </ARCanvas>
    </div>

  );
}

export default App;

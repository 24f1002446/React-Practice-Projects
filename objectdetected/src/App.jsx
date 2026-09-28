import Webcam from "react-webcam";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";

let interval;

const App = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [detectionMap,setDetectionMap]= useState({});

  useEffect(() => {
    startPredictions();
    return() =>{
      if(interval){
        clearInterval(interval);
      }
    }
  }, []);

  const startPredictions = async () => {
    const model = await cocoSsd.load();
    setLoading(false);



    interval=setInterval(() => { detect(model); }, 100);//every one second functn execute


  };
  const detect = async (model) => {
    if (webcamRef && webcamRef.current && webcamRef.current.video) {
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;


      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;


      const predictions = await model.detect(video);

      const ctx = canvasRef.current.getContext("2d");
      //draw the mesh
      drawMesh(predictions,ctx);
    }
  };
  const drawMesh = (predictions, ctx) => { 
    predictions.forEach((prediction)=>{
      const [x,y,width,height] = prediction.bbox;
      const text = prediction.class;
      handleDetectionMap(text);
      ctx.strokeStyle = "red";//style for border
      ctx.font = "18px Arial";//style

      ctx.fillStyle="red";//font color
      ctx.fillText(text,x,y);//value and cordinates where to render the text
      ctx.rect(x,y,width,height);//boundary for rectangle
      ctx.stroke();
      console.log(prediction);
    });
  };

  const handleDetectionMap=(detection)=>{
    let obj = { ...(detectionMap ||{})};
    if(detectionMap?.[detection]){
      //increase the count
      obj[detection]++;
    }else{
      obj[detection]=1;
    }
    setDetectionMap(obj);

    //check
    if(obj?.['person']>1){
      alert("AnotherPerson detected");
    }
    // console.log("text:", detection)
    if(detection==="cell phone"){
      alert("cell phone detected");
    }
  }
  return (
    <div className="parentContainer">
      <h1 className="appTitle">Real-Time Object Detection</h1>
      {loading ? <span>Loading Model ...</span> : ""}
      <div className="videoWrapper">
        <Webcam ref={webcamRef} />
        <canvas ref={canvasRef} />
      </div>

    </div>
  )
};
export default App;
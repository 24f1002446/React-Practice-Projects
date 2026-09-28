# Real-Time Object Detection using React

A simple real-time object detection web application built with React and TensorFlow.js.

The application uses the device webcam to capture live video and the COCO-SSD model to detect objects directly in the browser. Detected objects are highlighted with bounding boxes and their class names are displayed on the video.

The project also includes basic detection-based alerts for detecting multiple people and cell phones.



## Features

- Real-time object detection using the webcam
- Object detection directly in the browser
- Uses the COCO-SSD pre-trained model
- Displays bounding boxes around detected objects
- Displays the detected object's class name
- Detects multiple objects in the camera frame
- Alerts when more than one person is detected
- Alerts when a cell phone is detected
- Canvas overlay for drawing detection results
- Automatic model loading before detection starts
- Detection interval cleanup when the component is unmounted
- Simple and responsive user interface



## Technologies Used

- React
- JavaScript
- TensorFlow.js
- COCO-SSD
- React Webcam
- HTML5 Canvas
- CSS



## How the Project Works

The application follows a simple detection flow:

1. The React application starts.
2. The webcam component provides access to the camera.
3. The COCO-SSD model is loaded using TensorFlow.js.
4. Once the model is loaded, real-time detection starts.
5. The webcam video is passed to the object detection model.
6. The model returns detected objects and their bounding boxes.
7. The application draws the bounding boxes on a canvas.
8. The detected object name is displayed above the bounding box.
9. Additional checks are performed for specific objects such as `person` and `cell phone`.


 How to Test
After starting the application:

Test 1: Person Detection
Allow camera access.
Stand in front of the camera.
The model should detect the person.
A bounding box should appear.
The label person should be displayed.
Test 2: Cell Phone Detection
Keep a cell phone visible in front of the camera.
Wait for the model to detect it.
A bounding box should appear.
The application will trigger the cell phone alert.
Test 3: Multiple People
Place more than one person in the camera view.
The model can detect multiple person objects.
The detection map updates the person count.
The multiple-person alert can be triggered.


Author
Raushan Kumar

Built as a learning project to explore React, TensorFlow.js, webcam integration, and real-time object detection.
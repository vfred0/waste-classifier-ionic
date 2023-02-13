# Waste classifier
Waste classifier system using convolutional neural networks. 

## Dataset
The following [kaggle dataset](https://www.kaggle.com/datasets/mostafaabla/garbage-classification) was used for training the models.


## Models
The following pre-trained models have been used: 
- MobileNetV3
- VGG19
- Xception

## Requirements
- ionic 6
- Angular 15

## Usage
- Clone the repository
- Install dependencies
```bash
npm install
```
- Run the application
```bash
ionic serve
```
- Optionally, you can build the application for android
```bash
ionic capacitor build android
```
- Build apk with gradle
```bash
cd android
./gradlew assembleDebug
```
- Apk location
```bash 
android/app/build/outputs/apk/debug/app-debug.apk
```
## Done
- [x] Home page
- [x] Modal for details of category

https://user-images.githubusercontent.com/86375181/218521382-f9676e95-3ef1-466d-ba21-821593491e35.mp4  

## Working
- Page of scan and importing models with tensorflow.js

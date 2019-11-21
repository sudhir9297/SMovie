# SMovie
A movie app UI built using React native.Its fetching the Data from TheMovieDb API.

<p align="center">
 <img  src="https://user-images.githubusercontent.com/19578447/69011816-89354180-0994-11ea-92fb-7abafcca0d97.png" width="200">
 <img  src="https://user-images.githubusercontent.com/19578447/69011818-89cdd800-0994-11ea-8fb5-2da6464ac099.png" width="200">
 <img  src="https://user-images.githubusercontent.com/19578447/69011817-89354180-0994-11ea-86da-3e15ef129604.png" width="200">
</p> 

### Functionality this App Includes are
- Automatic Fetching based on Trending, popular, upcoming etc
- Searching based on Keyword
- Details about the movie

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
Make Sure you Have the following things Installed on your Machines.

- Node.js
- expo cli

#### make sure to install below Dependencies

- `npm install --save react-navigation ` for navigation between Screens
- `npm install --save react-navigation-stack` Stacking the List for navigation
- `npm install --save react-native-side-menu` side Menu also known as Drawer if you want you can use ReactNative Drawer
- `npm install --save react-native-gesture-handler@^1.3.0` Specific version why you asked? coz the latest wasn't compatible 
- `npm install --save react-native-stars ` to show Rating of element
- `npm install --save react-native-vector-icons` for Icons used such as search or Menu 
- `npm install --save expo-linear-gradient ` a Linear gradient I used at Title of movie in Detailpage.

## Running the App
### Open the Terminal and make sure you are in Right Directory and execute below code.
  > npm start
  
 this will start a web page containing the QR code and other Useful stuff for debugging.
 now just open the expo app in your ios or Android and login .....the Scan the QR code opened on your Web browser.

Enjoy!

#### Stuff you can do to improve
- as images we're fetching are high resolution you can pass through the imageResizer reactnative plugin 
- Lock orientation to portrait mode
- add Video Player to play trailer of the movie and lock its orientation to default

As Expo have its own Limitation Regarding certain dependencies for Video and Orientation copy this code and build using react-native-cli  





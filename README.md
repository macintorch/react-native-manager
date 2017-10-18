1. install npm
npm install

2. install react-redux
$ npm install --save react-redux redux

3. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable.

$ export ANDROID_HOME=/Users/ainorsyahrizal/Library/Android/sdk

4. install firebase
$ npm install --save firebase

5. It’s a good idea to use react-native-dotenv so you’re not pushing your live api keys for the world to see. It’s super easy to setup, just create a .env file, add it to your .gitignore file, stick all your env vars in there and import them in where ever you need them.

https://github.com/zetachang/react-native-dotenv

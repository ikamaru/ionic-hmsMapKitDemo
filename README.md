# ionic-hmsMapKitDemo
An Ionic 3 demo that uses the [cordova-hms-map-kit](https://github.com/ikamaru/cordova-hms-map-kit)

## Getting Started
Add the android platform to your project
```
ionic cordova platform add android
```
Build the APK release according to the build configuration file **build.json**
```
ionic cordova build android --buildConfig=build.json --release
```
Plug your android phone into the computer's USB port and install the apk
```
adb install "platforms\android\app\build\outputs\apk\release\app-release.apk"
```

## Notes
If you want to use the [cordova-hms-map-kit](https://github.com/ikamaru/cordova-hms-map-kit) in your ionic project, you must :
 
* Generate a keystore file 
```
keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
```
* Change the keystore info here **build.json**
* Sign in to [HUAWEI Developer](https://developer.huawei.com/consumer/en/console) then create a new app in HUAWEI AppGallery > My Apps.
* Run the following keytool command and obtain the SHA-256 fingerprint from the result
```
keytool -list -v -keystore my-release-key.keystore
```
* In AppGallery Connect, click the app that you have created and go to Develop -> Overview -> App information , then Insert the SHA-256 
* Download the **agconnect-services.json** file and put it in the root directory of your ionic project
* Add the plugin to your project
```
ionic cordova plugin add https://github.com/ikamaru/cordova-hms-map-kit
```
* Check [the plugin's doc](https://github.com/ikamaru/cordova-hms-map-kit#readme) or this demo and enjoy your coding
* Don't forget to build the ionic project using the same keystore file you generated for the AppGallery connect
```
ionic cordova build android --buildConfig=build.json --release
```

These steps are base on these [Preparations for Integrating HUAWEI HMS Core](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#0) (I tried to choose what we will need in our ionic project and automate the other steps inside the plugin)

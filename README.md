# codeceptjs-native-POC
This project is a proof of concept implementation of using codeceptJS for testing native apps on android and iOS using Appium.

CodeceptJS (https://codecept.io/) is a platform agnostic testing framework that can automate testing against web, hybrid, and mobile apps.
It can execute tests against simulators, against real devices, and through cloud based device providers such as SauceLabs, Browserstack, and Perfecto.

**Note:** This project is specifically intended to enable both iOS and Android native applications.  As such, the install instructions from this point forward are Mac specific, since a Mac is required in order to test the iOS apps.

## **Getting Started**

### **Install Homebrew**

Before installing, you need to have node installed on your system.  For macs, this can be most easily accomplished using homebrew.  If you don't have homebrew installed on your system, you may do so by pasting this into terminal:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### **Install Node and NPM**

Once you have installed brew, you can install node.  To do so, make sure brew is updated to the latest by typing the following command in terminal:

```
brew update
```

Then type the following into terminal in order to install node:

```
brew install node
```

When the process completes, you can test node and NPM by typing the following commands into terminal:

```
node -v
```
```
npm -v
```

Having done this, you should see version strings for each in response to the command entered.

### **Install Java**

This project requires java.  You will need to install the JDK by downloading it from https://www.oracle.com/java/technologies/javase-downloads.html. It is a good idea for you to use the latest version for your platform.  Note that to make this easier, it is a good idea on macs to download the .dmg instead of the .gz archive.

Once you have downloaded the JDK, you can install it on a mac by double-clicking the .dmg and then following the prompts.

### **Install Xcode**

To test iOS apps using this project, you will need to install Xcode on your mac.  You may do so through the Apple App Store.  You may skip this step if you don't wish to test iOS applications.

### **Install Android Studio**

The test Android apps, you will need to install Android Studio.  You may do so by downloading the proper version for your machine from https://developer.android.com/studio, and then following the installation instructions available at https://developer.android.com/studio/install.

You will also want to create an android emulator device using Android Studio's AVD manager.  To do so, launch 

### **Install Appium**

In order to use codeceptJS to test mobile apps, you will need appium. Appium is a nodeJS based automation server which will orchestrate the execution of tests against native applications running on simulators, physical devices, and physical devices in the cloud.


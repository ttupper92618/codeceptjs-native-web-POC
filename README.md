# **codeceptjs-native-POC**
This project is a proof of concept implementation of using codeceptJS for performing functional (UI) testing of native apps on android and iOS using Appium.

CodeceptJS (https://codecept.io/) is a platform agnostic testing framework that can automate testing against web apps, hybrid apps, and native mobile apps. It can also execute tests against simulators, real devices, and via cloud based device providers such as SauceLabs, Browserstack, and Perfecto.  

The syntax of tests for codeceptJS is extremely simple and approachable, and is consistent across testing targets, e.g. the same test syntax is used to test everything from web to native apps, which means that a person learning to write tests for one platform can easily transport their skills for testing against another.

**Note:** This project is specifically intended to enable both **iOS** and **Android** native applications.  As such, the install instructions from this point forward are Mac specific, since a Mac is required in order to test the iOS apps.

## **Things this Project Does**

This project provides a number of features, including the following:

- Android native app testing
- iOS native app testing
- Reporting via XML
- Reporting via HTML
- Reporting via JSON
- Reporting integration with the Allure reporting dashboard
- Visual testing (comparing views at run-time with a baseline image representing design)
- Automatic screen-shots on failed tests
- Simple JS based tests with an approachable syntax
- BDD style testing via Cucumber and Gherkin features
- Universal features; one set of BDD features to drive testing across both Android and iOS
- Universal step definitions; 'one and done' feature steps that can execute against android or iOS

## **Getting Started**

### **Nerd Note**

This readme is written with n00bs in mind.  As a result, it exhaustively covers setup including all necessary dependencies.  It assumes zero preparation, so includes steps for doing things like:

- Installing homebrew
- Installing node and npm
- Installing java
- Installing xcode
- Installing and setting up Android Studio
- Installing appium
- Setting environment variables

Feel free to skip any steps you have already satisfied, but please recognize that unless all of them are satisfied, this project will not successfully execute tests.

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

To test Android apps, you will need to install Android Studio.  You may do so by downloading the proper version for your machine from https://developer.android.com/studio, and then following the installation instructions available at https://developer.android.com/studio/install.

### **Create an Android Virtual Device**

In order to run tests on Android, you will want to create an android emulator device using Android Studio's AVD manager.  To do so, launch Android Studio and then click the '**New Project**' button:

![](./assets/android_studio_new_project.png?raw=true "Title")

**Note** that you are only creating this project so that you may gain access to the AVD manager; you may choose any type for phone and tablet, as follows:

![](./assets/android_studio_new_project_2.png?raw=true "Title")

Once you have created your new project, it will open, giving you access to define a new AVD.  To do so, select '**Tools > AVD Manager**' from the tools menu as seen below:

![](./assets/launch_AVD_manager.png?raw=true "Title")

This will launch the AVD manager, allowing you to create a new Android Emulator.  To do so, click the '**Create Virtual Device**' button, then select '**Phone**' and '**Pixel 5**' on the following screen, as seen below.  After making these selections, click '**Next**.'

![](./assets/define_AVD_1.png?raw=true "Title")

After clicking '**Next**', you should see a screen allowing you to set the OS version that will be installed on the virtual device.  **IMPORTANT**: You must select '**Pie**', which has an API level of '**28**', as seen below.  **Note** that if you have never created an AVD, you may need to download the specific SDK to your computer.  To do so, click the '**Download**' button immediately to the right of '**Pie**.'  Then click '**next**.'

![](./assets/define_AVD_2.png?raw=true "Title")

After clicking '**Next**' on the previous screen, you should see a screen allowing you to set the name of the AVD you are creating, as seen below.  **IMPORTANT**: you **must** name your AVD '**Pixel 5 API 28**.'  This is because the configurations in this project are somewhat limited, and do not provide the ability to choose different devices at run-time.  That capability will be added at a later time.  The point is that the device must be named this way because that is what the configuration expects.  If you choose a different name, these tests **will not work.**  Once you have provided the name, click '**Next**.'

![](./assets/define_AVD_3.png?raw=true "Title")

Now that you have defined an AVD, you should see it in the AVD manager's list of existing AVDs, as seen below.  If you wish, you may launch the AVD by clicking the green play icon (a rightward facing triangle) near the right side of the list entry for a given AVD.

![](./assets/define_AVD_4.png?raw=true "Title")

### **Install Appium Doctor & Appium**

In order to use codeceptJS to test mobile apps, you will need appium. Appium is a nodeJS based automation server which will orchestrate the execution of tests against native applications running on simulators, physical devices, and physical devices in the cloud.  To install it, enter the following commands at a mac terminal prompt:

```
npm i -g appium-doctor
```
```
npm i -g appium
```

This will install appium-doctor and Appium.  **Note** that appium doctor is a utility that can be used to verify your Appium installation.  Once you have completed the rest of the steps in this guide, run it from terminal by typing the following at the prompt:

```
appium-doctor
```

**Note** that it is a good idea to install the Appium desktop app if you will be needing to identify element selectors (the selectors utilized to target specific elements in the UI) by inspecting an app directly (see the section '**Using Appium Viewer** later in this guide).  You can do so by downloading the installer at https://appium.io/, and following the installation instructions.

### **Install Allure**

Allure is an open source reporting framework that can produce beautiful, detailed reports.  This project requires you to install allure, and you may do so by entering the following into terminal:

```
npm install -g allure-commandline --save-dev
```

### **Set Environment Variables**

You must set the JAVA_HOME, ANDROID_HOME, and ANDROID_SDK_ROOT environment variables, otherwise tests will not run.  You may do so by entering the following in terminal:

```
open ~/.bash_profile
```

This will open your bash profile using Textedit, and from there you can add the following to your profile:

```
export JAVA_HOME=/Library/Java/JavaVirtualMachines/<your installed JDK version>/Contents/Home

echo JAVA_HOME=$JAVA_HOME

export ANDROID_HOME=/Users/<your user name>/Library/Android/sdk

export ANDROID_SDK_ROOT=/Users/<your user name>/Library/Android/sdk
```

**Note** that you should replace the java SDK version in JAVA_HOME with whatever version you downloaded, and you should specify your username in the ANDROID_HOME and ANDROID_SDK_ROOT strings.  For example, I have specified '**jdk1.8.0_301.jdk**' for the JDK version, and '**thomastupper**' for the user name, since these are what these values are on my machine.  You will need to adjust these based on whatever is correct for your machine.

Once you have entered the required values into your bash profile via Textedit, save the file and close it, then enter the following command into terminal:

```
source ~/.bash_profile
```

This will reload your profile.  You can verify a successful update by typing the following in terminal:

```
echo $JAVA_HOME
```

Having done so, you should see whatever it is that you entered for JAVA_HOME displayed in terminal.

### **Clone the Repo**

Having completed all of the foregoing steps, it is time to clone the repo.  To do so, type the following in terminal:

```
git clone https://github.com/ttupper92618/codeceptjs-native-POC.git
```

**Note** that you should only do this from the location where you want this project to be installed.  

### **Install Dependencies**

This project has a number of dependencies.  You must install these before you can execute tests.  To do so, first CD into the cloned repo:

```
cd codeceptjs-native-POC
```

Then execute the following:

```
npm i
```

### Sanity Check

Now that you have finished all the requisite configuration, run appium-doctor to see if your installation is correct.  Correct any errors that appium doctor reveals; you do not need to correct the warnings.

```
appium-doctor
```

### Running Appium

Before you can execute tests, you need to run Appium.  You may do so either by typing the following from terminal:

```
appium
```

Or by opening the desktop application and cliking the '**Start Server v...**' button from the desktop app:

![](./assets/appium_mac.png?raw=true "Title")

### **Executing Tests**

If you have successfully executed all of the previous steps, you should now be able to execute tests.  At this time, this project does not support executing Android and iOS tests in parallel.  Instead, you must execute for one or the other using one of these commands in terminal:

For iOS:
```
npm run ios
```

For Android:
```
npm run android
```

Note that you must execute these from within the '**codeceptjs-native-POC**' directory.

If you watch your screen, having executed one of the above commands, you should be able to see the iOS or Android simulator spin up, and you should be able to watch the tests execute in real time.  When the tests complete running, you should see an execution summary in your terminal:

![](./assets/execution_summary.png?raw=true "Title")

### **Reporting**

One of codeceptJS's numerous capabilities is the ability to do flexible reporting.  One of these reporting mechanisms is integration with Allure, an open source reporting dashboard that provided graphical, easy to use reports.  To view reports using allure, execute the following from your terminal:

```
allure serve output
```

Having done so, you should see allure open in your default web browser, as seen below.  Feel free to navigate around Allure's section - there are too many great features to cover here.

![](./assets/allure.png?raw=true "Title")

In addition to allure, this project will also produce XML reports for each test case, and also produces an HTML report.  The XML reports are located in the '**output**' directory within the project, and the HTML report (see example below) can be found in the '**mochawesome-report**' directory.

![](./assets/mochawesome_report.png?raw=true "Title")

### **Visual Testing**

This project enables visual testing through resemble.js.  Resemble.js is an image comparison tool that can compare two images and produce a diff image that highlights the differences between the two images. It can be configured to ignore differences under a given threshold, and when tests fail, the base, capture, and diff images are provided through this project's reporting processes.  You can include visual testing in any test case simply by taking a screen capture and then comparing it to a base image, like so:

```
I.saveScreenshot('login_view.png');
I.seeVisualDiff('login_view.png', {tolerance: 0});
```

To see how this works, one of the sample tests in this project will intentionally fail.  Based on the following base image, it will capture the login view, and produce a diff as seen below:

| Base Image            | Screen Capture        | Diff                  |
| --------------------- | --------------------- | --------------------- |
| <img src="./assets/design_base.png" width="250"/> | <img src="./assets/design_capture.png" width="250"/> | <img src="./assets/design_diff.png" width="250"/> |

Notice how the diff image highlights (in magenta) the areas that differ between the base and capture images.

## **Roadmap**

This POC will be extended in the following manner some time soon:

- Integration with ReportPortal.io, an open source containerized report aggregator allowing report aggregation from test runs across different platforms, e.g. web, ios native, android native, and so on.

- Multi-target execution; being able to run tests against multiple devices and platforms at the same time.

- Better abstraction of run strings, allowing test runs to be made flexibly with different features enabled / disabled.

- Expanded visual testing support.

- Better set-up and tear-down handling.

## **Known Issues**

- This project executes tests against android applications using uiautomator, the native ui automation tool provided by Google.  The appium community variant (uiautomator2) will not work with this project.

- Visual testing does not properly handle differences between devices or device platforms, which makes the the implementation more restrictive and brittle than desired.
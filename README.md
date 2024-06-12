# Pokemon
Pokemon app created from scratch using React Native. Version 0.74 used at this time of writing.

README file to set up React Native project with Redux


To set up a new React Native project with Redux, you need to do the following:

1) Open up the Command Prompt on your Windows. This can be done by clicking on the Windows System folder from the Start
button on the lower left (the icon), then clicking on Command Prompt. 


2) Select the directory where you wish to put the new React Native project. Ideally, this would be under C:\Users\Patrick for example. 
This will be your project's root directory.
   

3) If node.js is not yet installed, you will need to install node alongside the command prompt, JDK (Java Development Kit) and Android Studio.
To install, you can go to nodejs.org and download the latest version (currently v20.14.0). 
JDK also needs to be installed separately as well from here: https://www.oracle.com/java/technologies/downloads/#jdk17-windows

Another way is to install node.js through Chocolatey by typing this command prompt: 
     >choco install -y nodejs-lts microsoft-openjdk17

This will allow you to also install JDK alongside node as well.
*please note: make sure the Gradle versions match so the JDK versions can be recognized if your are using the latest version of JDK which is JDK17*


4) The next step is to set up the Android developer enviornment. Make sure Android Studio is downloaded and installed 
from here: https://developer.android.com/studio

The items Android SDK, Android SDK platform and Android Studio all need to be checked. Then click on next.

a: Install Android SDK (latest default is installed).
b. Configure the ANDROID_HOME enviornment variable by opening Windows Control Panel, then User Accounts, then User Accounts, 
then Change My Enviornment Variables. Then click on New to create a new ANDROID_HOME variable.

The SDK by default will be in the local project directory, e.g. : C:\Users\Patrick\AppData\Local\Android\Sdk

Open a new command prompt and make sure new enviornment variable is loaded.
a. Open the powershell
b. Copy and paste Get-ChildItem-Path Env:\ to powershell
c. Check to see if VERIFY_HOME is added.

Then, platform tools need to be added to path:
a. Open Windows control panel, then click on User Accounts, then User Accounts again, then click Change my enviornment variables. Then select 
the path variable, click edit, then click new and add path to platform-tools to the list.

The default location is in the local project directory, e.g. : C:\Users\Patrick\Android\Sdk\platform-tools


5) You then need to create a new React Native application. This can be done by typing the following command prompt:
>npx react-native@latest init Pokemon
*NOTE: if you installed a react-native-cli before, please uninstall 
  >npm uninstall -g react-native-cli @react-native-community/cli
before typing the npx prompt.

**6) Since you will be creating a multi-screen app, you will also need to add a React Native navigation extension. You can install the
React Navigation package by typing in the following commands:
	>npm install @react-navigation/native @react-navigation/native-stack

In addition, React Navigation dependencies also need to be added. Type in the following commands:
	>npm install react-native-screens react-native-safe-area-context

And, for iOS, CocoaPods need to be installed, so type in the following commands:
	>cd iOS
	>pod install
	>cd ..

**Please note, there may be warnings displayed because of version mismatches. These warnings can be ignored as long as it can build.**

In the App.tsx file, React Navigator tags need to be added. Make sure you first import both NavigationContainer and createNativeStackNavigator from 
React Navigation by typing in the following at the top of the app.tsx file:

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from 'react-navigation/native-stack'

and adding in the NavigationContainer tags in the App() parent function component:

function App() {
..
	<NavigationContainer>

	</NavigationContainer>
..
}

For more details, please look at the React Navigator library for more information.


7) You then need to install Redux and its dependencies. This can be done by typing this command prompt:
>npm install redux react-redux


8) Redux store needs to be defined. A new directory called store needs to be created for React Store on project's root directory. 
On that directory, create a new file called index.js
All there Redux store will start from here. Make sure you type in the following:

import {createStore} from 'redux';

const initialState = {
  //
};

const reducer = (state = initialState, action) => {
  //
};

const store = createStore(reducer);

initialState is where the initial state properties will be. reducer is where the states are handled and updated. createStore is where 
Redux store is created.

9) Redux then needs to be created to the React Native app. Open App.tsx and import the modules by typing in the following:

import {Provider} from 'react-redux;
import store from './store';

The root component needs to be wrapped with the Provider component. This can be done by typing this to pass the Redux store as a prop:

const App = () => {
    return (
       <Provider store={store}>
       //
       </Provider>
    );
};

Between the Provider tags, type in the root component. 


10) You then need to create actions, which are the info needed to send data from the app to the Redux store. Action types need 
to be defined to their corresponding action creators in order to create actions. A new file needs to created called actions.js in the 
store directory.Type in the following:

export const ACTION_TYPE = 'ACTION_TYPE';
        
export const actionCreator = (payload) => {
     return {
        type: ACTION_TYPE,
        payload,
     };
};

***The components created in the app files in the Pokemon directory will need these modules, so type these in for each file that uses Redux actions:

import {useDispatch} from 'react-redux';
import {actionCreator} from './store/actions';

const dispatch = useDispatch();
dispatch(actionCreator(payload)); 
 

An instance is created for the dispatch function. The action creator is then called to dispatch an action. 


11) The components then need to be connected to Redux. Import the module and add the hook:

import {useSelector} from 'react-redux';

const myState = useSelector((state)=> state.myState);

The useSelector hook is written in the React Native component to retrieve the intended state.

Please note, since this was a simple three-screen React Native app, there was no need to use Redux. This is only used
when you have more screens and tracking state changes using reducer is needed once the app is more complex with a structured state tree. 
In smaller apps, React Context API (createContext in this case for global variables. No need for props drilling!) 
or the useReducer hook can suffice in managing states. When I coded this out, I considered code quality and this made the code simpler and 
easier to understand by the other coders so that it is highly flexible when changes to the code are needed.


And there you have it, React Native and Redux are installed with your React Native project! You have the template now.
Happy coding! =)


To run for Android, have an Android emulator running or a device connected.
Then type on the command prompt >C:\Users\Patrick\Pokemon && npx react-native run-android   

-pl

import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "./src/navigations/root/RootNavigator";
import "react-native-gesture-handler"
import {GestureHandlerRootView} from "react-native-gesture-handler";

function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;

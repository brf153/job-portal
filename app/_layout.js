import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync()

const Layout=()=>{

    const [fontsLoaded,error] = useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf")
})

if (error) {
    // Handle font loading error, e.g., log the error or take appropriate action.
    console.error("Error loading fonts:", error);
  }

const onLayoutRootView = useCallback(async ()=>{
    if(fontsLoaded){
        await SplashScreen.hideAsync()
    }
},[fontsLoaded])

if(!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView} />
}

export default Layout;
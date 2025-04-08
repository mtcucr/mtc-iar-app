import { Stack } from "expo-router"

import "./global.css"
import { SafeAreaView } from "react-native-safe-area-context";
import {
    useFonts,
    Cabin_400Regular,
    Cabin_500Medium,
    Cabin_600SemiBold,
    Cabin_700Bold
  } from "@expo-google-fonts/cabin";

const RootLayout = () => {
    const [fontsLoaded] = useFonts({
        Cabin_400Regular,
        Cabin_500Medium,
        Cabin_600SemiBold,
        Cabin_700Bold
    })
    return <Stack />
}

export default RootLayout;
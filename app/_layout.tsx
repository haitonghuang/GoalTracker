import {
	DarkTheme as NavigationDarkTheme,
	DefaultTheme as NavigationDefaultTheme,
	Theme,
	ThemeProvider,
	NavigationContainer,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import {
	MD3DarkTheme,
	MD3LightTheme,
	PaperProvider,
	adaptNavigationTheme,
} from "react-native-paper";
import { Colors } from "../constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import merge from "deepmerge";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const customLightTheme = { ...MD3LightTheme, colors: Colors.light };
const customDarkTheme = { ...MD3DarkTheme, colors: Colors.dark };

const { LightTheme, DarkTheme } = adaptNavigationTheme({
	reactNavigationLight: NavigationDefaultTheme,
	reactNavigationDark: NavigationDarkTheme,
});
const CombinedDarkTheme = merge(DarkTheme, customDarkTheme);
const CombinedLightTheme = merge(LightTheme, customLightTheme); //erge React Native Paper Theme and Expo Router Theme

// using deepmerge

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const paperTheme =
		colorScheme === "dark" ? CombinedDarkTheme : CombinedLightTheme;

	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<PaperProvider theme={CombinedLightTheme}>
			<ThemeProvider value={CombinedLightTheme as unknown as Theme}>
				<Stack>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
					{/* <Stack.Screen name="+not-found" /> */}
				</Stack>
			</ThemeProvider>
			{/* <StatusBar style="auto" /> */}
		</PaperProvider>
	);
}

import { Image, StyleSheet, Platform, View, ScrollView } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
// import { ThemedText } from "@/components/ThemedText";
// import { ThemedView } from "@/components/ThemedView";

import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import GoalCard from "@/components/GoalCard";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<ScrollView>
					<View>
						<GoalCard
							targetName="Pass JPLT N5 in 6 months"
							progress={0.5}
							dueDate="2025/06/23"
							progressPercentage="50%"
							goalStatus="in-progress"
							category="Education"
						/>
					</View>
				</ScrollView>
			</SafeAreaView>
			{/* <Button
				icon="camera"
				mode="contained"
				onPress={() => console.log("Pressed")}
			>
				Press me
			</Button> */}
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
});

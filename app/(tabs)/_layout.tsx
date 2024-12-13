import { router, Tabs } from "expo-router";
import React from "react";
import { Platform, TouchableOpacity, StyleSheet } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Icon } from "react-native-paper";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	const onPress = () => {
		return router.push("./goal-builder");
	};
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: "#CEB2B7" }}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => (
						<Icon size={20} source="home" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="calendar"
				options={{
					title: "Calendar",
					tabBarIcon: ({ color }) => (
						<Icon size={20} source="calendar-minus" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="goal-builder"
				options={{
					title: "New Goal",
					tabBarButton: (props) => (
						<TouchableOpacity
							activeOpacity={1}
							onPress={onPress}
							style={{
								backgroundColor: "#CEB2B7",
								borderRadius: 100,
								// padding: 10,
								width: 80,
								height: 80,

								justifyContent: "center",
								alignItems: "center",
								top: -30,
								left: 5,
							}}
						>
							<Icon source="plus" size={40} />
						</TouchableOpacity>
					),
				}}
			/>
			<Tabs.Screen
				name="insight"
				options={{
					title: "Insight",
					tabBarIcon: ({ color }) => (
						<Icon source="google-analytics" size={20} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					tabBarIcon: ({ color }) => (
						<Icon source="account-settings" size={20} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
const styles = StyleSheet.create({
	button: {
		top: -22.5,
		justifyContent: "center",
		alignItems: "center",
		width: 50,
		height: 50,
		borderRadius: 27,
		backgroundColor: "#E94F37",
	},
});

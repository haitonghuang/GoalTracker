import BigGoalForm from "@/components/BigGoalForm";
import React from "react";
import { View, Text } from "react-native";

export default function GoalBuilderScreen() {
	return (
		<View>
			<Text>Create Goal</Text>
			<BigGoalForm></BigGoalForm>
		</View>
	);
}

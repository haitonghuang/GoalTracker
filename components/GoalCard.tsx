import React from "react";
import {
	Button,
	Card,
	Text,
	ProgressBar,
	Badge,
	Icon,
} from "react-native-paper";
import { StyleSheet, View } from "react-native";

export type CardProps = {
	targetName: string;
	progress: number;
	dueDate: string;
	progressPercentage: string;
	goalStatus: string;
	category: string;
};

export default function GoalCard({
	targetName,
	progress,
	dueDate,
	progressPercentage,
	goalStatus,
	category,
}: CardProps) {
	return (
		<Card>
			<Card.Content>
				<Text variant="titleLarge">{targetName}</Text>
				<View style={styles.row}>
					<Text variant="bodyMedium">Progress</Text>
					<Text variant="bodyMedium">
						{goalStatus === "completed" ? "Completed" : progressPercentage}
					</Text>
				</View>

				<ProgressBar progress={progress} />
				<View style={styles.row}>
					<View style={{ flex: 1, flexDirection: "row" }}>
						<Icon source="flag-variant-outline" size={15} />
						<Text variant="bodyMedium">due: {dueDate}</Text>
					</View>
					<Badge size={24}>{category}</Badge>
				</View>
			</Card.Content>
		</Card>
	);
}

const styles = StyleSheet.create({
	row: {
		flex: 1,
		paddingTop: 10,
		paddingBottom: 5,
		flexDirection: "row",
		justifyContent: "space-between",
	},
});

import BigGoalForm from "@/components/BigGoalForm";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function GoalBuilderScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={{ margin: 20 }}>
            <BigGoalForm></BigGoalForm>
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

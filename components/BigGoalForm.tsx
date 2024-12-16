import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Text, RadioButton, Button } from "react-native-paper";
import { Dropdown } from "react-native-paper-dropdown";
import { DatePickerInput } from "react-native-paper-dates";

export default function BigGoalForm() {
  const [goalName, setGoalName] = useState("");
  const [goalDescription, setGoalDescription] = useState("");
  const [checked, setChecked] = useState("sub-goal");
  const TRACKING_METHOD_OPTIONS = [
    { label: "Completing sub-goals", value: "sub-goal" },
    { label: "Completing tasks", value: "task" },
    { label: "Manually", value: "manually" },
  ];

  const AREA_OPTIONS = [
    { label: "Financial", value: "financial" },
    { label: "Health", value: "health" },
    { label: "Career", value: "career" },
    { label: "Relationship", value: "relationship" },
    { label: "Personal Growth", value: "personal-growth" },
    { label: "Education", value: "Education" },
  ];

  const [area, setArea] = useState("");

  const [inputDate, setInputDate] = React.useState(new Date());
  return (
    <View style={styles.container}>
      <View>
        <Text variant="titleMedium">Goal Name*</Text>
        <TextInput
          placeholder="Goal name"
          value={goalName}
          onChangeText={(name) => setGoalName(name)}
        />
      </View>

      <View>
        <Text variant="titleMedium">Area*</Text>
        <Dropdown
          placeholder="Select Area"
          options={AREA_OPTIONS}
          value={area}
          onSelect={(value) => setArea(value as string)}
        />
      </View>
      <View>
        <Text variant="titleMedium">End date*</Text>
        <DatePickerInput
          locale="en"
          value={inputDate}
          onChange={(d) => setInputDate(d as Date)}
          inputMode="start"
          mode="flat"
          validRange={{ startDate: new Date() }}
        />
      </View>

      <View>
        <Text variant="titleMedium">Goal Description*</Text>
        <TextInput
          placeholder="Add more detail about this goal"
          value={goalDescription}
          onChangeText={(text) => setGoalDescription(text)}
          multiline={true}
        />
      </View>
      <View>
        <Text variant="titleMedium">How will you measure progress*</Text>
        {TRACKING_METHOD_OPTIONS.map((option, index) => {
          return (
            <View style={styles.row} key={index}>
              <RadioButton
                value={option.value}
                status={checked === option.value ? "checked" : "unchecked"}
                onPress={() => setChecked(option.value)}
              />
              <Text variant="titleMedium">{option.label}</Text>
            </View>
          );
        })}
      </View>
      <View style={[styles.row, { justifyContent: "center", columnGap: 30 }]}>
        <Button mode="outlined" onPress={() => console.log("Pressed candel")}>
          Cancel
        </Button>

        <Button mode="contained" onPress={() => console.log("Pressed save")}>
          Save
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    rowGap: 20,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goleTextContainer}>
      <Pressable
        onPress={props.deleteGoal.bind(this, props.id)}
        android_ripple={{ color: "red" }} //this work for android
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        {/* this work for IOS */}
        <Text style={styles.goleText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  goleTextContainer: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goleText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
export default GoalItem;

import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredGoleText, setEnteredGoleText] = useState("");
  const goleInputHandler = (enteredText) => {
    setEnteredGoleText(enteredText);
    // console.log(enteredText);
  };
  const addGoalHandler = () => {
    if (enteredGoleText !== "") {
      setCourseGoals((prevState) => [
        ...prevState,
        { text: enteredGoleText, id: Math.random().toString() },
      ]);
    }
    console.log(courseGoals);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your gole"
          onChangeText={goleInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goleContainer}>
        <FlatList
          data={courseGoals}
          //itemData is an object which contain item and index
          renderItem={(itemData) => {
            return (
              <View style={styles.goleTextContainer}>
                <Text style={styles.goleText}>{itemData.item.text}</Text>
              </View>
            );
          }} keyExtractor = {(item,index)=> {return item.id;}}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: { flex: 1, paddingTop: 50, paddingHorizontal: 16 },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    width: "70%",
    padding: 8,
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 30,
  },
  goleContainer: {
    flex: 5,
  },
  goleTextContainer: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  goleText: {
    color: "white",
  },
});

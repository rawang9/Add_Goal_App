import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const startAddGoalHandler = () => {
    setModalIsVisible(true);
    // console.log(modalIsVisible);
  };
  const endAddGoalHandler = () => {
    setModalIsVisible(false);
    // console.log(modalIsVisible);
  };
  const addGoalHandler = (enteredGoleText) => {
    if (enteredGoleText !== "") {
      setCourseGoals((prevState) => [
        ...prevState,
        { text: enteredGoleText, id: Math.random().toString() },
      ]);
    }
    endAddGoalHandler();
    // console.log(courseGoals);
  };
  const deleteGoalhandler = (id) => {
    setCourseGoals((prevState) => {
      return prevState.filter((gold) => gold.id !== id);
    });
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="orange"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goleContainer}>
          <FlatList
            data={courseGoals}
            //itemData is an object which contain item and index
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  deleteGoal={deleteGoalhandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: { flex: 1, paddingTop: 50, paddingHorizontal: 16 },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomColor: "##311b6b",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  goleContainer: {
    flex: 5,
  },
});

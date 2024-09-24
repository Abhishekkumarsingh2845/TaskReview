import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,Image
} from "react-native";
import React, { useState } from "react";

const App = () => {
  const [task, settask] = useState("");
  const [data, setdata] = useState([]);
  const [imagevisible,setimagevisible] =useState(false);

  const updateTick = ()=>
  {
    setimagevisible(!imagevisible)
  };

  const addtask = () => {
    if (task.trim() !== "")
      setdata([...data, { id: Math.random().toString(), name: task }]);
    settask("");
  };

  const deleteTask = (taskid) => {
    setdata(data.filter((item) => item.id !== taskid));
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.render}>
        <TouchableOpacity style={styles.box} onPress={updateTick} >
         {imagevisible &&  <Image source={require("./assets/check.png")} style={{width:20,height:20,resizeMode:"contain"}}/> }
        </TouchableOpacity>
        <Text>{item.name}</Text>
        <TouchableOpacity onPress={() => deleteTask(item.id)}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List</Text>
      <TextInput
        placeholder="Type your task"
        style={styles.txtplacehld}
        value={task}
        onChangeText={(text) => settask(text)}
      />
      <TouchableOpacity style={styles.add} onPress={addtask}>
        <Text style={styles.task}>ADD TASK</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  txtplacehld: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    textAlign: "left",
    width: 250,
    alignSelf: "center",
  },
  heading: {
    fontSize: 22,
    alignSelf: "center",
  },
  render: {
    backgroundColor: "greenyellow",
    paddingVertical: 5,
    paddingHorizontal: 5,

    width: 250,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between", // Space between text and button
    alignItems: "center", // Center items vertically
  },
  box: {
    width: 20,
    height: 20,
    borderWidth:0.5,
    backgroundColor: "white", 
    marginRight: 10, 
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 20,
  },
  add: {
    backgroundColor: "lightblue",
    paddingVertical: 5,
    paddingHorizontal: 90,
    marginTop: 10,
    marginVertical: 20,
    alignSelf: "center",
  },
  task: {
    fontSize: 16,
    fontWeight: "700",
  },
});

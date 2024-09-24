import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

const App = () => {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);
  const [imagevisible, setimagevisible] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);

  const handleTask = () => {
    if (task.trim()) {
      if (currentTaskId) {
        setData(
          data.map((item) =>
            item.id === currentTaskId ? { ...item, name: task } : item
          )
        );
      } else {
        setData([...data, { id: Math.random().toString(), name: task }]);
      }
      setTask("");
      setCurrentTaskId(null);
    }
  };

  const updateTick = () => {
    setimagevisible(!imagevisible);
  };

  const editTask = (id) => {
    const taskToEdit = data.find((item) => item.id === id);
    setTask(taskToEdit.name);
    setCurrentTaskId(id);
  };

  const deleteTask = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginVertical: 20,
          alignSelf: "center",
          fontSize: 22,
          color: "forestgreen",
          fontWeight: "500",
        }}
      >
        TODO LIST APP
      </Text>
      <TextInput
        placeholder="Task"
        style={styles.input}
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.button} onPress={handleTask}>
        <Text style={styles.addbtn}>{currentTaskId ? "Update" : "Add"}</Text>
      </TouchableOpacity>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableOpacity style={styles.box} onPress={updateTick}>
              {imagevisible && (
                <Image
                  source={require("./Src/assets/check.png")}
                  style={{ width: 20, height: 20, resizeMode: "contain" }}
                />
              )}
            </TouchableOpacity>
            <Text>{item.name}</Text>

            <TouchableOpacity
              style={{ marginLeft: 65 }}
              onPress={() => editTask(item.id)}
            >
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "forestgreen",
    padding: 10,
    borderRadius: 7,
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "lavender",
    marginTop: 10,
  },
  editText: {
    color: "forestgreen",
    fontSize: 15,
    fontWeight: "600",
  },
  deleteText: {
    color: "red",
    fontSize: 15,
    fontWeight: "600",
  },
  box: {
    width: 20,
    height: 20,
    borderWidth: 0.5,
    backgroundColor: "white",
    marginRight: 10,
    borderRadius: 5,
  },
  addbtn: {
    fontSize: 18,
    color: "white",
  },
});

export default App;

// import React, { useState } from "react";
// import {
//   FlatList,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   Image,
// } from "react-native";

// const App = () => {
//   const [task, setTask] = useState("");
//   const [data, setData] = useState([]);
//   const [currentTaskId, setCurrentTaskId] = useState(null);
//   const [selectAll, setSelectAll] = useState(false); // Track the select all state

//   const handleTask = () => {
//     if (task.trim()) {
//       if (currentTaskId) {
//         setData(
//           data.map((item) =>
//             item.id === currentTaskId ? { ...item, name: task } : item
//           )
//         );
//       } else {
//         setData([
//           ...data,
//           { id: Math.random().toString(), name: task, checked: false },
//         ]);
//       }
//       setTask("");
//       setCurrentTaskId(null);
//     }
//   };

//   const updateTick = (id) => {
//     setData(
//       data.map((item) =>
//         item.id === id ? { ...item, checked: !item.checked } : item
//       )
//     );
//   };

//   const editTask = (id) => {
//     const taskToEdit = data.find((item) => item.id === id);
//     setTask(taskToEdit.name);
//     setCurrentTaskId(id);
//   };

//   const deleteTask = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

  
//   const selectAllTasks = () => {
//     setSelectAll(!selectAll);
//     setData(data.map((item) => ({ ...item, checked: !selectAll })));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>TODO LIST APP</Text>
//       <TextInput
//         placeholder="Task"
//         style={styles.input}
//         value={task}
//         onChangeText={setTask}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleTask}>
//         <Text style={styles.addbtn}>{currentTaskId ? "Update" : "Add"}</Text>
//       </TouchableOpacity>
      
//       <TouchableOpacity onPress={selectAllTasks} style={styles.selectAllButton}>
//         <Text style={styles.selectAllText}>{selectAll ? "Unselect" : "Select All"}</Text>
//       </TouchableOpacity>

//       <FlatList
//         showsVerticalScrollIndicator={false}
//         data={data}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <TouchableOpacity
//               style={styles.box}
//               onPress={() => updateTick(item.id)}
//             >
//               {item.checked && (
//                 <Image
//                   source={require("./Src/assets/check.png")}
//                   style={styles.checkImage}
//                 />
//               )}
//             </TouchableOpacity>
//             <Text>{item.name}</Text>
//             <TouchableOpacity
//               style={{ marginLeft: 20 }}
//               onPress={() => editTask(item.id)}
//             >
//               <Text style={styles.editText}>Edit</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => deleteTask(item.id)}>
//               <Text style={styles.deleteText}>Delete</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     marginVertical: 20,
//     alignSelf: "center",
//     fontSize: 22,
//     color: "forestgreen",
//     fontWeight: "500",
//   },
//   input: {
//     marginBottom: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: "forestgreen",
//     padding: 10,
//     borderRadius: 7,
//     alignItems: "center",
//   },
//   item: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 10,
//     borderRadius: 8,
//     backgroundColor: "lavender",
//     marginTop: 10,
//   },
//   editText: {
//     color: "forestgreen",
//     fontSize: 15,
//     fontWeight: "600",
//   },
//   deleteText: {
//     color: "red",
//     fontSize: 15,
//     fontWeight: "600",
//   },
//   box: {
//     width: 20,
//     height: 20,
//     borderWidth: 0.5,
//     backgroundColor: "white",
//     marginRight: 10,
//     borderRadius: 5,
//   },
//   addbtn: {
//     fontSize: 18,
//     color: "white",
//   },
//   checkImage: {
//     width: 20,
//     height: 20,
//     resizeMode: "contain",
//   },
//   selectAllButton: {
//     marginVertical: 10,
//     alignItems: "flex-start",
//     color:"red"
//   },
//   selectAllText: {
//     fontSize: 16,
//     color: "red",
//     fontSize:16,
//   },
// });

// export default App;







// import React, { useState } from 'react';
// import { Button, Image, View, StyleSheet, Alert } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// const GalleryPicker = () => {
//   const [selectedImages, setSelectedImages] = useState([]);

//   const requestGalleryPermissions = async () => {
//     const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     return granted;
//   };

//   const handleImageSelection = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: false,
//       quality: 1,
//     });

//     if (!result.canceled && result.assets?.length > 0) {
//       const uri = result.assets[0].uri;
//       setSelectedImages((prevImages) => [...prevImages, uri]);
//     }
//   };

//   const openGallery = async () => {
//     const hasPermission = await requestGalleryPermissions();
//     if (!hasPermission) {
//       return Alert.alert('Permission to access the media library is required!');
//     }
//     await handleImageSelection();
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Open Gallery" onPress={openGallery} />
//       <View style={styles.imageContainer}>
//         {selectedImages.map((imageUri, index) => (
//           <Image key={index} source={{ uri: imageUri }} style={styles.image} />
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   imageContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     margin: 5,
//     borderRadius: 10,
//     borderColor: '#ccc',
//     borderWidth: 1,
//   },
// });

// export default GalleryPicker;






















// code to oepn a gallery

import React, { useState } from 'react';
import { Button, Image, View, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const GalleryPicker = () => {
  

  const openGallery = async () => { 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permission to access the media library is required!');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();

   
  };

  return (
    <View style={styles.container}>
      <Button title="Open Gallery" onPress={openGallery} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
});

export default GalleryPicker;

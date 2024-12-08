// import { Tabs } from 'expo-router';
// import React from 'react';
// import { Platform } from 'react-native';

// import { HapticTab } from '@/components/HapticTab';
// import { IconSymbol } from '@/components/ui/IconSymbol';
// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//         tabBarButton: HapticTab,
//         tabBarBackground: TabBarBackground,
//         tabBarStyle: Platform.select({
//           ios: {
//             // Use a transparent background on iOS to show the blur effect
//             position: 'absolute',
//           },
//           default: {},
//         }),
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }


import React, { useState } from 'react';

import { Image, StyleSheet, View, Text, KeyboardAvoidingView, Platform, TouchableOpacity, TextInput, Keyboard } from "react-native";
import Task from '@/components/task';


export default function TabLayout() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index: number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
<View style={styles.container}>
  
  {/* Today's Tasks */}
  <View style={styles.tasksWrapper}>
    <Text style={styles.sectionTitle}>Today's tasks</Text>

    <View style={styles.items}>
       {/* This is where the tasks will go!  */}
      {
        taskItems.map((item, index) => {
        return (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={item} />
            </TouchableOpacity>
        )
      })
      }
          {/* <Task text={'Task 1'} />
          <Task text={'Task 2'} /> */}
    </View>
  </View>
      
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper} 
            >
              <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
              <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper} >
                  <Text style={styles.addText} >+</Text>
                </View>
              </TouchableOpacity>
            </KeyboardAvoidingView>
      </View>

      // Write a task.


  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    items: {
      marginTop: 30,
      
    },
    writeTaskWrapper: {
      paddingHorizontal: 10,
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1, 
      width: 250,
    },
    addWrapper: {
      width: 45,
      height: 45,
      backgroundColor: '#fff',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1, 
    },
    addText: {},
  
});
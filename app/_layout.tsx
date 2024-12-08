// import React from 'react';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect, useState } from 'react';
// import 'react-native-reanimated';
// import { StyleSheet, View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from "react-native";
// import { useColorScheme } from '@/hooks/useColorScheme';
// import Task from '@/components/task';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const [task, setTask] = useState();
//   const [taskItems, setTaskItems] = useState([]);

//   const handleAddTask = () => {
//     Keyboard.dismiss();
//     setTaskItems([...taskItems, task])
//     setTask(null);
//   }

//   const completeTask = (index: number) => {
//     let itemsCopy = [...taskItems];
//     itemsCopy.splice(index, 1);
//     setTaskItems(itemsCopy)
//   }

//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (

//     <View style={styles.Container}>
//       {/* Today's Tasks */}
//       <View style={styles.tasksWrapper}>
//         <Text style={styles.sectionTitle}>Today's tasks</Text>

//         <View style={styles.items}>
//           {/* This is where the tasks will go! */}
//           {
//             taskItems.map((item , index) => {
//              return(
//               <TouchableOpacity key={index} onPress={() => completeTask (index)}>
//                 <Task text={item} />
//               </TouchableOpacity>
//              ) 
//             })
//           }
//           {/* <Task text={'Task 1'}/>
//           <Task text={'Task 2'}/> */}
//         </View>
//       </View> 

//       {/* Write a task */}
//        <KeyboardAvoidingView
//        behavior={Platform.OS ==="ios"? "padding" :"height"}
//        style={styles.writeTaskWrapper}>

//         <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>

//         <TouchableOpacity onPress={() => handleAddTask}>
//          <View style={styles.addWrapper}>
//           <Text style={styles.addText}>+</Text>
//          </View>
//         </TouchableOpacity>
//        </KeyboardAvoidingView>

//       </View>

//   );
// }

// const styles = StyleSheet.create({
//   Container: {
//     flex: 1,
//     backgroundColor: "#E8EAED", 
//   }, 
//   tasksWrapper: {
//     paddingTop: 80,
//     paddingHorizontal: 20,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: 'bold'
//   },
//   items: {
//     marginTop: 30,
//   },
//   writeTaskWrapper:{
//     position: 'absolute',
//     bottom: 60,
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   input:{
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     backgroundColor: '#FFF',
//     borderRadius: 60,
//     borderColor: '#C0C0C0',
//     borderWidth: 1,
//     width: 250,
//   },
//   addWrapper: {
//     width: 60,
//     height: 60,
//     backgroundColor: '#FFF',
//     borderRadius: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderColor: '#C0C0C0',
//     borderWidth: 1,

//   },
//   addText: {},

// });


import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

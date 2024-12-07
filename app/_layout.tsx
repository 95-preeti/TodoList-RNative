
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform, TextInput } from "react-native";
import { useColorScheme } from '@/hooks/useColorScheme';
import Task from '@/components/task';

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

    <View style={styles.Container}>
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          <Task text={'Task 1'}/>
          <Task text={'Task 2'}/>
        </View>
      </View> 

      {/* Write a task */}
       <KeyboardAvoidingView
       behavior={Platform.OS ==="ios"? "padding" :"height"}
       style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={'Write a task'}/>
       </KeyboardAvoidingView>

      </View>

  );
}

const styles = StyleSheet.create({
  Container: {
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
  writeTaskWrapper:{},
  input:{},

});
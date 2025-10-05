import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim().length === 0) return;
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <Image
        source={require('./assets/Zayne_Life_Chibi.webp')}
        style={styles.headerImage}
      />
      <Text style={styles.title}>My Course Goal/s</Text>

      {/* ✅ Use GoalInput instead of inline input JSX */}
      <GoalInput onAddGoal={addGoalHandler} />

      {/* FlatList Goals Section */}
      <View style={styles.goalListContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item) => item.key}
          renderItem={(itemData) => <GoalItem itemData={itemData} />}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
  },
  headerImage: {
    width: 75,
    height: 75,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'monospace',
    color: '#2F4F4F',
    marginBottom: 20,
  },
  goalListContainer: {
    flex: 5,
    width: '100%',
    paddingTop: 10,
  },
});

import { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet, Alert } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredText] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  function goalInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addGoalHandler() {
    if (!enteredGoalText.trim()) {
      Alert.alert('Empty input', 'Please enter a goal before adding!');
      return;
    }
    props.onAddGoal(enteredGoalText);
    setEnteredText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your Course Goal"
        style={styles.textinput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />

      {/* ✅ Replace Button with Pressable to test all props */}
      <Pressable
        onPress={addGoalHandler}                                       // normal press
        onLongPress={() => Alert.alert('Long Pressed!', 'Try tapping normally!')} // long press
        android_ripple={{ color: '#87CEFA' }}                         // ripple effect
        disabled={isDisabled}                                          // toggle test: set true to disable
        style={({ pressed }) => [                                     // dynamic style
          styles.button,
          pressed ? styles.buttonPressed : null,
          isDisabled ? styles.disabled : null,
        ]}
      >
        <Text style={styles.buttonText}>{isDisabled ? 'Disabled' : 'Add Goal'}</Text>
      </Pressable>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  textinput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    padding: 13,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    fontFamily: 'monospace',
  },
  button: {
    backgroundColor: '#4682B4',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '25%',
  },
  buttonPressed: {
    backgroundColor: '#5A9BD5',
  },
  disabled: {
    backgroundColor: '#B0C4DE',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'monospace',
  },
});

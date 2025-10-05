import { View, Text, StyleSheet } from 'react-native';

function GoalItem({ itemData }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{itemData.item.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 6,
    backgroundColor: '#E6E6FA',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#aabbd1ff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  goalText: {
    fontSize: 16,
    color: '#2F4F4F',
    fontFamily: 'monospace',
  },
});

import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";

export default function Todo({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexGrow: 1,
  },
  title: {
    fontSize: 32,
    flex: 1,
  },
});

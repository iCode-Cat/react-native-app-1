import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";

export default function Todo({ title, id, deleteOneItem }) {
  return (
    <View onTouchEnd={() => deleteOneItem(id)} style={styles.item}>
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
    width: "100%",
  },
  title: {
    fontSize: 32,
    flex: 1,
  },
});

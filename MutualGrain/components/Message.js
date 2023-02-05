import { TouchableOpacity, StyleSheet, Text } from "react-native";

const Message = (name, message) => (
  <TouchableOpacity style={styles.messageContainer}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.message}>{message}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  messageContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  message: {
    marginTop: 5,
    fontSize: 16,
  },
});

export default Message;

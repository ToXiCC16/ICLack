import React from "react";
import { View, FlatList } from "react-native";
import Message from "../components/Message";

const MessagesPage = () => {
  const messages = [
    {
      id: "1",
      name: "John Doe",
      message: "Hey, how are you?",
    },
    {
      id: "2",
      name: "Jane Doe",
      message: "I am good, thanks for asking! How about you?",
    },
    {
      id: "3",
      name: "Jim Smith",
      message: "I am doing well, thanks! How was your day?",
    },
    {
      id: "4",
      name: "Julie Adams",
      message:
        "It was great, thanks for asking! Did anything interesting happen to you today?",
    },
  ];
  return (
    <View>
      <FlatList
        data={messages}
        renderItem={(item) => (
          <Message
            name={item.name}
            message={item.message}
            // onPress={() => onMessagePress(item)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MessagesPage;

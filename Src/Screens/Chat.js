import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {BLACK, WHITE} from '../Colors';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleUserInput = () => {
    if (inputText.trim() !== '') {
      const userMessage = {
        id: String(messages.length + 1),
        sender: 'user',
        text: inputText,
        timestamp: getTime(),
      };

      setMessages(prevMessages => [...prevMessages, userMessage]);

      // Simulate bot response
      const botResponse = generateBotResponse(inputText);
      const botMessage = {
        id: String(messages.length + 2),
        sender: 'bot',
        text: botResponse,
        timestamp: getTime(),
      };
      setMessages(prevMessages => [...prevMessages, botMessage]);

      // Clear input after sending
      setInputText('');
    }
  };

  const generateBotResponse = userInput => {
    const lowercaseInput = userInput.toLowerCase();

    if (lowercaseInput.includes('hi') || lowercaseInput.includes('hello')) {
      return "Hey there! How's your day going?";
    } else if (lowercaseInput.includes('who')) {
      return 'I am Chat Bot, your friendly assistant.';
    } else if (lowercaseInput.includes('how are you')) {
      return "I'm just a bot, but I'm always here to help!";
    } else if (lowercaseInput.includes('joke')) {
      return "Why don't scientists trust atoms? Because they make up everything!";
    } else if (
      lowercaseInput.includes('thanks') ||
      lowercaseInput.includes('thank you')
    ) {
      return "You're welcome! 😊";
    } else {
      const randomResponses = [
        "I'm not sure I understand. Could you try rephrasing?",
        "That's interesting!",
        'Tell me more!',
        "I didn't quite get that. Care to elaborate?",
      ];
      return randomResponses[
        Math.floor(Math.random() * randomResponses.length)
      ];
    }
  };

  const getTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const renderMessage = ({item}) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'user' ? styles.userMessage : styles.botMessage,
      ]}>
      <Text
        style={[
          styles.messageText,
          item.sender === 'user' ? {color: WHITE} : {color: BLACK},
        ]}>
        {item.text}
      </Text>
      <Text style={styles.timestampText}>{item.timestamp}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleUserInput}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  messageContainer: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: BLACK,
    color: '#fff',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#ddd',
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  timestampText: {
    fontSize: 12,
    color: '#777',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 2,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  sendButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: BLACK,
    borderRadius: 22,
  },
  sendButtonText: {
    color: WHITE,
    fontWeight: 'bold',
  },
});

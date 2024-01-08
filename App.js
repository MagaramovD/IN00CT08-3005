import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState,useEffect} from "react";


export default function App() {
  const [lower, setLower] = useState(0)
  const [upper, setUpper] = useState(0)
  const [age, setAge] = useState('');

  useEffect(() => {
    if (age.trim() === "") {
      setLower(0);
      setUpper(0);
    } else if (isNaN(age)) {
      setLower(0);
      setUpper(0);
    } else {
      const numericAge = parseInt(age);
      setLower(Math.round((220 - numericAge) * 0.65));
      setUpper(Math.round((220 - numericAge) * 0.85));
    }
  }, [age]);

  return (<View style={styles.container}>
    <Text>Age</Text>
    <TextInput
        keyboardType="decimal-pad"
        value={age}
        onChangeText={text => setAge(text)}></TextInput>
    <Text>HeartRate</Text>
    <Text>{lower.toFixed(0)}-{upper.toFixed(0)}</Text>

    <StatusBar style="auto"/>
  </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // alignItems: 'center',
    justifyContent: 'center', padding: 8,
  }, field: {marginBottom: 8}

});

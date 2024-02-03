import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import Search from './Components/Search';

const DATA = [
  { id: '1', firstname: 'Pekka', lastname: 'Haavisto' },
  { id: '2', firstname: 'Samuli', lastname: 'Stubb' },
  { id: '3', firstname: 'Jacob', lastname: 'Suomalainen' },
];

const App = () => {
  const [data, setData] = useState(DATA);

  useEffect(() => {
    setData(DATA);
  }, []);

  const executeSearch = (searchPhrase) => {
    const filteredData = DATA.filter(item =>
        item.lastname.toLowerCase().startsWith(searchPhrase.toLowerCase()) ||
        item.firstname.toLowerCase().startsWith(searchPhrase.toLowerCase())
    );
    setData(filteredData);
  };

  const renderItem = ({ item }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{`${item.firstname} ${item.lastname}`}</Text>
      </View>
  );

  return (
      <View style={styles.container}>
        <Search executeSearch={executeSearch} />
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});

export default App;

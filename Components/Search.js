import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';

const Search = ({ executeSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        executeSearch(searchQuery);
    };

    return (
        <View style={styles.container}>
            <PaperTextInput
                label="Seach"
                value={searchQuery}
                onChangeText={text => setSearchQuery(text)}
                onSubmitEditing={handleSearch}
                returnKeyType="search"
                clearButtonMode="always"
                style={styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    input: {
        fontSize: 16,
    },
});

export default Search;

import React from 'react';
import { TextInput, View, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar= ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize='none'
        autoCorrect= {false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        />
    </View>
  );
};

const styles=StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#dcdcdc',
    height: 40,
    borderRadius: 5,
    marginHorizontal: 10,
    flexDirection: 'row'
  },
  inputStyle: {
    fontSize: 30,
    flex:1
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10
  }
});

export default SearchBar;

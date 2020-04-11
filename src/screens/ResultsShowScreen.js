import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen=({navigation}) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');
  console.log(result);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
            return <Image style={styles.image} source={{uri: item}} /> //the reason of double{{}} in uri itemis one for JS, one for identing object
        }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }

});

export default ResultsShowScreen;

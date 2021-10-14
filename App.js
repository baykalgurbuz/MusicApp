import React from "react";
import {View,Text,SafeAreaView,FlatList,StyleSheet} from 'react-native';
import song_data from './src/components/songCards_data.json';
import  SongCard  from './src/SongCard/SongCards';

function App(){
  const renderSong=({item})=><SongCard song={item}/>;
  const itemSeperatorItem=()=><View style={styles.seperator}></View>
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
        keyExtractor={item=>item.id}
        data={song_data}
        renderItem={renderSong}
        ItemSeparatorComponent={itemSeperatorItem}
        />
      </View>
    </SafeAreaView>
  )
}

export default App;

const styles =StyleSheet.create({
  container:{flex:1},
  seperator:{borderWidth:1,borderColor:'#e0e0e0'}
});


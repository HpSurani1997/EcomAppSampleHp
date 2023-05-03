import React, {FC} from 'react';

import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';

//Components
import Header from '../components/Header';
import Trending from '../components/Trending';

const dimensions = Dimensions.get('window');
const screen = dimensions.height;

const TrendingScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Trending" />
      <Trending onScreen={true} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    minHeight: screen,
  },
});

export default TrendingScreen;

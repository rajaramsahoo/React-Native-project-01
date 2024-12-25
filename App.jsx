/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FlexBox from './components/FlexBox';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';


function App() {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <SafeAreaView >
      <ScrollView>
        <FlexBox />
        <ElevatedCard />
        <FancyCard/>
        <ActionCard/>
      </ScrollView>

    </SafeAreaView>
  );
}



export default App;

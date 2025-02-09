import React, { Component, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Button, Modal } from 'react-native';
import ImageSlideshow from '../../Components/ImageSlideshow';
import Podcast_card from '../../Components/Podcast_card';
import WebView from 'react-native-webview';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Podcasts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { modalVisible } = this.state;

    return (
      <SafeAreaView style={styles.safearea}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          {/* SlideShow */}
          <View style={styles.slider}>
            <ImageSlideshow />
          </View>

          {/* Voice Section */}
          <View style={styles.voiceSection}>
            <View>
              <View style={[styles.headerView]}>
                <View>
                  <Text style={{ fontSize: 13, fontWeight: 'black' }}>Voice of</Text>
                  <Text style={[styles.headerText, { marginLeft: 3 }]}>Master Sri Ji</Text>
                </View>
              </View>
            </View>
          </View>

           {/* <Podcast_card/> */}
          {/* Podcasts */}
          <View style={styles.podcastSection}>
            {/* Add your Podcast cards here */}
            <ScrollView contentContainerStyle={{ padding: '3%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <View style={{ width: '48%', marginBottom: '3%' }}>
                <TouchableOpacity title="Play Audiomack" onPress={() => this.setModalVisible(true)}><Podcast_card /></TouchableOpacity>
                </View>
                <View style={{ width: '48%', marginBottom: '3%' }}>
                  <Podcast_card />
                </View>
                <View style={{ width: '48%', marginBottom: '3%' }}>
                  <Podcast_card />
                </View>
                <View style={{ width: '48%', marginBottom: '3%' }}>
                  <Podcast_card />
                </View>
                <View style={{ width: '48%', marginBottom: '3%' }}>
                  <Podcast_card />
                </View>
                <View style={{ width: '48%', marginBottom: '3%' }}>
    <Podcast_card />
  </View>
</ScrollView>
            {/* Button to open the Audiomack WebView modal */}

            {/* WebView Modal */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => this.setModalVisible(false)}
            >
              <View style={styles.modalContainer}>
                <View style={styles.webviewContainer}>
                  <WebView
                    source={{ uri: 'https://audiomack.com/embed/sathyodayamweb/song/ungkll-pirccnnnaikkaannn-tiirvu' }}
                    style={{ width: '100%', height: '80%' }}
                    javaScriptEnabled={true}
                    scrollEnabled={false}
                  />
                  <Button title="Close" onPress={() => this.setModalVisible(false)} />
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  slider: {
    marginHorizontal: '5%',
    marginTop: '2%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  headerView: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  voiceSection: {
    paddingHorizontal: '5%',
  },
  podcastSection: {
    paddingHorizontal: '5%',
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  webviewContainer: {
    width: '90%',
    height: '50%',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
});

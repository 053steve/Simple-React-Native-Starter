import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from "react-native";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      user: navigation.getParam('user')
    };
    console.log(this.state);
  }

  render() {
    const user = this.state.user;
    return (


      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={styles.homeHeader}>
            <Text>Hello Steve</Text>
          </View>
          <View style={styles.sectionsContainer}>

            <View style={styles.sections}>
              <View style={styles.sectionHeader}>
                <Text>AKSES CEPAT</Text>
              </View>
              <Text>Yo</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },

  homeHeader: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },

  sectionsContainer: {
    flex: 0.5,
    backgroundColor: 'rgb(220,220,220)',
  },

  sections: {
    height: 300,
    backgroundColor: 'rgb(232,233,232)',
  },

  sectionHeader: {

  },

  menuBox: {
    backgroundColor: 'rgb(255,255,255)',
    width: 110,
    height: 120
  }
});

export default HomeScreen;
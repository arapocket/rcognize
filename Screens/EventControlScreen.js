import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 30,
      justifyContent: 'space-between',
      backgroundColor: 'blue'
  
    },
    topToolbar: {
      backgroundColor: 'blue',
      borderBottomColor: 'black',
      borderBottomWidth: 2,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: 0.1
    },
    
    // Floating Action Button
    actionButtonIcon: {
      color: '#000'
    },
    actionButtonSpinner: {
      marginLeft: -2,
      marginTop: -2
    },
    // Map overlay styles
    marker: {
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: 'white',
      borderRadius: 0,
      zIndex: 0,
      width: 32,
      height: 32
    },
    geofenceHitMarker: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 6,
      zIndex: 10,
      width: 12,
      height: 12
    },
    markerIcon: {
      borderWidth: 1,
      borderColor: '#000000',
      backgroundColor: 'red',
      width: 4,
      height: 4,
      borderRadius: 5
    },
    incidentButton: {
      backgroundColor: 'white'
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignSelf: "stretch",
      alignItems: "center",
    },
    switchContainer: {
  
    },
    patrolStartButtonContainer: {
      flexDirection: "row",
      alignSelf: "flex-end",
    }
  });
  const authIcon = <Icon name="id-badge" style={styles.actionButtonIcon} size={25} />
  const settingsIcon = <Icon name="gear" style={styles.actionButtonIcon} size={25} />;
  const eventIcon  = <Ionicon name="ios-cloud-upload" style={styles.actionButtonIcon} size={25} />
  const BottomTabNavigatorConfig = {
  }
  
  class EventControlScreen extends React.Component {
  
    static navigationOptions = {
      tabBarIcon: eventIcon
    }
  
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Event Control</Text>
        </View>
      );
    }
  }

  module.exports = EventControlScreen;
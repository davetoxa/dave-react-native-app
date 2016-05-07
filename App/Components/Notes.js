var React = require('react-native');

var {
  Text,
  View,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
  },
  text: {
    color: 'red'
  }
});

class Notes extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Notes will be soon </Text>
      </View>
    )
  }
};

module.exports = Notes;

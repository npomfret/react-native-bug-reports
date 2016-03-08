'use strict';

var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  ListView
} = React;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    }
  },

  _redrawListView: function() {
    if( !this.rowCount )
    {
      this.rowCount = 0;
    }
    // generate some data that changes over time...
    var data = [];
      data.push([i, new Date().getTime()]);
    for(var i = 0; i < this.rowCount; i++)
    {
    }
    this.rowCount++;
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows( [] )
    });
    */
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows( data )
    });
  },

  componentWillMount: function() {
    var that = this;

    this.interval = setInterval(function () {
      that._redrawListView();
    }, 250);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  renderRow: function(item, sectionID, rowID, highlightRow) {
    return (
      <View >
        <Text >{rowID} - {item}</Text>
      </View>
    );
  },

  render() {
    return (
      <View style={styles.container}>
        <ListView dataSource={this.state.dataSource} renderRow={this.renderRow} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white',
    paddingTop: 16,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 2
  }
});

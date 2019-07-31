import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import _ from 'lodash';

// import Sideswipe from './components/Sideswipe';
import styles from './styles';

const balls = _.times(10, i => ({ id: `${i}` }));

class ContainerTemplate extends Component {
  shouldComponentUpdate() {
    return false;
  }

  keyExtractor = (item, i) => `${item.id}_${i}`;

  renderItem = () => <View style={styles.ball} />;

  render() {
    return (
      <View style={styles.container}>
        {/* <Sideswipe /> */}
        <FlatList
          data={balls}
          contentContainerStyle={styles.list}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          numColumns={4}
          columnWrapperStyle={styles.column}
        />
      </View>
    );
  }
}

export default connect(null)(ContainerTemplate);

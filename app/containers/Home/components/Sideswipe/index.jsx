import React, { Component } from 'react';
import { Dimensions, Text, View } from 'react-native';
import SideSwipe from 'react-native-sideswipe';
import _ from 'lodash';

import styles from './styles';

const { width } = Dimensions.get('window');
const data = _.times(100, i => ({ id: `${i}` }));

class Sideswipe extends Component {
  state = {
    currentIndex: 0,
  }

  shouldComponentUpdate() {
    return false;
  }

  renderItem = ({
    itemIndex,
    currentIndex,
    item,
    animatedValue,
  }) => (
    <View
      style={styles.card}
      {...item}
      index={itemIndex}
      currentIndex={currentIndex}
      animatedValue={animatedValue}
    >
      <Text>{itemIndex}</Text>
    </View>
  )

  render() {
    const { currentIndex: index } = this.state;
    // const contentOffset = (width - 160) / 2;

    return (
      <View style={styles.container}>
        <SideSwipe
          index={index}
          data={data}
          itemWidth={100}
          // contentOffset={contentOffset}
          style={{ width }}
          onIndexChange={i => { this.setState(() => ({ currentIndex: i })); }}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default Sideswipe;

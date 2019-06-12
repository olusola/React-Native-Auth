import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

class DiscoverContainer extends Component {
  constructor(props){
    super(props)
  }

  static navigationOptions = {
    title: 'Discover',
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <SafeAreaView>
      </SafeAreaView>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    ...state
  }
}

const mapsDispatchToProps = (dispatch) => (
  bindActionCreators({
    dispatch})
)

export default connect(mapsStateToProps, mapsDispatchToProps)(DiscoverContainer)
import React, { Component } from 'react';
import VideoPlayer from '../../player/containers/video-player';
import { connect } from 'react-redux';
import NotFound from '../components/not-found';

class Video extends Component {
  render() {
    const { existId, id } = this.props;

    if (existId) {
      return (
        <VideoPlayer
          id={id}
        />
      );
    }

    return <NotFound />
  }
}

function mapStateToProps(state, props) {
  const id = props.match.params.id;
  return {
    existId: state.get('data').get('entities').get('media').has(props.id),
    id,
  }
}

export default connect(mapStateToProps)(Video);

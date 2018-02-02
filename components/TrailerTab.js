//@flow
import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import { View, Text } from 'native-base';
const win = Dimensions.get('window');
import YouTube from 'react-native-youtube';

type Props = {
  videos: Array<{id: number, key: string}>
};
const TrailerTab = ({videos}: Props): React$Node => { console.log('videossss', videos);
  return (
    <Text>{
      videos.map(video => {
        return (
          <YouTube
            key={video.id}
            videoId={video.key}
            play={false}
            style={{ height: 300, width: win.width }}
          />
        )
      })
    }</Text>
  )
};

export default TrailerTab;

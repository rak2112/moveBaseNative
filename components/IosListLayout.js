//@flow
import React from 'react';
import { Text, ListItem, Left, Thumbnail, Body } from 'native-base';
import MoviesPage from './MoviesPage';

type Props = {
  item: {
    character?: ?string,
    job?: ?string,
    profile_path: string,
    name: string
  }
};

const IosListLayout = ({item}: Props) => {
  const personType: ?string = (item.character) ? `Character: ${item.character}` : `Job: ${String(item.job)}`; //fn String call, flow doesnt like implicit conversion
  return (
    <ListItem avatar style={{paddingBottom: 10, marginTop:5 }}>
      <Left>
        <Thumbnail source={{ uri: `https://image.tmdb.org/t/p/w264_and_h264_bestv2${item.profile_path}` }} />
      </Left>
      <Body style={{borderColor: '#191919'}}>
        <Text style={{color: '#ccc'}}>{item.name}</Text>
        <Text note>{personType}</Text>
      </Body>
    </ListItem>
  );
};

export default IosListLayout;

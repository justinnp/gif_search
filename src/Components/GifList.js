import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = props => { 

  //looking at the array of gifs, the gif itself in a fixed size is under img/f_h/url
  const results = props.data;
  let gifs;
  if(results.length > 0){ 
    gifs = results.map(
      gif => <Gif url={gif.images.fixed_height.url} key={gif.id}/>
    );
  }
  else gifs = <NoGifs />

  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
}

export default GifList;

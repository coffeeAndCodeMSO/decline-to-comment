import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeDivS>
      <iframe 
        title="stupid" 
        width="90%" 
        height="300"
        scrolling="no" 
        frameBorder="no" 
        allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/605088813&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
      </iframe>
    </HomeDivS>
  );
}

export default Home

const HomeDivS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content center;
` 

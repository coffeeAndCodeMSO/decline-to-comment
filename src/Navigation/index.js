import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { HOME } from '../Constants';

const Navigation = () => {
  return (
    <div>
      <UlS>
        <li>
          <Link to={HOME}>Home</Link>
        </li>
      </UlS>
    </div>
  );
}

const UlS = styled.ul`
  list-style: none;
`

export default Navigation

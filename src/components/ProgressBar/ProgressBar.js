import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES  = {
  small: {
    height: 0,
    padding: 0,
    radius: 4
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8
  }
}

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  /* trim off corners with prog bar near full */
  padding: var(--padding)
`
const Bar = styled.div`
  // // lineheight needs be smaller?
  // background-color: blue;
  // width: $ {p => Math.round((
  // p.current / 100
  // ) * 100)} + "%";
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`
const BarWrapper = styled.div`
	border-radius: 4px;
  overflow: hidden;
`

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  if (!styles) {
    throw new Error(`invalid size ${size}`)
  }
  return (
      <Wrapper role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"
      style={{'--padding': styles.padding + 'px',
      '--radius': styles.radius + 'px'}}>
        <VisuallyHidden>{value}</VisuallyHidden>
        <BarWrapper>
          <Bar style={{
            '--width': value + '%',
            '--height': styles.height + 'px'
          }}/>
        </BarWrapper>
      </Wrapper>
  );
};

export default ProgressBar;

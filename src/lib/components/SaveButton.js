import React from 'react';
import styled from 'styled-components';

const SaveButton = ({ ui, save, queue }) => {
  return !queue.length ? <></>
    : (
      <FixedFAB>
        <ui.Fab
          color="secondary"
          onClick={ save }>
          <span className="material-icons">save</span>
        </ui.Fab>
      </FixedFAB>
    )
}

export default SaveButton;

export const FixedFAB = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 1;
`
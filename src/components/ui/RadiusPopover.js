import React, { useRef, useState } from 'react';
import { OverlayTrigger, Button, Popover} from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import { render } from 'react-dom';
import TestMapsView from './TestMapsView';


const popover = (
    <Popover className='pa-0' id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body >
        <TestMapsView />
      </Popover.Body>
    </Popover>
  );
  
  function RadiusPopOver(props){
    return(
    <OverlayTrigger trigger="hover" placement="top" overlay={popover}>
      {props.children}
    </OverlayTrigger>
    );
  }
    
  export default RadiusPopOver;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import { Select, MenuItem, Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import 'rc-slider/assets/index.css';
import './styles/Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex', open: false };
    this.changeFormat = this.changeFormat.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }

  changeFormat({ target: { value } }) {
    this.setState({ format: value, open: true });
    this.props.changeFormat(value);
  }

  closeSnackBar() {
    this.setState({ open: false });
  }

  render() {
    const { level, changeLevel } = this.props;
    const { format, open } = this.state;
    const { closeSnackBar } = this;
    return (
      <header className='Navbar'>
        <div className='logo'>
          <Link to='/'>reactcolorpicker</Link>
        </div>
        <div className='slider-container'>
          <span>Level: {level}</span>
          <div className='slider'>
            <Slider
              defaultValue={level}
              mim={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className='select-container'>
          <Select value={format} onChange={this.changeFormat}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={open}
          autoHideDuration={3000}
          message={
            <span id='message-id'>
              Format Changed To {format.toUpperCase()}
            </span>
          }
          ContentProps={{ 'aria-describedby': 'message-id' }}
          onClose={closeSnackBar}
          action={[
            <IconButton
              onClick={closeSnackBar}
              color='inherit'
              key='close'
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}

export default Navbar;

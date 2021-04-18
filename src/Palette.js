import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';

import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import './Palette.css';

const styles = {
  palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  colors: {
    height: "90%",
  },
  paletteFooter: {
    backgroundColor: "white",
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
  }
}

export default withStyles(styles)(class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex"
    }
  }

  changeLevel = (level) => {
    this.setState({
      level: level
    });
  }

  changeFormat = (val) => {
    this.setState({ format: val });
  }

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        id={color.id}
        key={color.id}
        background={color[format]}
        name={color.name}
        paletteId={id}
        showingFullPalette={true}
      />
    ));
    return (
      <div className={classes.palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColors
        />
        <div className={classes.colors}>
          {colorBoxes}
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
})
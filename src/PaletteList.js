import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyle';


import MiniPalette from './MiniPalette';



export default withStyles(styles)(class PaletteList extends Component {

  goToPalette = (id) => {
    this.props.history.push(`/palette/${id}`);
  }
  
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React colors</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => (
              <MiniPalette
                {...palette}
                handleClick={() => this.goToPalette(palette.id)} />
            ))}
          </div>
        </div>
      </div>
    )
  }
})

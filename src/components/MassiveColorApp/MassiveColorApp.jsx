import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './Palette';
import PaletteList from './PaletteList';

import { generatePalette } from './colorHelpers';

import seedColors from './seedColors';

class MassiveColorApp extends Component {
  findPalette(id) {
    return seedColors.find((palette) => palette.id === id);
  }
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            exact
            path='/'
            render={() => <PaletteList palettes={seedColors} />}
          />
          <Route
            exact
            path='/palette/:id'
            render={(routeProps) => (
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            )}
          />
        </Switch>
        {/* <Palette palette={generatePalette(seedColors[4])} /> */}
      </React.Fragment>
    );
  }
}

export default MassiveColorApp;

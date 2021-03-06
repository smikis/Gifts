import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export class Home extends Component {
  displayName = Home.name;

  render() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        React & Material-UI Sample Application
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
  }
}

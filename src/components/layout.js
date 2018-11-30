import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import CssBaseline from '@material-ui/core/CssBaseline'
import withStyles from '@material-ui/core/styles/withStyles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import teal from '@material-ui/core/colors/teal'
import pink from '@material-ui/core/colors/pink'

import '../styles/codes.css'
import '../styles/prism.css'

import Navbar from './Navbar'

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: pink
  },
  typography: {
    fontSize: 16,
    fontWeightBold: 700,
    fontFamily: 'PT Sans',
    h1: {
      fontFamily: 'Dosis',
      fontWeight: 600
    },
    h2: {
      fontFamily: 'Dosis',
      fontWeight: 600
    },
    h3: {
      fontFamily: 'Dosis',
      fontWeight: 600
    },
    h4: {
      fontFamily: 'Dosis',
      fontWeight: 600
    },
    h5: {
      fontFamily: 'Dosis',
      fontWeight: 600
    },
    h6: {
      fontFamily: 'Dosis',
      fontWeight: `bold`
    },
    subtitle1: {
      fontFamily: 'Dosis',
      fontWeight: `bold`
    },
    button: {
      fontFamily: 'Dosis',
      fontWeight: `bold`
    },
    body: {
      fontFamily: 'PT Sans'
    },
    body1: {
      fontFamily: 'PT Sans',
      color: 'white'
    },
    useNextVariants: true
  }
})

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(850 + theme.spacing.unit * 2 * 2)]: {
      width: 850,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
})

class MainLayout extends React.Component {
  render() {
    const { children, classes } = this.props
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <Helmet>
            <meta
              name="description"
              content="Personal page of zee-german, portfolio and blog"
            />
            <meta
              name="keywords"
              content="developer, designer, portfolio, effect, animation, css, javascript"
            />
            <meta name="author" content="zee-german" />
          </Helmet>
          <CssBaseline />
          <Navbar />
          <main className={classes.layout}>{children}</main>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

MainLayout.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MainLayout)

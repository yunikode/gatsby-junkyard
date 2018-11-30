import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Hidden from '@material-ui/core/Hidden'
import withWidth from '@material-ui/core/withWidth'

import compose from 'recompose/compose'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  lightText: {
    color: '#FAFAFA'
  },
  flexText: {
    flexGrow: 1
  },
  bamhurger: {
    marginLeft: -12,
    marginRight: 20
  },
  linky: {
    textDecoration: 'none'
  }
}

class Navbar extends React.Component {
  state = {
    top: false
  }

  toggleDrawer = open => () => {
    this.setState({
      top: open
    })
  }
  render() {
    const { classes } = this.props

    const linkList = ['blog', 'projects', 'about', 'contact', 'tags']

    return (
      <React.Fragment>
        <AppBar position="static" className={classes.flexText}>
          <Toolbar>
            <Link to={'/'} className={`${classes.flexText} ${classes.linky}`}>
              <Typography variant="h6" className={classes.lightText}>
                junkYard
              </Typography>
            </Link>
            <Hidden mdDown>
              {linkList.map((item, i) => {
                return (
                  <Link to={`/${item}/`} key={i}>
                    <Button className={classes.lightText}>{item}</Button>
                  </Link>
                )
              })}
            </Hidden>
            <Hidden lgUp>
              <IconButton
                className={classes.bamhurger}
                color="inherit"
                aria-label="Menu"
                onClick={this.toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="top"
          open={this.state.top}
          onClose={this.toggleDrawer(false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
            className={classes.fullList}
          >
            <div className={classes.fullList}>
              <List>
                {linkList.map((item, i) => {
                  return (
                    <Link to={`/${item}/`} key={i} className={classes.linky}>
                      <ListItem button>
                        <ListItemText primary={item} align="center" />
                      </ListItem>
                    </Link>
                  )
                })}
              </List>
            </div>
          </div>
        </Drawer>
      </React.Fragment>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
}

export default compose(
  withStyles(styles),
  withWidth()
)(Navbar)

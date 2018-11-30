import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  fullHeight: {
    height: '100%'
  }
}

class TemporaryDrawer extends React.Component {

  state = {
    left: false
  }

  toggleDrawer = (open) => () => {
    this.setState({
      left: open
    })
  }

  render() {
    const { classes } = this.props

    const sideList = (
      <div className={classes.list}>
        <p>Test</p>
      </div>
    )

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>

        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
            className={classes.fullHeight}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TemporaryDrawer)

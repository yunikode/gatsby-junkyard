import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  segment: {
    padding: theme.spacing.unit * 1,
    margin: theme.spacing.unit * 1,
    [theme.breakpoints.up(850 + theme.spacing.unit * 2 * 2)]: {
      padding: theme.spacing.unit * 2,
      margin: theme.spacing.unit * 2,
    }
  }
})

class Segment extends React.Component {
  render() {
    const {classes, children} = this.props
    return (
      <Paper className={classes.segment}>
        {children}
      </Paper>
    )
  }
}

Segment.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Segment)

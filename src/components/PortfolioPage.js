import React from 'react'
import { Link } from 'gatsby'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import { ParallaxLayer } from 'react-spring/dist/addons'

import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'

import '../styles/index.css'

const styles = theme => ({
  linky: {
    textDecoration: 'none'
  },
  fullWidth: {
    display: 'inline-block',
    alignSelf: 'flex-end',
    marginRight: '8%',
    width: '50vw',
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      marginRight: 0
    }
  },
  heading1: {
    fontSize: '1em',
    margin: 0,
    paddingBottom: `0.25em`,
    lineHeight: `1em`,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.5em'
    }
  },
  blurb: {
    fontSize: '0.7em',
    margin: 0,
    paddingBottom: `0.25em`,
    lineHeight: `1em`,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.4em'
    }
  },
  textStyle: {
    marginTop: '1em',
    color: '#333333',
    fontFamily: 'Dosis'
  },
  textListStyle: {
    color: '#333333',
    fontFamily: 'PT Sans'
  },
  size: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  numSize: {
    display: 'block',
    alignSelf: `flex-start`,
    pointerEvents: `none`,
    fontSize: `30em`,
    color: `#373c4c`,
    position: `relative`,
    [theme.breakpoints.down('lg')]: {
      fontSize: '20em'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
})

class Page extends React.Component {
  render() {
    const {
      classes,
      offset,
      caption,
      first,
      second,
      link,
      total,
      gradient
    } = this.props
    return (
      <React.Fragment>
        <ParallaxLayer className="nav_overlay" offset={offset} speed={1}>
          <Typography>
            {offset + 1} of {total}
          </Typography>
        </ParallaxLayer>
        <ParallaxLayer offset={offset} speed={0.2}>
          <div className={`slopeBegin ${gradient} ${classes.size}`} />
        </ParallaxLayer>

        <ParallaxLayer offset={offset} speed={0.5}>
          <div className={`slopeEnd tomato ${classes.size}`} />
        </ParallaxLayer>

        <ParallaxLayer offset={offset} speed={0.3}>
          <div className={`text ${classes.numSize}`}>0{offset + 1}</div>
        </ParallaxLayer>

        <ParallaxLayer className="text header" offset={offset} speed={0.4}>
          <Paper className={classes.fullWidth}>
            <Link to={link} className={classes.linky}>
              <Typography
                className={`${classes.heading1} ${classes.textListStyle}`}
              >
                {caption}
              </Typography>
              <div className="stripe tomato" />
              <Typography
                className={`${classes.blurb} ${classes.textListStyle}`}
              >
                {first}
              </Typography>
              <Typography className={`${classes.blurb} ${classes.textStyle}`}>
                Filed under: {second.join(', ')}
              </Typography>
            </Link>
          </Paper>
        </ParallaxLayer>
      </React.Fragment>
    )
  }
}

Page.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Page)

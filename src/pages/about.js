import React from 'react'
import Helmet from 'react-helmet'
import Typography from '@material-ui/core/Typography'
import Layout from '../components/layout'
import Segment from '../components/Segment'

import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  liner: {
    display: 'inline'
  }
})

class About extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Layout>
        <Helmet>
          <title>zee-german | about</title>
        </Helmet>
        <Segment>
          <Typography variant="display1" component="h2" align="center">
            About the junkYard
          </Typography>
        </Segment>
        <Segment>
          <Typography paragraph>
            I'm good enough, I'm smart enough, and gosh darn it, people like me!
            -{' '}
            <Typography
              component="span"
              color="textSecondary"
              className={classes.liner}
            >
              Noon Eever
            </Typography>
          </Typography>
          <Typography>
            This is the personal webiste / portfolio of zee-German, a{' '}
            <a href="https://en.wikipedia.org/wiki/Genderqueer">
              <Typography
                component="span"
                color="secondary"
                className={classes.liner}
              >
                genderqueer
              </Typography>
            </a>{' '}
            Jane-of-all-trades
          </Typography>
        </Segment>
      </Layout>
    )
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(About)

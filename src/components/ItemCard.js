import React from 'react'

import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import { Link } from 'gatsby'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  paper: {
    margin: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      margin: theme.spacing.unit * 2
    }
  },
  linkText: {
    textDecoration: 'none'
  },
  personal: {
    color: 'white',
    backgroundColor: '#E91E63'
  },
  title: {
    color: 'white'
  },
  subheader: {
    color: 'white'
  }
})

class ItemCard extends React.Component {
  render() {
    const { classes } = this.props
    let categ = this.props.context.frontmatter.category
    // console.log( )
    return (
      <Card className={`${classes.paper} ${classes[categ]}`}>
        <Link to={this.props.context.fields.slug} className={classes.linkText}>
          <CardHeader
            classes={
              classes[categ] && {
                title: classes.title,
                subheader: classes.subheader
              }
            }
            title={this.props.context.frontmatter.title}
            subheader={this.props.context.frontmatter.date}
          />
          <CardContent>
            <Typography component="p" className={classes[categ]}>
              {this.props.context.excerpt}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    )
  }
}

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ItemCard)

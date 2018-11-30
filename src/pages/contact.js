import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import Segment from '../components/Segment'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export default () => (
  <Layout>
    <Helmet>
      <title>zee-german | contact</title>
    </Helmet>
    <Segment>
      <Typography variant='display1' align='center'>Contact me!</Typography>
    </Segment>
    <Segment>
      <Typography paragraph>I'd love to talk! Email me at the address below</Typography>
      <Button variant='outlined' color='secondary' fullWidth href="mailto:franz.lutzenberger@gmail.com">
        email
      </Button>
    </Segment>
    <p></p>
  </Layout>
)

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Segment from '../components/Segment'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export default () => (
  <Layout>
    <Helmet>
      <title>zee-german | main</title>
    </Helmet>
    <Segment>
      <Typography variant="h3" align="center">
        welcome to the junkYard
      </Typography>
    </Segment>
    <Segment>
      <Typography component="p">
        I'm good enough, I'm smart enough, and gosh darn it, people like me!
      </Typography>
      <Button href="/blog/" color="secondary" fullWidth>
        here you can read the blog from the block
      </Button>
    </Segment>

    <Segment>
      <Typography component="p">
        I'm good enough, I'm smart enough, and gosh darn it, people like me!
      </Typography>
      <Button href="/blog/" color="secondary" fullWidth>
        here you can read the blog from the block
      </Button>
    </Segment>

    <Segment>
      <Typography component="p">
        I'm good enough, I'm smart enough, and gosh darn it, people like me!
      </Typography>
      <Button href="/projects/" color="secondary" fullWidth>
        here you can see a sample of my work
      </Button>
    </Segment>
  </Layout>
)

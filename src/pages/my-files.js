import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>My Files</title>
    </Helmet>
    <h1>Site Files</h1>

    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Relative Path</TableCell>
            <TableCell numeric>Size</TableCell>
            <TableCell>Extension</TableCell>
            <TableCell>Last Modified</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.allFile.edges.map(({ node }, index) => (
            <TableRow key={index}>
              <TableCell>{node.relativePath}</TableCell>
              <TableCell numeric>{node.prettySize}</TableCell>
              <TableCell>{node.extension}</TableCell>
              <TableCell>{node.birthTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </Layout>
)

export const query = graphql`
  query {
    allFile(sort: { fields: [relativePath], order: ASC }) {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`

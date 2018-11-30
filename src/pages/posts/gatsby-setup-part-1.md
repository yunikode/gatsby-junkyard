---
title: Get Gatsby Going | Part 1
tags: ["gatsby", "material", "static site generator"]
date: "2018-08-22"
---
In this part of the series we set up a basic installation of and get the initial website up and running. We will be using the new V2 Gatsby version, so expect a lot of head scratching and cursing.

## Install Gatsby CLI

The easiest way to start with Gatsby is by using their command line interface, for that we need node pre-installed.

`npm i -g gatsby-cli`

to install Gatsby followed by a

`gatsby new site-name https://github.com/gatsbyjs/gatsby-starter-default#v2`

and the most simple Gatsby page is done!

Now we change into newly made directory `cd site-name` and update all the dependencies with a simple `npm i`

## First Run

Time to see what we have so far, let's get the page up and running with a `gatsby develop` and once that is done compiling for a a second or two we can browse to `localhost:8000` and see the lovely starter template.

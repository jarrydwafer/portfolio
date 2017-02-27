---
layout: post
title:  "Building a Simple Ember.JS App"
unique-id: "case-study-8"
date:   2017-2-22 18:11:00 -0800
categories: tutorials
---

## BUILDING A SIMPLE EMBER APP

Imagine that a group of developers had gone looking for best practices in creating a web app front end, and then codified what they found into a framework. That is the idea of Ember JS. Ember brings back the fun of Rails, this time for single-page applications with great performance.

Ember is an open source JavaScript framework, maintained at [emberjs.com](http://emberjs.com) and on Github. It provides much of the front-end infrastructure you need so you can speed up the development of web apps. While using ember, you'll write less code and you'll write simpler code. And simpler code is better code.

By injecting object-oriented design principles into JavaScript to help you strucutre your code in a sensible way, Ember lets you think at a modular level. this makes your app easier to create and maintain. The features packaged with Ember rely on Node.js, npm, and Handlebars.

In this tutorial we will build a simple, single page ember app. Let's get it!

### Install Ember and Ember CLI

Ember CLI is a command-line interface for building Ember apps, and it's the project team's preferred means of obtaining the framework libraries. Ember CLI makes short work out of a lot of boilerplate tasks, such as building and deploying, executing tests, adding files to create new features, and so on.

It's worth noting, that while we'll use Node to run the Ember CLI development tools, Ember itself isn't a server-side framework. Ember is used for creating browser-resident apps.

Let's start out by installing bower, phantomjs (dependency as a test execution environment), and ember-cli globally.

```shell
$ npm install -g bower
$ npm install -g phantomjs
$ npm install -g ember-cli
```

Installing Ember CLI causes the Ember framework libraries to be installed, along with the CLI itself. Now that we have Ember and Ember CLI we're ready to start coding.

### Creating an App Repository

Ember CLI takes a very app-centric approach. The first thing you do is to create the app, and every module you create is part of that app. Our first step is to create the app's repository (Ember CLI assumes you'll be using Git, so it references a project as a repository).

```shell
$ ember new webapp
```

Before we write our UI code, let's also install a Bootstrap stylesheet to give us a good starting point. From your new Ember app directory, you can run the following commands:

```shell
$ cd webapp
$ npm install
$ bower install
$ bower install bootstrap --save
```

and then add these lines to *webapp/ember-cli-buld.js*, right before the last line of code:

```
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/bootstrap/dist/css/bootstrap.css.ma;',{
  destDir: 'assets'
});
```

Once you are able to do all of these thing successfully, you can now run your ember app with the following command:

```shell
$ ember serve
```

### Creating a new template

```shell
$ ember generate template application
```

```html
<h1>Grow Co. Designs</h1>

{{outlet}}
```

Generate a route for the homepage
```shell
ember generate route homepage
```

### Routes

### Components

To create an ember component:

```shell
ember generate component main-nav
```

### Typekit

### LESS

### Creating a contact form
- nodemailer

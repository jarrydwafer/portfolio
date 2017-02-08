---
layout: post
title:  "Creating a website engine with Jekyll"
unique-id: tutorial-2
date:   2016-12-16 20:05:59 -0800
categories: tutorials
---

Jekyll is a simple, blog-aware, static site generator. It was created to enable developers to generate static HTML websites structured much like a writer's blog, but without relying on a traditional database. The workflow is simple and structured, and the power of Github's own Markdown parsing language and Liquid template allows for a simple enough solution for many who don't have to have much technical experience. Github cofounder Tom Preston-Werner, who created Jekyll, sums it up by saying that "The distance from my brain to my blog has shrunk, and, in the end, I think that will make me a better author."


Jekyll takes a template directory containing raw text files and generates a website of static pages without relying on server side languages or databases when pages are requested by a user. Jekyll also powers [Github Pages](https://pages.github.com/), which means that you can use Github to version control your project as well as host your website for free. This is why Jekyll has remained the most popular static site generator for quite some time.

I like the sound of that, so let's get started.

## Installing Jekyll


#### OS X
```shell
$ gem install jekyll bundler
```

#### Ubuntu
```shell
$ apt-get install ruby ruby-dec make gcc nodejs
$ gem install jekyll
```

## Setup
Create a new jekyll website, in the example I titled the directory 'blog-project'. You then navigate into that new directory and run Jekyll to build the project and serve the site on a local web-server.

```shell
$ jekyll new blog-project
$ cd blog-project
$ bundle exec jekyll serve
```

That's pretty much it, you're set up and ready to go! Jekyll will build a static site and spin up a local web server at [localhost:4000](https://localhost:4000), and now it's up to you how you would like to blog like a hacker.

## Customizing your Jekyll powered website

Well, even though it's that easy out of the box, we want to see how things work and how we can customize our new website. So lets dig in.

First off, Jekyll starts with a default theme, [Minima](https://github.com/jekyll/minima#customization). The theme files are placed in your gem folder, and not your website folder. All you have to do to change a file for your project, is create a new file in your folder that follows the same structure as the gem. The benefit is that it keeps your project folder slim. But if you really want to see how things work, I would suggest looking into the actual theme folder. You can locate the folder by running the command:

```shell
$ bundle show minima
```

#### Creating drafts

In order to create drafts, create a new folder labeled ```_drafts``` and simply create posts with no date in the filename. To preview these drafts on your local machine, simply serve the Jekyll site with the ```--drafts``` option:

```shell
$ bundle exec Jekyll serve --drafts
```

#### Creating your own theme

If you would like to create your own theme, it's pretty simple as well, you just run the new-theme command:

```shell
$ jekyll new-theme name-of-new-theme
```

Jekyll scaffolds a new theme. Instructions can be found in the README.md file that is created in your directory. You add your template files in the corresponding folders, complete the .gemspec and the README files, and now you're off to the races.

After making appropriate changes to your Gemfile and \_.config.yml file you want to run the new bundle. First, stop the Jekyll local server. Then run

```shell
$ bundle
```

- [How to build a blog with Jekyll and GitHub Pages](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/)
- [How to set up a Jekyll theme](https://webdesign.tutsplus.com/tutorials/how-to-set-up-a-jekyll-theme--cms-26332)

---
layout: post
title:  "Opacity on scroll for a hero image"
unique-id: tutorial-3
date:   2016-12-21 10:05:59 -0800
categories: tutorials
---

Micro-interactions are quickly becoming the buzz in UX. The value of subtle effects that delight users could be the difference between your product and your competitors. That being said, micro-interactions should not be a development focus nor should they ever be distracting to a user. They should be subtle, yet add that polish that may differentiate your site from others.

With the introduction of Github's [Markdown]('https://guides.github.com/features/mastering-markdown/') language for contemporary blogging platforms, the focus of articles has really shifted towards content, which should have always been the most important element on any page!

With this welcomed trend of clean, clear typographic content, a hero image becomes more and more important to set the tone of the article. Here designers and developers have the chance to add some subtle, fancy nuances to pages that just may bring a smile to a readers face before they even dive into the article. In this tutorial we are going to walk through the set up of a hero image that fades out as the user starts to scroll.

## Setting up the hero section

To get started, let's set up a basic layout with a hero section, add appropriate styles and set up a background image.

```html
<section class="hero-section">
  <h2 class="hero-section-title">
    Fancy things here
  </h2>
</section>

<section class="page-content">
</section>
```

We want the background image to be fixed as the content container slide up and over it when the user begins to scroll. To do this we want the hero sections position to be fixed with a set height. Next, we want to make sure that the page content container is relatively positioned from the top the same value of pixels as the height of the fixed hero section. You could write this in css as follows:

```scss
.hero-section {
  height: 400px;
  position: fixed;
  top: 0;
  width: 100vw;  
  background: url(https://images.unsplash.com/photo-1464823063530-08f10ed1a2dd) center center;
  background-size: cover;
}

.page-content {
  position: relative;
  top: 400px;
  width: 100vw;
  min-height: 100vh;
  background-color: white;
}

body {
  background-color: #222; // desired color behind hero image
  margin: 0; // reset margin for full width image
}
```

At this point you should have a full width hero section with an image that stays fixed as the main content slides up when you scroll. Make sure that you choose a great image to set the tone for your page that will look good on high resolution monitors. A good place to find great images are free stock sites such as [unsplash]('https://unsplash.com/') and [pixabay]('https://pixabay.com/').

## Setting up the opacity calculation

Now we get to the fun part, writing some javascript to change the opacity based on the amount of pixels that you have scrolled from the top of the page. We will be using jQuery in this example, so make sure that you have the dependency in your html.

We start out by binding a function to window scroll and defining a variable for our hero container height as well as the distance that we have scrolled from the top.

```javascript
$(window).on('scroll', function() {
  var hero = $('.hero-container');
  var height = hero.outerHeight(); // height of hero-container
  var scrollTop = $(this).scrollTop(); // distance scrolled from top
});
```

Now we want to calculate a value that will correlate with the opacity that we desire. In this case, we want the opacity to start at 1 and move towards 0 as we scroll. In order to do this we will create a variable that equals 1 minus the `scrollTop` value divided by the `height`.

```javascript
var calc = 1 - scrollTop / height;
```

If you would like to check this value, you can log it to the console to inspect as your scroll by adding `console.log(calc)` to the end of your function. Make sure that you have the desired value for opacity. When you do, it's time to add that opacity value to our hero section.

```javascript
hero.css({
  'opacity': calc
})
```

## Performance and creating variability

At this point, your hero image should be working fine, but to really implement this microinteraction properly we want to further consider performance and variability.

First, we want to set two rules for opacity so that it is only changing in the DOM if it is equal to or between the values of 0 and 1. Any values outside of this range will not affect opacity, but will require changes to the DOM which we want to avoid for performance implications. In order to do this, we follow up with appropriate rules.

```javascript
if ( calc > '1' ){
  hero.css({
    'opacity': 1
  });
} else if ( calc < '0' ){
  hero.css({
    'opacity': 0
  });
}
```

Next, I would like to set the stage for how some different variations of how this effect could be calculated. To do this, we will add another variable to the equation that we will call 'rangeOffset'. Here we want to set a value that is less than the height that will offset the calc function. Here you can be creative, but a simply implementation may look like this:

```javascript
var rangeOffset = 160
var calc = 1 - scrollTop / (height - rangeOffset);
```

This means that the hero image will fade out completely 160 pixels from the top of the content section. A working javascript snippet should look something like this:

```javascript
$(window).on('scroll', function() {
  var hero = $('.hero-container');
  var height = hero.outerHeight();
  var scrollTop = $(this).scrollTop();  
  var rangeOffset = 160;
  var calc = 1 - scrollTop / (height - rangeOffset);

  hero.css({ 'opacity': calc });

  if ( calc > '1' ) {
    hero.css({ 'opacity': 1 });
  } else if ( calc < '0' ) {
    hero.css({ 'opacity': 0 });
  }
});
```

There we go! There are lots of different ways to calculate this value, but here is a simple straightforward way to get you started. If you would like to see a demo of this effect, you can view a working example on codepen - [Opacity on scroll](http://codepen.io/jarrydwafer/pen/MbRWRz).

---
layout: post
title:  "Design an interactive interface with Principle"
unique-id: "tutorial-3"
date:   2017-1-23 18:11:00 -0800
categories: tutorials
---

[Principle](http://principleformac.com/) is a design tool for animating user interfaces for web, mobile and desktop. Prototyping an interactive user interface with Principle allows you to quickly evaluate your ideas before investing valuable engineering time. In the long run, this will accelerate the design-development cycle.

Here is a quick intro video to demonstrate what you can do with Principle:

<iframe width="680" height="383" src="https://www.youtube.com/embed/vFrivX021-A" frameborder="0" allowfullscreen></iframe>

There are other tools out there to design animated, interactive user interface prototypes like [Framer](https://framer.com/). For those that aren't that very comfortable with animating with code, Principle is a better place to start. Principle lets you create designs that look and feel amazing straight from Sketch artboards which makes for a simple and streamlined workflow.

In this article, I will take you through the basics to create a simple interactive mobile UI animation. I have found that developing a proper workflow can save you time and headaches. To get started, I recommended grabbing a pen and blank sheet of paper.

### Layout Screens

Principle works well if you layout 'screens' or 'states' that will transition into each other. Because you are orchestrating a series of events, it is very helpful to have a general script. You should plan out the steps that you would like to animate:

initial screen => interact with trigger => overlay appears => menu slides in => selection made => menu slides out => overlay fades => back at initial screen.

![](/assets/video/tutorials/principle-example-1.gif)

If you are having trouble visualizing the UI interaction that you want to create, find a simple animation on your phone and try to recreate it. It will be a good study in interaction that will help to introduce you to Principle's general concepts.

I start out by sketching a general screen flow like so:

![](/assets/images/tutorials/principle-sketch.jpg)

Next I fire up Sketch and start laying out the elements for the initial screen. Here I will keep elements as generic as possible. You can effectively communicate interaction ideas with proper shapes and colors.

I suggest that you pick a standard mobile artboard size, build the initial screen, and then organize the layers into cohesive components. Try to nest layers as little as possible, but create clear groups that will animate together. I suggest you turn these groups into symbols and utilized [nested symbols](https://medium.com/@lloyd/sketch-symbols-best-practices-now-that-nested-overrides-are-a-thing-9b651d3fe1a4#.itnhtdad4) for changing states. Proper organization helps Principle recognize the same layers from screen to screen even if sizes and styles change for that element.

After finishing your first screen, duplicate that artboard and name it appropriately. I like to name my screens by states i.e. 'State A', 'State B', etc. This is helpful in terms of organization when you are creating multiple interactions that are not linear.

![](/assets/images/tutorials/principle-duplicate-layer.png)

Create your second screen with the changes that you would like to see, here we will add a layer with opacity to cover our content and indicate that it is below the menu that we will be animating up from the bottom.

When planning your animation, it is good practice to also figure out a way to animate back to the initial screen. This allows for you to create an example that loops smoothly instead of sharply jumping back to the initial screen after the animation completes.

![](/assets/video/tutorials/test-clipped.gif)

*Note when creating screens for Principle:*

For each new element that you plan to introduce, especially ones that will appear from offscreen, you want to add that element in Sketch one screen before it appears. This allows Principle to recognize a tween between the two states. In Sketch, when you move an element outside of an artboard, it removes that layer from that artboard's hierarchy. No problem, if you drag the layer back into the position that you want it in that artboard, the element will stay off screen, but it will now be part of the proper artboard.

### Import to Principle

When you are finished setting up appropriate screens, it is time to save your Sketch file and fire up Principle.The file you are planning to animate needs to be your only Sketch file open. In Principle, you will click the import button and it will show you the name of whatever Sketch file is open. Choose file, click import and now your artboards, layers, and groups should appear in Principle's interface ready to animate.

![](/assets/images/tutorials/principle-layout.png)


You are able to work between Sketch and Principle somewhat seamlessly. If you want to make changes to the files that you imported, you simply go back to Sketch, make changes, and re-import. Principle does a good job saving any interactions that you have already defined while introducing the new elements that you added in

### Setting up interactions and animations in Principle

We have set the stage for our events, now it's time to orchestrate. 

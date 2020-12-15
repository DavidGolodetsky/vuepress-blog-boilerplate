---
title: Vue Tips & Tricks
date: 2020-12-15
excerpt: Recently I've been tweeting some Vue.js tips that I found along the way diving deeper into the Vue world...
type: post
blog: true
tags:
  - Coding
---

Recently I've been tweeting some Vue.js tips that I found along the way diving deeper into the Vue world. Some of them are pretty obvious and some require an edge to be discovered. Anyway, I'll just list them:

## 1. Passing router query as a prop

Instead of accessing the router query directly in the component you can pass it as a prop from the route object. This way it would be more clean and declarative, as all input parameters for that component would be in one place.

![Image](https://pbs.twimg.com/media/EnM5NGuW8AQSH2A?format=jpg&name=large)

## 2. Dynamically switching from component and HTML tags

You can dynamically switch components like this: `<component :is="MyComponent"/>`. But you're not limited by components only: you can also switch between your components and a simple HTML tag passed as a string.

![Image](https://pbs.twimg.com/media/EnM4KWhXcAIkPVR?format=jpg&name=large)

## 3. Console.log inside the template

If you want to print a variable in your Vue component, you can declare a global method and do it directly inside the template. Sometimes I use it if I need to see the initial value and it's quicker than finding the variable in Vue DevTools.

![Image](https://pbs.twimg.com/media/EncuWnyXUAIeV8_?format=jpg&name=medium)

## 4. Lifecycle hook events

If your parent component needs to know that the child component has been mounted, you can use the hook event.

![Image](https://pbs.twimg.com/media/Enslw_XXMAkl13R?format=jpg&name=large)

## 5. Dynamic v-model binding

If you want to "v-model" dynamic properties you can wrap those properties in the object and loop over it. Or you can use the [\$data](https://twitter.com/search?q=%24data&src=cashtag_click) keyword like this:

![Image](https://pbs.twimg.com/media/En1d8SHWEAAmj3Y?format=jpg&name=medium)

## 6. Props aggregation

if you need to pass several props and their values match with their names of the props, you can shorten the code as follows:

![Image](https://pbs.twimg.com/media/Eo40wTYXEAUrybu?format=jpg&name=medium)

P.S. if value and name don't match, you still can do it, but it wouldn't be a shortening anymore and code would become dirtier IMHO:

    <the-alert v-bind="{text: alertText, type: alertType}">

## 7. v-for destructuring

Another great way to shorten your Vue.js code is the destructuring iterable element in the loop:

![Image](https://pbs.twimg.com/media/Eo-7lWRXUAE8qHX?format=jpg&name=medium)

## 8. Creation over destruction

And the last one. All that time I thought that Vue treats components as a stack: first it destroys the previous component, then creates a new one. Turns out it doesn't.

![Image](https://pbs.twimg.com/media/EnM75F9WMAIock1?format=jpg&name=large)

So, that what I have for now. I'm going to post more of those, so if you're interested, follow me on [Twitter](https://twitter.com/david_go__). Also, if you have some comments or objections regarding those examples, DM me. Take care!

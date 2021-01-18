---
title: My favorite flavor of JAM
date: 2021-01-17
excerpt: One of the modern trends in web development is static site generation, namely JAM stack...
type: post
blog: true
tags:
  - Coding
---

Hello everyone! It's mid-January now and according to [@shortdiv](https://twitter.com/shortdiv) it's the middle of the Jamuary 🥳 ! It's time to share with you my experience of working on the JAM Stack. But first, I will briefly explain what JAM is.

![enter image description here](https://46yxb83hlyy77jig73dh02ok-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/blur-focus-jam-canning-ideas-and-recipes-px-FEATURE-750x420.jpg)

One of the modern trends in web development is static site generation, namely JAM stack. It consists of three pillars: Javascript (for dynamic interaction), API (fetching new data), and Markup (prerendered on the server or at build time). Static sites today are not just dummy HTML page with some CSS, but they know how to process payment, fetch real-time data, and manage user accounts. At the moment, the web is dominated by the LAMP stack, by many predict JAM stack a mainstream position in the future. One of the fun factors in favor of a JAM is that it is more eco friendly. As a front-end developer, I am excited about this turning point.

![enter image description here](https://dinarys.com/photos/7/jam-dinarys.png)

I had little experience with [Hugo](https://gohugo.io/), a static site generator on Go, but my framework of choice is Vue. So I'm going to tell you about JAM from Vue point of view (pun alarm 🙃).

## JAM stack with Vue

First of all, this is [VuePress](https://vuepress.vuejs.org/) on which this blog is actually written. VuePress is simple and easy to use, the components are pure Vue SFC, the content is in markdown format. This is all statically generated and hosted on Netlify. This blog uses [Ben's](https://twitter.com/bencodezen) boilerplate template, for which many thanks to him. VuePress is convenient because the functionality is easily extended by a large number of plugins. An indicator of the quality of the framework is the fact that the documentation for Vue 3 has been rewritten from scratch with it. Mainly, this solution suit documentations and blogs, because this is all static content, everything works very quickly and this is SEO friendly

Recently Evan You (creator of Vue) created a new solution - [VitePress](https://vitepress.vuejs.org/). I have not tried it, but I tried Vite (an innovative bundler that uses native EU 6 modules) and it is amazing, the dev build happens instantly even when the application starts to become overgrown with components. The main difference between VuePress is that VitePress uses Vite over Webpack (surprisingly) and is also written in Vue 3.

However, I would not use both these solutions for an application that goes beyond the blog or something similar. If you need something more serious, then I would recommend looking towards the [Gridsome](https://gridsome.org/). This is a static site generator with a lot of plugins for SSG use cases. Also, Gridsome has good documentation and a built-in GraphQL layer, which is neat :)

But my favorite is [Nuxt](https://nuxtjs.org/), a Swiss knife for Vue app. It is a framework on top of the framework, an abstraction over Vue that makes development faster and easier. But his main feature is his modes. You can build a SPA, SSR, or SSG with it. At the same time, it will be enough for you to simply switch between mods even when the application is ready! Nuxt has a large community and this is a more mature solution than mentioned above, although it is more difficult to master because there are more moving parts here.

## Headless CMS

![enter image description here](https://www.breizhtorm.fr/wp-content/uploads/2020/02/headlesscms.png)

The next thing I would like to discuss real quick is the Headless CMS approach. It works wonderfully in conjunction with the JAM stack and they are simply the future. Traditional CMS such as WordPress and Drupal are built into the backend of the site. Meaning, every time there is a request for a backend for a new HTML and CSS, the CMS throws some content from themselves. In a SPA world, this format is simply not possible, because we take only one index file from the backend.
But besides that, your content in the traditional CMS lives only on your backend and only for this site. On the other hand, Headless CMS live separately and deliver content on-demand via API. Hence, you can create multiple sites or mobile applications and pull the same content. Examples of headless CMS are [Netlify CMS](https://www.netlifycms.org/), [Prismic](https://prismic.io/), and [Storyblok](https://www.storyblok.com/).

![enter image description here](https://hsto.org/webt/ki/lw/-g/kilw-g9neyjvtahhi6kqm19vuni.png)

## Case study

In order not to be unfounded, I will give an example of a JAM site in conjunction with a Headless CMS. For that, I'll use my favorite stack for this purpose: Nuxt, Storyblok, and host it on Netlify.

[This](https://geekscoredoc.netlify.app/articles/) is a PoC of simple documentation (sorry, it doesn't have a responsive design).

1. In general, I query the content via API something like this:

![https://ibb.co/KyztpMV](https://i.ibb.co/q1FH3tm/photo-2020-12-20-12-37-20.jpg)

2. My content lives in Storyblok and it's divided down into reusable components:

![enter image description here](https://i.ibb.co/r48NM6Z/photo-2020-12-20-12-39-21.jpg)

3. In addition, inside the CMS I can see a preview of my site! This is a super useful feature for content managers to visualize content, as well as to see at this stage if the layout breaks when adding content (for example, very long words on the German version of the site):

![enter image description here](https://i.ibb.co/4VgmdsM/photo-2020-12-20-12-38-38.jpg)

4. And of course, the content manager can deploy changes by himself when pressing the "Publish" button using Netlify hooks.

This is it. I very like JAM stack and I belive it'll take over the Internet!
Thanx for your attention. Take care!

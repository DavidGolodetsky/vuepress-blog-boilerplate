---
title: GeekScore — a passionate learning journey
date: 2020-10-14
excerpt: Perhaps the best way to learn new technologies is to build your pet project...
type: post
blog: true
tags:
  - Board games
  - Coding
---

Perhaps the best way to learn new technologies is to build your pet project. It is even better when the project goes beyond the trivial to-do lists and acquires interesting business logic. And it's just perfect when your pet project solves real problems 🚀 ! Today I will tell you about how, with the help of a pet project based on my hobby, I met Angular, fell in love with Vue.js even more, and tried myself in the role of full stack developer.
Meet [GeekScore](http://geekscore.netlify.com/) — the application for keen board gamers, where you can collect data about your games and rounds, get statistics, and more!

![enter image description here](https://i.ibb.co/gWTjWGK/mstile-144x144.png)

## Proof of concept

The birthday of this project fell on New Year's holidays when a blizzard raged outside the window, and inside everything was cozy flickering with lights of garlands and there was a lot of free time for such things. It all started with doubt. I followed the growth of Vue, read comparative reviews, and looked at the number of vacancies. And I was not sure that I could rely on it completely for my career as a frontend developer. I told myself: "Vue is great, but sooner or later you will still have to go down to earth and learn Angular or React" (Spoiler: I don't think so now.) Of course, in frontend development, you will still need to learn new technologies, and at least understand a little about alternative solutions.
![Angular vs React: 5 Key Differences | Codota Blog](https://lh6.googleusercontent.com/6yH5XCIneYnqwXWZOcupNV2wkITf-ZxKoYfbkirBUDf-1eRCRjy0AtWGyip00VdXhKR72jiD3W-SQFBfzBcsgh22cE82fSuZmy63ZYIWF-tg5LDKyVpKD5NzDx7s-XdFChAfUnRt)
Anyway, I decided that I want to learn Angular: I like the directive approach, the division into template and logic, and the framework's universality. So I started going through the tutorials and reading the documentation. I realized that I need to build a pet project to better understand the framework, and to have a reference to the code example if I forget something later. Without hesitation, I decided to write applications for board games, which my girlfriend and I have been so fond of lately. The application was supposed to save the games played and draw a graph of statistics. At that time, I was surprised to find that there are no similar analogs, which motivated me even more (it turned out that there is a paid application [Board Game Stats](https://www.bgstatsapp.com/)). I started to draw a mockup on a piece of paper, created a scheme of app architecture in Lucidchart and a Trello board to be on track. Winter vacation promised to be fun 🙃.

![WarsawJS Slides: Template](https://valian.github.io/warsawjs-slides-vue/pictures/meme-started.jpg)

## Angular 8

Programming in Angular is much easier when you have experience with Vue. In my opinion, they have more in common than Vue and React. However, on Angular, building general features take more time, the framework dictates the architecture for building the application and the folder structure, while in Vue you can experiment with it. When I was learning Angular, I got the impression that the framework is so elaborated that it has best practices for every occasion, but I was disappointed with how difficult it is to find a suitable solution on the internet. As far as I understand, this is due to how often Angular is updated (once every six months) and in order to find a suitable solution, you often need to look for a specific version of the framework. In addition, the reactivity in the framework is organized with the help of Observable — a powerful tool, that can be useful in Vue too, but it seemed to me this is an overhead when working with simple data. As the advantage of working with Angular, I found its scalability — using services it is convenient to break logic into pieces and share it between components. However, this case is covered in Vue 3 by Composition API.
In sum, after a couple of weeks, I finished the [prototype](https://geekstat.netlify.app). Backend is implemented on Firebase and all this was deployed on Netlify. I was glad that it was done and there was no desire to continue development. Also, in order to pull up my games from [BGG](https://boardgamegeek.com/) I used the only one [JSON API](https://bgg-json.azurewebsites.net/) I could find, and it is also someone pet project. At some point, it just fell and I thought that forever (actually for a month). In general, if I wanted to have this project in my portfolio, this logic had to be rewritten, but Angular DX was stopping me. But I liked the idea of the application, my girlfriend and I began to actively use it. A difficult decision was made — to rewrite everything from scratch with Vue.

![I say we rewrite the entire thing from scratch. It's the only way to be  sure. - Ripley nuke the site from orbit | Meme Generator](https://i.ibb.co/5MrcGnc/i-say-we-rewrite-the-entire-thing-from-scratch-its-the-only-way-to-be-sure-1.jpg)

## Vue.js PWA

I love Vue for its clarity. Learning to think in the Vue way is much easier than in the Angular way. I will not exaggerate, but it took me much less time to reproduce what I wrote on Angular. I changed the project name to Geek Score, wrote a dark theme with an orange accent, and created a logo. I used Firebase again as backend, however this time I added authentication and Firestore to store photos. For state management, I used Vuex, and Vuetify as a UI library.
A new approach that I have long wanted to try was [PWA](https://en.wikipedia.org/wiki/Progressive_web_application) (Progressive Web Application). The idea here is that the site can be used as an application — it can be installed on the phone and it can work offline. Although this technology is already several years old, it is still in an experimental state. Since the work of the application offline is achieved by caching files using Service Worker, you need to try hard to ensure that the synchronization is successful. We can say that at this stage I only laid the foundations of the real PWA, and there is still a lot of work in this regard. Anyway, I have deployed the MVP that I still use. The application consists of 3 logical entities (collections): games, teams, and rounds. Additional features were that you can see a graph of victories drawn using the [vue-chartjs](https://vue-chartjs.org) library, and you can also add a team photo interacting with the phone camera directly through the app. Check out how cool it looks on a phone screen 🤓

![enter image description here](https://i.ibb.co/Jn7JFg5/photo-2020-10-14-21-34-07.jpg)

## MEVN stack

Perhaps for every front-end developer there comes a moment when he is forced to look on the other side of development and write a little bit of backend. I consider the term full stack developer in most cases a marketing ploy since in reality, mastering both directions of development is extremely difficult. But while the market refuses to accept it. Personally, I am convinced that so far these areas are not automated enough to easily develop in both directions. On the other hand, highly specialized specialists are not so in demand for most projects. As always, the truth is somewhere in between.
I was interested to learn more about Node.js as a server-side language and MongoDB as a non-relational database (like Firebase). Hence MEVN stack. Although the application was ready, I decided to continue technical experiments on the ready-made "business logic". I tried not to invent anything new in the project, but to reproduce what is already working. For hosting this time I used Heroku since Netlify does not allow you to deploy a backend. I also managed to refactor a lot of existing frontend code and add more features in terms of frontend optimization. The project is [launched](https://geekscore.herokuapp.com) and ready to use, although I left the authentication on Firebase for now. It was unusual and interesting to write the backend, I'll give them that.

![Hola. Soy un Full Stack Developer - Desarrollo Fácil](https://i1.wp.com/desarrollo.espino.info/files/2017/06/full-stack.jpg?fit=450%2C364)

## WIP

Despite the fact that there are already 3 versions of this project, I still intend to develop it and learn new technical approaches with it. For example, it would be great to finalize PWA to make it "offline first", cover the main logical parts with unit tests, rewrite authentication with jwt tokens instead of Firebase service, and of course, rewrite everything in Vue 3 😁.
A nice booster for the project was Hacktoberfest. I created a bunch of issues and provided documentation to the [project](https://github.com/DavidGolodetsky/GeekScore-2) so it would be appealing for contributors. And it paid out! Now is the middle of October and there are already 25 PRs from 12 other contributors! Although there has been a case that can be nominated for [shitoberfests](https://twitter.com/shitoberfest) tag, all other PRs were helpful. Guys helped me with the backend structure, dockerized the app, and provided a couple of new features. And I was energized to think more about the project as a whole. It was also a great opportunity to practice delegating and describing problems. Thank everyone for your efforts!
Stay safe and play board games! 🎲 🎲 🎲

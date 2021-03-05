---
title: Unit testing experience
date: 2021-03-05
excerpt: Testing has always been something mysterious and difficult for me. As is often the case, tests are written afterward, as something that would be great to have at the end of the project...
type: post
blog: true
tags:
  - Coding
---

![enter image description here](http://www.everydayunittesting.com/wp-content/uploads/2016/03/106y5w1.jpg)

## 1. Why you should test

Testing has always been something mysterious and difficult for me. As is often the case, tests are written afterward, as something that would be great to have at the end of the project. And when you try to attach tests to a working functionality, it's just discouraging, and you don't see what would justify such suffering. Therefore, my relationship with the tests did not work out before that :) However, on a new project, we decided to do everything right, and now I'm with tests on a short leg!
So why should you trouble yourself writing tests for your code?
Tests primarily allow you to fight regression issues, partially eliminate the fear of deployment, and generally increase confidence in the future in these uncertain times :)
Another important aspect of testing is code documentation. For example, "getting acquainted" with a component, you can first read its tests, of course, making sure that they pass. Therefore, it is important to write a good description of each assumption. This applies not only to unit tests but also to other types of testing.

## 2. What you should test

Okay, tests are cool, but what to test at the frontend?

- Has the button been rendered and the styles have been applied?
- Did GraphQL query work or not?
- Has the data been added to the local storage?

It's up to you. For myself, I understand this in such a way that if some important business logic occurs on the frontend, then you need to highlight its main elements. It is important to distinguish business logic from implementation logic. In TDD there is an idea of component contract. Basically components work in a way that they receive something in, calculate, display, and send events out. It's your job to figure out each component contract and test its main parts.
You do not need to test Vue's inner logic, for example, whether the props were passed, or whether the watchers work as they should - this has already been tested by the Vue team for you.
Also, you don't need to test static UI with unit tests. You might want e2e tests for that with some snapshots, but I haven't tried that yet.
Also, some things are much easier and more correct to test using e2e tests, for example, using Cypress. Real-life example: routing for users with different access. It is much easier with Cypress to log in as a user with certain permissions and check if I can open a page accessible to me / if access is closed to an inaccessible one. With unit tests, you would have to write tests for assigning permissions and extract router guard to a separate function in order to test it, and it's not like it would be more reliable than such e2e test. Of course, one does not interfere with the other, but if you have a tight budget, it is better to write several critical e2e tests than to test each function separately.
One of the main points that I noticed when thinking about what should be tested in the frontend it's that computed properties are our closest friends in this. Often they contain the logic for transforming data received from the user or the backend, and this is exactly what you need to test. A bonus feature of computed properties is that they often have a cascading structure - one computed property depends on another. In this case, it is enough to test only the final computed property, and if the result meets expectations, then it can be argued that the previous computed properties also worked correctly.

## 3. How you should test

In my opinion, the TDD approach (test-driven development) is difficult and not always effective, because in rare cases, the customer, the manager, and you know what exactly needs to be done. You need to have some kind of foundation before you start testing.
How it was on our project? In the beginning, we wrote some basic logic, the design and architecture of the project settled down, and immediately the goal was set to have at least 50% coverage of unit tests. To do this, I set aside a few days to partially cover the existing functionality with tests, and after that, we followed a simple principle: a new pool request should not reduce the percentage of coverage. Therefore, you need to write tests for the new functionality. At the time of this writing, we have 53% coverage.
Also, an interesting principle that I read the other day: if a bug was reported, then you need to write a failing test for it, fix the bug, and then write a positive test, to ensure that it won't happen again. I think it's a good compromise with TDD approach.
It is also highly recommended to enable pre-push hook, for example using [Husky](https://www.npmjs.com/package/husky).

**Quasar + Vue test-utils**

Now I will explain the implementation details. In this project, we used Quasar as a frontend framework. Quasar has an [extension](https://testing.quasar.dev/) for basic test solutions, including Jest, which we are using. Quasar has a small [documentation](https://testing.quasar.dev/packages/unit-jest/) about the Jest extension, which uses the official Vue unit testing library [@ vue / test-utils](https: // vue-test-utils.vuejs.org/) under the hood. Speaking of documentation, it's also worth mentioning the [Vue Testing Handbook](https://lmiller1990.github.io/vue-testing-handbook/) a helpful guide for writing unit tests with the vue test-utils, from one of its core developers.
So, combining all these materials, we can get a basic idea of how you can write unit tests with Quasar. However, the implementation of Quasar has some differences from the plain vue test-utils approach, and the documentation does not reveal it that much. I will give some examples that may be useful to those who decided to start writing unit tests using this stack.

**Test setup**

So, we have a simple `AuthPage` component written with vue-class-component to better support TypeScript. It uses UI components provided by Quasar. It also has a child component, it's using the global i18n object and there is interaction with the router - depending on the page, we show the `SignIn` component or the content of the nested route.

![enter image description here](https://i.ibb.co/ZHjfXpc/carbon.png)

So for this, we will create a file `auth-page.spec.ts` in the directory`test/jest/__ tests__`. I have not yet seen the great benefit of using TS in tests, but for the consistency of our project, it is better to write in TS whenever possible, as it seems to me.

Our test will look like this:

![enter image description here](https://i.ibb.co/tPMs1sV/carbon-5.png)

1. Here we first import the component that we're about to test. In describe, we name the test by the component name. With the `mountFactory` we mount our component and write the config object.
2. We import the UI Quasar components that are used on this page and add them to the `quasar.components` object.
3. Then we import our child component `SignIn` and add`mount.components` to the object (by default it is shallow mount, that is, we do not test the child components).
4. In order to have access to global objects $t and $route, we can make a simple mock (For more complex work with the router, you need to create a local Vue object and connect a router instance there).
5. We call our factory and now we have access to the logic of our component and can make our assumptions.
6. Our test is successful, Hurray!

**Testing Mixins**

Testing mixins looks a bit different. To test their behavior, you need to test them along with the component in which they are used. However, in this case, you would need to mount and mock this component, with its internal logic, that will clutter up your mixin test. It seems to me that the best practice is to isolate the mixin tests. To do this, you can create a dummy component and mount it along with this mixin. An example would be:

1. At the address `test/jest` we create the component`dummy-component.vue`

![enter image description here](https://i.ibb.co/tJNRrTW/carbon-7.png)

2. We have a simple mixin that, depending on the value of the `loading` variable toggles Quasar Loading Plugin:
   ![enter image description here](https://i.ibb.co/4mKzfD1/carbon-8.png)

   3. Finally, we are writing a test in which we mount the DummyComponent, along with our local Vue instance that uses our mixin:
      ![enter image description here](https://i.ibb.co/61W4Cyc/carbon-10.png)

**Conclusions**

Unit tests help you avoid regression issues, document you're work and write cleaner code. I would highly recommend that you try this approach and incorporate it into your system. Writing tests can sometimes be a little tricky. we have to mimic the behavior of the browser, but at the same time, it gives us a deeper understanding of its behavior. Besides, unit tests are excellent documentation for your colleagues and yourself in the future.

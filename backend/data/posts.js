const posts = [
  {
    title: 'Introduction to MVC and Microservices',
    template: 'none',
    categories: ['mvc', 'patterns', 'engineering-patterns'],
    thumbnail: '/uploads/posts/preact.jpg',
    excerpt:
      'The Model-View-Controller (MVC) architectural pattern is a way of breaking an application or to precisely separate the logic of the code, into three parts: the model, the view, and the controller',
    sections: [
      {
        template: 'rtc',
        content:
          '<h3><strong><a name="MVC"></a>Model-View-Controller (MVC) Architecture</strong></h3><p>The Model-View-Controller (MVC) architectural pattern is a way of breaking an application or to precisely separate the logic of the code, into three parts: the model, the view, and the controller</p><p><strong>Model:</strong>&nbsp;This part manages the data on your site. Its role is to retrieve the raw information from the database, organize, and assemble it so that it can be processed by the controller.</p><p><strong>View:</strong>&nbsp;This part focuses on the display. It is here that the data recovered by the model will be used to present them to the user.</p><p><strong>Controller:</strong>&nbsp;This part manages the logic of the code that makes decisions. When the user interacts with the view, the request is processed by the controller.</p><p>It waits for the user to interact with the view to retrieve the request. Thus, it is the controller that will define the display logic, and display the next view on the screen</p>',
      },
    ],
    comments: [],
    votes: [],
    isPublished: true,
    submittedAt: '2022-05-26T13:01:19.849+00:00',
    approveDate: '2022-05-26T13:01:19.849+00:00',
    isApproved: true,
  },
  {
    title: 'Introduction to Preact',
    template: 'none',
    categories: ['react', 'frontend', 'javascript'],
    thumbnail: '/uploads/posts/MVC.jpg',
    excerpt:
      "Preact is a JavaScript library that describes itself as a fast 3kB alternative to React with the same ES6 API. As a frequent user of React, I'd always wanted to try out Preact and see what it offers, and the differences between Preact and React. In this article, I'll do an introduction to Preact, its key concepts and differences between Preact and React.",
    sections: [
      {
        template: 'rtc',
        content:
          '<h3 id="99f1">Introduction to&nbsp;Preact</h3><p id="290e">As mentioned above, Preact is a 3kb alternative to React developed by&nbsp;<a href="https://github.com/developit" target="_blank" rel="noopener noreferrer" data-href="https://github.com/developit">Jason Miller</a>&nbsp;and a bunch of&nbsp;<a href="https://github.com/developit/preact/graphs/contributors" target="_blank" rel="noopener noreferrer" data-href="https://github.com/developit/preact/graphs/contributors">contributors</a>. Preact was developed with the goal of building a JavaScript framework that&rsquo;s small in size and yet offered the same API and features that React ships with.</p><p id="ea1b">With a total size of 3kb, this means you don&rsquo;t have to worry about your JavaScript library/framework taking up a major chunk of your app&rsquo;s total JavaScript size.</p><p id="e6fe">Preact is fast, and not just because of its size. It&rsquo;s one of the fastest Virtual DOM libraries out there, thanks to a simple and predictable diff implementation.</p><p id="e7fd">Preact aims to deliver on a few&nbsp;<a href="https://preactjs.com/about/project-goals" target="_blank" rel="noopener noreferrer" data-href="https://preactjs.com/about/project-goals">key goals</a>:</p><ul><li id="eea1">Performance:&nbsp;Render quickly &amp; efficiently</li><li id="b32f">Size:&nbsp;Small size, lightweight</li><li id="445f">Efficiency:&nbsp;Effective memory usage</li><li id="ee1a">Understandability:&nbsp;Understanding the codebase should take no more than a few hours</li><li id="4fe0">Compatibility:&nbsp;Preact aims to be&nbsp;largely compatible&nbsp;with the React API.&nbsp;<a href="https://github.com/developit/preact-compat/" target="_blank" rel="noopener noreferrer" data-href="https://github.com/developit/preact-compat/">preact-compat</a>&nbsp;attempts to achieve as much compatibility with React as possible. More on&nbsp;preact-compat&nbsp;later.</li></ul><p id="ddc3">Preact performs nicely with browsers (supports all browsers) although it may require some polyfills for IE7 and IE8. Preact has also seen a large adoption by the community with a plethora of&nbsp;<a href="https://preactjs.com/about/libraries-addons" target="_blank" rel="noopener noreferrer" data-href="https://preactjs.com/about/libraries-addons">plugins</a>&nbsp;and companies are now beginning to switch to the JavaScript library.</p><p>Preact is now being used by companies like Lyft, Housing.com and m.uber.com. Uber\'s engineering team recently wrote an article that highlighted how Preact was used to build the mobile version of Uber which in turn led to a better performance largely due to its very minimal size.</p>',
      },
      {
        template: 'rtc',
        content:
          '<h3 id="fe54">So Preact or&nbsp;React?</h3><p id="3979">The answer to the question Preact or React actually depends on your use case. A tradeoff to switching over to Preact from React is that, you&rsquo;ll most likely have to do away with some features, or at least need some configuration to use some of the features that ships with React (preact-compat). An example of this is&nbsp;Unit Testing.</p><p id="0775">React uses a testing utility called&nbsp;<a href="http://airbnb.io/enzyme/index.html" target="_blank" rel="noopener noreferrer" data-href="http://airbnb.io/enzyme/index.html">Enzyme</a>&nbsp;developed by Airbnb to test its component. Unit testing is also possible in Preact, albeit with some&nbsp;<a href="https://preactjs.com/guide/unit-testing-with-enzyme" target="_blank" rel="noopener noreferrer" data-href="https://preactjs.com/guide/unit-testing-with-enzyme">Webpack config</a>&nbsp;and limitations.</p><p id="3769">Another thing to note is the absence of&nbsp;<a href="https://facebook.github.io/react/docs/events.html" target="_blank" rel="noopener noreferrer" data-href="https://facebook.github.io/react/docs/events.html">Synthetic Events</a>&nbsp;in Preact. Preact&rsquo;s browser support target does not require this extra overhead, therefore, Preact uses the browser&rsquo;s native&nbsp;addEventListener&nbsp;for event handling. This generally leads to a codebase with less maintenance and performance concerns.</p><p id="3ada">It could also be argued the removal of these features is what makes Preact a better pick of the two, because it leads to a codebase with a very small size. Preact can be considered for use cases like a self-contained web widget/embed or a Progressive Web App and in apps where performance is prioritized, because of its minimal size.</p><p id="e312">React can be used in complex apps and for building large scale apps with data that changes over time. Another advantage React has is its incredible ecosystem. There are various React packages for different use cases and a quick search on Github proves this, although the Preact plugin&nbsp;<a href="https://preactjs.com/about/libraries-addons" target="_blank" rel="noopener noreferrer" data-href="https://preactjs.com/about/libraries-addons">community</a>&nbsp;has been growing.</p><p id="e4b6">Like I mentioned above, it all depends on your use case, if you&rsquo;re looking to build a small app that does one thing very well, Preact might be what you need.</p><p id="2a00">React can be used when you are looking to build heavy stuff. There&rsquo;s no point in building an app with Preact and having to import like 10&ndash;15 modules because of compatibility, I think at this point, you should just build with React</p>',
      },
    ],
    comments: [],
    votes: [],
    isPublished: true,
    submittedAt: '2022-07-16T13:01:19.849+00:00',
    approveDate: '2022-08-26T13:01:19.849+00:00',
    isApproved: true,
  },
];

export default posts;

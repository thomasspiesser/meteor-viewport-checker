# jquery - viewport-checker

This is a Meteor wrapper package for the jQuery viewport-checker library. It is a little script that detects if an element is in the viewport and adds/removes a class to/from it.

See the [jQuery-viewport-checker docs](https://github.com/dirkgroenen/jQuery-viewport-checker) for more details and all options.

## Installation

In your Meteor app directory, enter:

```
$ meteor add tomsp:viewport-checker
```

## Usage

```js
Template.--your-template--.onRendered( function() {
  $( '.--your-class--' ).addClass( 'invisible' ).viewportChecker({
    classToAdd: 'visible animated fadeInLeft',
    classToRemove: 'invisible',
  });
});
```

And the css:

```css
.invisible {
  opacity: 0;
}

.visible {
  opacity: 1;
}
```

Also, don't forget the add the css for `animated` and `fadeInLeft` or use something like the popular [animate.css](https://atmospherejs.com/natestrauser/animate-css).
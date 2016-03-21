Package.describe({
  name: 'tomsp:viewport-checker',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor wrapper package for the jquery viewport-checker lib.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/thomasspiesser/meteor-viewport-checker',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('jquery');
  api.addFiles(['viewport-checker.js'], 'client');
});


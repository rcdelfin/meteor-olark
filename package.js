Package.describe({
  name: 'rcdelfin:olark',
  version: '0.1.1',
  summary: 'Port of Olark chat. Meteor 1.3.1 support',
  git: 'https://github.com/rcdelfin/meteor-olark',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  api.use('ecmascript');
  api.addFiles('olark.js', 'client');

  api.export('Olark', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest')
  api.use('ecmascript')
  api.use('rcdelfin:olark')
  api.addFiles('olark-tests.js')
});
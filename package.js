Package.describe({
  summary: "A simple eventing library"
});

Package.on_use(function (api, where) {
  api.add_files('events.js', ['client', 'server']);

  api.export('Events', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('events');

  api.add_files('events_tests.js', ['client', 'server']);
});

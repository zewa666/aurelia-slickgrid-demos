
export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: 'slickgrid', name: 'slickgrid', title: 'Examples', moduleId: './examples/slickgrid/index', nav: true },
      { route: '', redirect: 'slickgrid' }
    ]);

    this.router = router;
  }
}

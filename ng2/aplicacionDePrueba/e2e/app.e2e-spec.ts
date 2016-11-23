import { AplicacionDePruebaPage } from './app.po';

describe('aplicacion-de-prueba App', function() {
  let page: AplicacionDePruebaPage;

  beforeEach(() => {
    page = new AplicacionDePruebaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

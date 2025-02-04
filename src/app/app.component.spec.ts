import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;
  beforeEach(() => {
    fixture = new AppComponent();
  });

  it('should create the app', async () => {
    expect(fixture).toBeTruthy();
  });

  it('should have title "startup-market-admin"', () => {
    expect(fixture.title).toEqual('startup-market-admin');
  });
});

import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let translateService: jest.Mocked<TranslateService>;

  beforeEach(async () => {
    translateService = {
      setDefaultLang: jest.fn(),
      use: jest.fn(),
      addLangs: jest.fn(),
      getBrowserLang: jest.fn().mockReturnValue('fr'),
      get: jest.fn().mockReturnValue(of('translated text')),
      stream: jest.fn().mockReturnValue(of('translated text')),
      instant: jest.fn().mockReturnValue('translated text'),
      onLangChange: of({ lang: 'fr' }),
      onTranslationChange: of({}),
      onDefaultLangChange: of({}),
      currentLang: 'fr',
    } as never;

    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterOutlet,
        TranslateModule.forRoot({
          defaultLanguage: 'en',
        }),
      ],
      providers: [{ provide: TranslateService, useValue: translateService }],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async () => {
    expect(component).toBeTruthy();
  });

  it('should have title "startup-market-admin"', () => {
    // Ensure the title property is tested independently of TranslateService
    expect(component.title).toBe('startup-market-admin');
  });

  it('should initialize translations', () => {
    expect(translateService.addLangs).toHaveBeenCalledWith(['en', 'fr']);
    expect(translateService.setDefaultLang).toHaveBeenCalledWith('en');
  });

  it('should change language', () => {
    component.changeLanguage('en');
    expect(translateService.use).toHaveBeenCalledWith('en');
  });
});

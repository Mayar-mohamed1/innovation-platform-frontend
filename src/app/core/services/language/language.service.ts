import { computed, inject, Service, signal } from '@angular/core';
import { catchError, firstValueFrom, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

export type AppLanguage = 'ar' | 'en';
export type TextDirection = 'rtl' | 'ltr';


const STORAGE_KEY = 'lux-lang';
const BOOTSTRAP_LINK_ID = 'bootstrap-css';


const BOOTSTRAP_HREF: Record<AppLanguage, string> = {
  ar: 'vendor/bootstrap/bootstrap.rtl.min.css',
  en: 'vendor/bootstrap/bootstrap.min.css',
};



@Service()
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly translate = inject(TranslateService);


  private pendingStylesheet: HTMLLinkElement | null = null;

  readonly language = signal<AppLanguage>(this.readInitialLanguage());
  readonly direction = computed<TextDirection>(() => (this.language() === 'ar' ? 'rtl' : 'ltr'));
  readonly isRtl = computed(() => this.direction() === 'rtl');

  
  async init(): Promise<void> {
    const lang = this.language();
    this.applyToDocument(lang);
    await this.loadTranslations(lang);
  }

  async setLanguage(lang: AppLanguage): Promise<void> {
    if (lang === this.language()) {
      return;
    }

    await this.loadTranslations(lang);
    this.language.set(lang);
    this.save(lang);
    this.applyToDocument(lang);
  }

  toggle(): Promise<void> {
    return this.setLanguage(this.language() === 'ar' ? 'en' : 'ar');
  }

  private applyToDocument(lang: AppLanguage): void {
    const root = this.document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.swapBootstrapStylesheet(lang);
  }

  
  private swapBootstrapStylesheet(lang: AppLanguage): void {
    const href = BOOTSTRAP_HREF[lang];
    const current = this.document.getElementById(BOOTSTRAP_LINK_ID) as HTMLLinkElement | null;

    
    this.pendingStylesheet?.remove();
    this.pendingStylesheet = null;

    if (current?.getAttribute('href') === href) {
      return;
    }

    const next = this.document.createElement('link');
    next.rel = 'stylesheet';
    next.href = href;
    this.pendingStylesheet = next;

    next.addEventListener('load', () => {
      current?.remove();
      next.id = BOOTSTRAP_LINK_ID;
      this.pendingStylesheet = null;
    });
    next.addEventListener('error', () => {
      
      next.remove();
      this.pendingStylesheet = null;
    });

    if (current) {
      current.after(next);
    } else {
      this.document.head.prepend(next);
    }
  }

  private async loadTranslations(lang: AppLanguage): Promise<void> {
  
    await firstValueFrom(this.translate.use(lang).pipe(catchError(() => of(null))), {
      defaultValue: null,
    });
  }

  private save(lang: AppLanguage): void {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      
    }
  }

  private readInitialLanguage(): AppLanguage {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'ar';
    } catch {
      return 'ar';
    }
  }
}

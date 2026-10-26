import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from './core/services/language/language.service';
import { ThemeService } from './core/services/theme/theme.service';
import { Navbar } from './shared/components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslatePipe,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('innovationPlatform');

  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);

}

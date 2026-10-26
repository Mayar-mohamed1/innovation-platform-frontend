import { Service } from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';

export type AppTheme = 'light' | 'dark';


const STORAGE_KEY = 'lux-theme';



@Service()
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  readonly theme = signal<AppTheme>(this.readInitialTheme());
  readonly isDark = computed(() => this.theme() === 'dark');

  
  init(): void {
    this.apply(this.theme());
  }

  setTheme(theme: AppTheme): void {
    this.theme.set(theme);
    this.apply(theme);
    this.save(theme);
  }

  toggle(): void {
    this.setTheme(this.isDark() ? 'light' : 'dark');
  }

  private apply(theme: AppTheme): void {
    this.document.documentElement.setAttribute('data-bs-theme', theme);
  }

  private save(theme: AppTheme): void {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
     
    }
  }

  private readInitialTheme(): AppTheme {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    } catch {
     
    }
    return 'light';
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-innovation-submit',
  styleUrl: './innovation-submit.css',
  templateUrl: './innovation-submit.html',
})
export class InnovationSubmit {
  wordCount: number = 0;

  onPublicBriefInput(event: any) {
    const text = event.target.value.trim();
    
    this.wordCount = text === '' ? 0 : text.split(/\s+/).length;
  }
}

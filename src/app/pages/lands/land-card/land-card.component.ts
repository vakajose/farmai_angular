import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ParcelaResponse } from '../../../models/parcela.model';

@Component({
  selector: 'app-land-card',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './land-card.component.html',
  styleUrl: './land-card.component.css'
})
export class LandCardComponent {
  @Input() parcela!: ParcelaResponse;
  @Output() detail = new EventEmitter<void>();
  @Output() history = new EventEmitter<void>();
  @Output() analyze = new EventEmitter<void>();

  onDetail() {
    this.detail.emit();
  }

  onHistory() {
    this.history.emit();
  }

  onAnalyze() {
    this.analyze.emit();
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candles',
  imports: [CommonModule],
  templateUrl: './candles.component.html',
  styleUrl: './candles.component.scss'
})
export class CandlesComponent {
  candleCategories = [
    { id: 'mould', name: 'Mould Candle', description: 'Beautiful hand-crafted mould candles in various shapes and sizes' },
    { id: 'pillar', name: 'Pillar Candle', description: 'Premium pillar candles that burn long and beautifully' },
    { id: 'jar', name: 'Jar Candle', description: 'Elegant jar candles with premium fragrances' },
    { id: 'sachet', name: 'Wax Sachet', description: 'Fragrant wax sachets for your home' },
    { id: 'pearl', name: 'Wax Pearl', description: 'Beautiful wax pearls with amazing scents' },
    { id: 'tealight', name: 'Tealight Candle', description: 'Small, delicate tealight candles for ambient lighting' },
    { id: 'bouquet', name: 'Candle Bouquet', description: 'Beautiful arrangements of candles as gifts' },
    { id: 'hamperbox', name: 'Hamper Box', description: 'Curated hamper boxes with premium candle selections' },
  ];

  selectedCategory: string | null = null;

  selectCategory(categoryId: string) {
    this.selectedCategory = this.selectedCategory === categoryId ? null : categoryId;
  }
}

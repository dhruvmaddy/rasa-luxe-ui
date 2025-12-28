import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-others',
  imports: [CommonModule],
  templateUrl: './others.component.html',
  styleUrl: './others.component.scss'
})
export class OthersComponent {
  othersCategories = [
    { id: 'wax-sachet', name: 'Wax Sachets', description: 'Aromatic wax sachets for fresh and fragrant spaces' },
    { id: 'wax-pearl', name: 'Wax Pearls', description: 'Decorative wax pearls with various scents and colors' },
  ];

  selectedCategory: string | null = null;

  selectCategory(categoryId: string) {
    this.selectedCategory = this.selectedCategory === categoryId ? null : categoryId;
  }
}

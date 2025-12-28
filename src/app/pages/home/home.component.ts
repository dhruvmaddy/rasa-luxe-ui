import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  slides = [
    { id: 1, title: 'Premium Hand-Poured Candles', description: 'Crafted with passion and precision', image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    { id: 2, title: 'Mould Candles Collection', description: 'Elegant designs for every occasion', image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
    { id: 3, title: 'Pillar Candles', description: 'Long-lasting and beautifully designed', image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
    { id: 4, title: 'Jar Candles', description: 'Perfect for creating ambiance', image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
    { id: 5, title: 'Wax Pearls', description: 'Premium wax for your home', image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)' },
    { id: 6, title: 'Wax Sachets', description: 'Fragrant and long-lasting scents', image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
    { id: 7, title: 'Luxury Candle Bouquet', description: 'The perfect gift for loved ones', image: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)' }
  ];

  currentSlide = 0;
  slideInterval: any;
  categorySliderPosition = 0;

  candleCategories = [
    { name: 'Mould Candle', icon: '🕯️', path: '/candles', category: 'mould' },
    { name: 'Pillar Candle', icon: '🔥', path: '/candles', category: 'pillar' },
    { name: 'Jar Candle', icon: '🏺', path: '/candles', category: 'jar' },
    { name: 'Wax Sachet', icon: '🌸', path: '/candles', category: 'sachet' },
    { name: 'Wax Pearl', icon: '💎', path: '/candles', category: 'pearl' },
    { name: 'Tealight Candle', icon: '✨', path: '/candles', category: 'tealight' },
    { name: 'Candle Bouquet', icon: '💐', path: '/candles', category: 'bouquet' },
    { name: 'Hamper Box', icon: '🎁', path: '/candles', category: 'hamperbox' },
  ];

  newArrivals = [
    { id: 1, name: 'Lavender Dream Candle', price: '$24.99', image: '🕯️', category: 'Mould Candles' },
    { id: 2, name: 'Rose Garden Pillar', price: '$32.99', image: '🔥', category: 'Pillar Candles' },
    { id: 3, name: 'Ocean Breeze Jar', price: '$18.99', image: '🏺', category: 'Jar Candles' },
    { id: 4, name: 'Vanilla Bliss Wax Pearl', price: '$12.99', image: '💎', category: 'Wax Pearls' },
    { id: 5, name: 'Cherry Blossom Sachet', price: '$9.99', image: '🌸', category: 'Wax Sachet' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.startSlideshow();
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  startSlideshow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  scrollCategorySlider(direction: 'next' | 'prev') {
    const container = document.querySelector('.category-slider-container') as HTMLElement;
    if (!container) return;
    
    const scrollAmount = 300;
    if (direction === 'next') {
      container.scrollLeft += scrollAmount;
      this.categorySliderPosition += scrollAmount;
    } else {
      container.scrollLeft -= scrollAmount;
      this.categorySliderPosition -= scrollAmount;
    }
  }
}


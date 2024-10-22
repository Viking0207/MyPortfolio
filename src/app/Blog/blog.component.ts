import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos'; // Pastikan AOS diinstal

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit is called');
    AOS.init({
      offset: 200,
      duration: 1500,
    });
    console.log('AOS.init() has been called');

    // Refresh AOS ketika gambar dimuat
    // const images = document.querySelectorAll('img');
    // images.forEach((img) => {
    //   img.addEventListener('load', () => AOS.refresh());
    // });

    window.addEventListener('load', () => {
      console.log('window loaded, refreshing AOS');
      AOS.refresh();
    });

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      img.addEventListener('load', () => {
        console.log('images loaded, refreshing AOS')
        AOS.refresh();
      });
    });

  }

  // Listener untuk scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.querySelector('header');
    if (header) {
      header.classList.toggle('shadow', window.scrollY > 0);
    }
  }

  // Metode untuk menangani klik filter
  onFilterClick(value: string): void {
    const postBoxes = document.querySelectorAll('.post-box') as NodeListOf<HTMLElement>;
    
    if (value === 'all') {
      postBoxes.forEach(post => post.style.display = 'block');
    } else {
      postBoxes.forEach(post => {
        if (!post.classList.contains(value)) {
          post.style.display = 'none';
        } else {
          post.style.display = 'block';
        }
      });
    }

    // Refresh AOS untuk elemen yang terlihat
    setTimeout(() => {
      console.log("has been refresh");
      
      AOS.refresh();
      postBoxes.forEach(post => {
        if (post.style.display !== 'none') {
          post.classList.add('aos-animate');
        }
      });
    }, 500);
  }
}

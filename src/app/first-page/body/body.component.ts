import { Component, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements AfterViewInit {

  // Mendapatkan referensi tombol dari template
  @ViewChild('hireBtn') hireBtn!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Menambahkan listener untuk mendeteksi akhir animasi
    this.renderer.listen(this.hireBtn.nativeElement, 'animationend', () => {
      // Menghapus kelas animasi setelah animasi selesai
      this.renderer.removeClass(this.hireBtn.nativeElement, 'animate__animated');
      this.renderer.removeClass(this.hireBtn.nativeElement, 'animate__fadeInDown');
      this.renderer.removeClass(this.hireBtn.nativeElement, 'animate__delay-2s');
    });
  }

  // Fungsi untuk alert
  showAlert() {
    alert('Terima Kasih!!');
  }
  
}

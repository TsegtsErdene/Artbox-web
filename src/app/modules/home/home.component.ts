import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  categories: any [] = [
    {
      image: '/assets/images/category1.png',
      title: 'Жүжигчэн',
      description: 'Бүх төрлийн драм болон театрын жүжигийн хэсэгт тоглох'
    },
    {
      image: '/assets/images/category2.png',
      title: 'Хөгжимчин',
      description: 'Бүх төрлийн драм болон театрын жүжигийн хэсэгт тоглох'
    }
    ,{
      image: '/assets/images/category3.png',
      title: 'Зураглаач',
      description: 'Бүх төрлийн драм болон театрын жүжигийн хэсэгт тоглох'
    }
    ,{
      image: '/assets/images/category4.png',
      title: 'Рок дуучин',
      description: 'Бүх төрлийн драм болон театрын жүжигийн хэсэгт тоглох'
    }
  ]

  actors: any = Array.from(Array(10).keys());

  casts: any [] = Array.from(Array(4).keys());

}

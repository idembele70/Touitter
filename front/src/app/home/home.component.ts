import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public imgLink = '../../assets/male.png'
  public name = 'coco'
  public email = 'coco@mail.fr'
  public touitesCount = 32
  public followersCount = 20
  public touites: string [] = ['Hello world ! Fugit placeat culpa iste eius dolor magni et et. Ea qui omnis sit amet alias officia occaecati eius. Enim eveniet quo quam.',
'Maiores ut maxime doloribus libero omnis.']
}

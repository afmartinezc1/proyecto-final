import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notificar-toma',
  templateUrl: './notificar-toma.page.html',
  styleUrls: ['./notificar-toma.page.scss'],
})
export class NotificarTomaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/']);
  }

}

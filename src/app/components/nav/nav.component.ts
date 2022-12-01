import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private darkModeService: DarkModeService) { }
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  ngOnInit(): void {
  }

  onToggle(): void {

    this.darkModeService.toggle();
  }

}

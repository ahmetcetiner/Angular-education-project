import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client-banner',
  templateUrl: './client-banner.component.html',
  styleUrls: ['./client-banner.component.css']
})
export class ClientBannerComponent implements OnInit {

  constructor(private darkModeService: DarkModeService) { }
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  ngOnInit(): void {
  }
  onToggle(): void {

    this.darkModeService.toggle();
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AppService]
})
export class AppComponent {
  title = 'angularproject';

  constructor(private appService: AppService){}
  
  healthCheck(){
    this.appService.healthcheck().subscribe({
      next:(response)=>{
        console.log(response.message)
        alert(response.message);
      },
      error:(error)=>{
        console.log('failed', error);
      }
    })
  }
}

//module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HeroModuleModule} from './hero-manager/hero-module/hero-module.module';

//component
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here

//service
import { InMemoryDataService }  from './in-memory-data.service';
import { from } from 'rxjs/internal/observable/from';


@NgModule({
  declarations: [
    AppComponent,
 
    MessagesComponent,
 
    DashboardComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    HeroModuleModule,//goi module con hero.module
    
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

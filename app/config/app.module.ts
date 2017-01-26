import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// Declarations
import { LayoutComponent }  from '../components/layout.component';

//Providers
import { routing, appRoutingProviders  } from './app.routes';

//Commons
import { TruncatePipe } from '../commons/pipes/truncate.pipe';


@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    routing
  ],
  declarations: [
    LayoutComponent,
    TruncatePipe
  ],
  providers: [
    appRoutingProviders,

  ],
  bootstrap:[ 
    LayoutComponent 
  ]
})
export class AppModule { }

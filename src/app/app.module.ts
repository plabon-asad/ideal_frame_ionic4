import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgHttpLoaderModule} from 'ng-http-loader';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        HttpClientJsonpModule,
        FormsModule,
        NgHttpLoaderModule.forRoot()
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, InAppBrowser
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

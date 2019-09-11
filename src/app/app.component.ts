import {Component} from '@angular/core';
import {Router, ActivatedRoute, ParamMap, NavigationEnd} from '@angular/router';
// import { ActionCableService, Channel } from 'angular2-actioncable';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    public appPages = [
        {title: 'Home', url: '/home', icon: 'home'},
        {title: 'List', url: '/list', icon: 'list'},
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
    ) {
        this.initializeApp();
        this.appPages;
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

}

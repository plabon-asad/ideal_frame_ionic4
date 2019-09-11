import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Platform} from '@ionic/angular';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

    constructor(
        private router: Router, private sanitizer: DomSanitizer,
        private platform: Platform
    ) {

    }

    ngOnInit() {
        this.initBackEvent();
    }

    initBackEvent() {
        this.platform.backButton.subscribeWithPriority(999990, () => {
            if (confirm('Are you sure want to exit the app?')) {
                navigator['app'].exitApp();
            }
        });
    }


    public openLink(url) {
        window.location.href = url;
    }

}

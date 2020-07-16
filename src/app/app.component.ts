/* =======================================================
 *
 * Created by anele on 2020/07/15.
 * @anele_ace
 *
 * =======================================================
 */

import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    constructor( private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar ) {
        this.initializeApp();
    }


    initializeApp() {

        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}

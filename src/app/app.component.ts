import { Component, HostListener } from '@angular/core';
import { NavigationStart, NavigationEnd, Router } from '@angular/router';
import { LoaderService } from './modules/shared/services/loader.service';
import { SocketService } from './modules/shared/services/socket.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    loader = false;

    constructor(private router: Router, private loaderService: LoaderService, private _socketService: SocketService) {

    }

    // @HostListener('window:focus', ['$event'])
    // onFocus(event: FocusEvent): void {

    //     // Do something      
    //     console.log('hey');

    // }

    // @HostListener('window:blur', ['$event'])
    // onBlur(event: FocusEvent): void {

    //     // Do something
    //     console.log('bie');

    // }

    ngOnInit() {
        this.listenRouterEvents();
    }
    


    /**
     * Method for initiating and stopping loader on route change
     */
    listenRouterEvents() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                this.loaderService.showLoader();
            } else if (event instanceof NavigationEnd) {

                this.loaderService.hideLoader();
                // window.scrollTo({top:0,behavior:'smooth'});
            }

        });
        this.loaderService.loader.subscribe(
            data => {
                setTimeout(() => {
                    this.loader = data;
                });
            }
        );
    }
}

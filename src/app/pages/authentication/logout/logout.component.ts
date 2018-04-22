import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../../providers';

@Component({
    selector: 'ngx-logout',
    styleUrls: ['./logout.component.scss'],
    template:
        ` 
    <nb-card>
        <nb-card-body>
            Çıkış Yapılıyor. Lütfen Bekleyiniz.
        </nb-card-body>
    </nb-card>
    `,
})
export class LogoutComponent {
    constructor(
        private router: Router,
        private authService: AuthService
    ) {
        this.authService.logout().then(() => {
            this.router.navigate(['/']);
        }).catch((error) => {
            console.log(error);
        });
    }
}

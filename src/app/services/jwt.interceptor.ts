import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { LanguageService } from '../services/language.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    selectedLanguage: any;
    constructor(private authenticationService: AuthenticationService,
        private languageService: LanguageService,
    ) {

    }
    urlsToNotUse= 'app/*';

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const currentUseroken = localStorage.getItem("accessToken");
        if (currentUseroken && !request.url.includes("app/")) {
            const cloned = request.clone({
                headers: request.headers.set("Authorization",
                    "Bearer " + currentUseroken.replace(/['"]+/g, ''))
                    .set("Accept-Language", this.languageService.getSelectedLanguage())
            });

            return next.handle(cloned);
        }
        else if(request.url.includes("app/"))
        {
            const cloned = request.clone({
                headers: request.headers.set("Authorization",
                   "Basic ZWxhc3RpYzpQQHNzdzByZA==")
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(request);
        }
    }
}
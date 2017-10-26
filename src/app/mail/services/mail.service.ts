import { Injectable } from '@angular/core';
import { Http, Response } from  '@angular/http';

import { Mail } from '../models/mail.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class MailService {

  constructor(private http: Http) {}

  getFolder(folder: string): Observable<Mail[]> {

    return this.http
            .get(`/api/messages?folder=${folder}`)
            .map( response => response.json());

  }

}

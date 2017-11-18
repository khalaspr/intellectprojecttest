import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoListServiceService } from './todo-list-service.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers:[TodoListServiceService]
})
export class AppComponent {

      profile = {};


    constructor(private router: Router,private _TodoListServiceService:TodoListServiceService) {
    }
    ngOnInit(){

 this._TodoListServiceService.getUsers()
                               .map(response => response.json())
                               .subscribe((res) =>{
                                                     this.profile=res;                  
                                                     console.log(this.profile);                                   
                               })
                            
        //this._TodoListServiceService.getUsers().subscribe(data => this.profile = data);
    }
}

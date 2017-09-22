import { FormdataService } from './formdata.service';
import { FormService } from './form.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Simple Form';
  desigArray:any[]=[];
  nameArray:any[]=[];

  constructor(private formService:FormService,private formDataservice:FormdataService){}

  ngOnInit(){

    this.desigArray= this.formService.title


  }
  onSubmit(firstname:string,lastname:string,phonenumber:string,Designation:string){

    let user={
      fname:firstname,
      lname:lastname,
      phone:phonenumber,
      designation:Designation,
    }
  
    this.formDataservice.addData(user);
    this.nameArray= this.formDataservice.getData();
    

  }
}

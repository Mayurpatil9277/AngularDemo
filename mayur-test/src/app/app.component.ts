import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Upload Multiple files';
  result:string = '';
  
  ngOnInit(){

  }
  
  save(event:any):void{
    var selectFile = event.target.files;

  
    for(var i=0; i<selectFile.length; i++){
      this.result += 'File Name: '+selectFile[i].name;
      this.result += '<br> File Size: '+selectFile[i].size;
      this.result += '<br> File Type: '+selectFile[i].type;
      this.result += '<br>';

    }

  }
}

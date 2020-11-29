import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {username: '', password: '', remember: false};

  constructor(public dialogRef: MatDialogRef<LoginComponent>, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('User: ', this.user);
    this.dialogRef.close();
    const options = {
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        name: 'Hanisha',
        sex: 'Unknown',
      },
      responseType: 'text',
    }
    // set params
    // options.params.append('name', 'Hanisha');
    // options.params.append('sex', 'Unknown');
    // options.params.append('hasDick', 'Unknown unlike Anupam');

    // set headers (content type)
    // options.headers.set('content-type', '')
    return this.http.post('http://localhost:8080/demo1/Anupam', options).subscribe((data) => {
      console.log(data);
    });
  }

}

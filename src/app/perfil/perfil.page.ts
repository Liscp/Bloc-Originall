import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  @ViewChild('dis') dis;
  
  constructor() { }

  ngOnInit() {
  }

  activarInputs(){
    this.dis.disabled = "false";
  }

}

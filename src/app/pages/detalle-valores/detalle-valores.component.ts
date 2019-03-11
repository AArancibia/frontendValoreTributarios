import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-valores',
  templateUrl: './detalle-valores.component.html',
  styleUrls: ['./detalle-valores.component.css']
})
export class DetalleValoresComponent implements OnInit {

  checked: boolean = false;
  listOfData = [
    {
      key    : '1',
      name   : 'John Brown',
      age    : 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key    : '2',
      name   : 'Jim Green',
      age    : 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key    : '3',
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

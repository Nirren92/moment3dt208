import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.scss'
})
export class ConvertComponent {


  //egenskaper
  value:number = 0;
  result:String = "";

  convertcelctofar():void
  {
     this.result = (this.value*1.8+32).toString()+" F"; 
    
     console.log("res"+this.result);
  }
  convertfartocel():void
  {
    this.result = (this.value/33.8-32).toString()+" C"; 
  }

  convertmetertofeet():void
  {
    this.result = (this.value*3.2808).toString()+" ft";
  }
  
  convertfeettometer():void
  {
    this.result = (this.value/3.2808).toString()+" ft";
  }

}

import { Component, Input, Output, EventEmitter ,output} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) id!:string; //
  // The '!' operator is used to assert that the property will be initialized later
  @Input({required:true}) avatar!:string;
  @Input({required:true}) name!:string;
  //@Output() select=new EventEmitter();
  select=output<string>();
  get imagePath(){
    return '/users/'+this.avatar;
  }
  onSelectUser(){
    this.select.emit(this.id);
  }
}
 
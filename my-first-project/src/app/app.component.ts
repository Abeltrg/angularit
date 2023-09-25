import { Component, Output } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

function* generator(){
  for(var i=0;i<31;i++){
    yield i+1;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  calendarName = 'Calendario de Abel';
  array = [...generator()];
  user = "Abel"
  name = "Abel Rodríguez"

  isLogin():boolean {
    return this.user != undefined;
  }
  handlerClick(ev:Event) {
    ev.stopPropagation
    const node = ev.composedPath().map(node => node as HTMLElement).find(n=>n.dataset && 'day' in n.dataset)
    if (node) {
      const {day} = node.dataset;      
      alert('Hoy es el día ' + day + ' del mes');
    }
  }
}

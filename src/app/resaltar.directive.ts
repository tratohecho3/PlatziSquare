import { Directive, ElementRef, Renderer2, Input, OnInit   } from '@angular/core';
``

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @Input('appResaltar') plan : string  = '';
  ngOnInit(){
    if (this.plan === 'pagado'){
      this.renderer.setStyle(this.elRef.nativeElement,'background-color','yellow');
      this.renderer.setStyle(this.elRef.nativeElement,'font-weight','bold');
    }
  }

}

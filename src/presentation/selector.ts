import { Component, Input, Output, EventEmitter, ContentChild } from '@angular/core';

export class SelectorComponent {
  selected: string;

  @Input()
  options: string[];
  @Output()
  selectionChanged = new EventEmitter<string>();
}

// Slide 8
  @Input()
  displayFunc: (string) => string;
  
  ngOnInit(){
    if(!this.displayFunc){
      this.displayFunc = (x) => x;
    }
  }

  function appendLatin(shark){
    return shark + this.latinNames[shark];
}


//Slide 10

@Input()
swimIcon: (string) => string;

  ngOnInit() {
    ...
    if (!this.swimIcon) {
      this.swimIcon = (x) => undefined;
    }
  }

  function getSwimIcon(shark){
    return this.isSafe(shark)
     ? 'swimmer' 
     : 'skull-crossbones';
  }

  //Slide 13
  @Input()
  displayFunc: (string) => string;
  @Input()
  selectedDisplayFunc: (string) => string;
  @Input()
  swimIcon: (string) => string;

    if (!this.displayFunc) {
      this.displayFunc = (x) => x;
    }
    if (!this.selectedDisplayFunc) {
      this.selectedDisplayFunc = (x) => x;
    }
    if (!this.swimIcon) {
      this.swimIcon = (x) => undefined;
    }


  selectOption(option: string) {
    this.selected = option;
    this.selectionChanged.emit(option)
  }
}

export class SelectorComponent {
  
  @Input('selectedTemplate')
  selectedTemplateRef: TemplateRef<any>;

  @Input('optionTemplate')
  optionTemplateRef: TemplateRef<any>;
  ...
}

export class SelectorComponent {
  selected: string;
 
  @Input()
  label: string;
  @Input()
  options: string[];
  @ContentChild('optionTemplate')
  optionTemplateRef: TemplateRef<any>;
  @ContentChild('selectedTemplate')
  selectedTemplateRef: TemplateRef<any>;

  @Output()
  selectionChanged = new EventEmitter<string>();

  selectOption(option: string){
    this.selected = option;
    this.selectionChanged.emit(option)
  }
}

export class SelectorComponent {
  
  @ContentChild('selectedTemplate')
  selectedTemplateRef: TemplateRef<any>;

  @ContentChild('optionTemplate')
  optionTemplateRef: TemplateRef<any>;
  
}

@Component({
  template: `
<app-selector class="default" [options]="sharks">
</app-selector>

<ng-template #sharkTemplate let-shark>
		<div class='fromTemplate'>Custom {{shark}} </div>    
</ng-template>
<app-selector class="template" [options]="sharks" [optionTemplate]="sharkTemplate">
</app-selector>
 `,
})
class TestHostComponent {
  sharks = ['Test Shark'];
}

describe('Test SelectorComponent', () => {
  let fixture: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorComponent, TestHostComponent]
    });    
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should render default text', () => {
    let optionEl = fixture.nativeElement.querySelector('.default .dropdown-item');
    expect(optionEl.textContent).toEqual('Test Shark');
  });

  it('should render custom text', () => {
    let optionEl = fixture.nativeElement.querySelector('.template .dropdown-item');
    expect(optionEl.textContent).toEqual('Custom Test Shark ');
  });
});
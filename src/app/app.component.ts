import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
	password = '';
	includeUseLetters = false;
	includeUseNumbers = false;
	includeUseSymbols = false;
  
  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

	onChangeUseLetters() {
		this.includeUseLetters = !this.includeUseLetters;
	}
	onChangeUseNumbers() {
		this.includeUseNumbers = !this.includeUseNumbers;
	}
	onChangeUseSymbols() {
		this.includeUseSymbols = !this.includeUseSymbols;
	}

	onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if(this.includeUseLetters) {
      validChars += letters;
    }
    if(this.includeUseNumbers) {
      validChars += numbers;
    }
    if(this.includeUseSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i=0; i< this.length; i++) {
      const index = Math.floor(Math.random() *validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
	}
}

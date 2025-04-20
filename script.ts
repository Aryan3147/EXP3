function appendValue(value: string): void 
    const display = <HTMLInputElement>document.getElementById("display");
    display.value += value;
    
  function clearDisplay(): void {
    const display = <HTMLInputElement>document.getElementById("display");
    display.value = "";
  }
  
  function calculateResult(): void {
    const display = <HTMLInputElement>document.getElementById("display");
    try {
      const result = eval(display.value);
      display.value = result.toString();
    } catch (error) {
      display.value = "Error";
    }
  }
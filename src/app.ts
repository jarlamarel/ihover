class AutomaticVacuum {
    private x: number;
    private y: number;
    private orientation: string;
  
    constructor(x: number, y: number, orientation: string) {
      this.x = x;
      this.y = y;
      this.orientation = orientation;
    }
  
    public executeInstructions(instructions: string): void {
      for (const instruction of instructions) {
        switch (instruction) {
          case 'D':
            this.rotateRight();
            break;
          case 'G':
            this.rotateLeft();
            break;
          case 'A':
            this.moveForward();
            break;
          default:
            console.log(`Invalid instruction: ${instruction}`);
        }
      }
    }
  
    private rotateRight(): void {
      switch (this.orientation) {
        case 'N':
          this.orientation = 'E';
          break;
        case 'E':
          this.orientation = 'S';
          break;
        case 'S':
          this.orientation = 'W';
          break;
        case 'W':
          this.orientation = 'N';
          break;
      }
    }
  
    private rotateLeft(): void {
      switch (this.orientation) {
        case 'N':
          this.orientation = 'W';
          break;
        case 'E':
          this.orientation = 'N';
          break;
        case 'S':
          this.orientation = 'E';
          break;
        case 'W':
          this.orientation = 'S';
          break;
      }
    }
  
    private moveForward(): void {
      switch (this.orientation) {
        case 'N':
          this.y += 1;
          break;
        case 'E':
          this.x += 1;
          break;
        case 'S':
          this.y -= 1;
          break;
        case 'W':
          this.x -= 1;
          break;
      }
    }
  
    public getPosition(): string {
      return `x=${this.x} y=${this.y} orientation=${this.orientation}`;
    }
  }
  
  const gridX: number = 10;
  const gridY: number = 10;
  const initialX: number = 5;
  const initialY: number = 5;
  const initialOrientation: string = 'N';
  const instructions: string = 'DADADADAA';
  
  const vacuum: AutomaticVacuum = new AutomaticVacuum(initialX, initialY, initialOrientation);
  vacuum.executeInstructions(instructions);
  console.log(`Final position: ${vacuum.getPosition()}`);
  
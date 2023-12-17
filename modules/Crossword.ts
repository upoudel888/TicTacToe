type successStatus = string;

export interface CrosswordInterface {
  grid: [string, string, string][];
  turn: string;
  winPos: [number, number, number];
  getGrid(): [string, string, string][];
  getTurnStatus(): string;
  makeMove(position: number): successStatus;
  changeTurn(): void;
  checkOver(): Boolean;
  getWinningPositions(): [number, number, number];
}

export default class Crossword implements CrosswordInterface {
  grid: [string, string, string][] = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  turn: string = "o";
  winPos: [number, number, number] = [0, 0, 0];

  getGrid() {
    return [...this.grid];
  }

  getTurnStatus() {
    return this.turn;
  }

  makeMove(position: number) {
    let x_pos: number = Math.floor(position / 3);
    let y_pos: number = position % 3;

    if (this.grid[x_pos][y_pos] === "") {
      this.grid[x_pos][y_pos] = this.turn;
      return "Success";
    } else {
      return "Failure";
    }
  }

  changeTurn() {
    if (this.turn === "o") {
      this.turn = "x";
    } else {
      this.turn = "o";
    }
  }

  checkOver() {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (
        this.grid[i][0] !== "" &&
        this.grid[i][0] === this.grid[i][1] &&
        this.grid[i][1] === this.grid[i][2]
      ) {
        this.winPos = [i * 3, i * 3 + 1, i * 3 + 2];
        return true;
      }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        this.grid[0][i] !== "" &&
        this.grid[0][i] === this.grid[1][i] &&
        this.grid[1][i] === this.grid[2][i]
      ) {
        this.winPos = [0 * 3 + i, 1 * 3 + i, 2 * 3 + i];
        return true;
      }
    }
    // checking main diagonal
    if (
      this.grid[0][0] !== "" &&
      this.grid[0][0] === this.grid[1][1] &&
      this.grid[1][1] === this.grid[2][2]
    ) {
      this.winPos = [0, 4, 8];
      return true;
    }
    // checking second diagonal
    if (
      this.grid[0][2] !== "" &&
      this.grid[0][2] === this.grid[1][1] &&
      this.grid[1][1] === this.grid[2][0]
    ) {
      this.winPos = [2, 4, 6];
      return true;
    }
    // no winning conditons satisfied
    return false;
  }

  getWinningPositions(): [number, number, number] {
    return this.winPos;
  }
}

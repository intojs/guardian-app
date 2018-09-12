export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    // ...
  }

  wonPoint(playerName: string): void {
    // ...
  }

  getScore(): string {
    // ...
    if (this.m_score1 === this.m_score2) {
      // ...
    }
    else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      // ...
    }
    else {
      for (let i = 1; i < 3; i++) {
        if (i === 1) tempScore = this.m_score1;
        else {
          // ...
        }
        // ...
      }
    }
    return score;
  }
}

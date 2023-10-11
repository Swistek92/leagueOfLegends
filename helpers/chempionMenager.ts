import { ChampionType } from "../types";

export class ChampionManager {
  private champions: ChampionType[];
  private uniqueTags: string[];

  constructor(champions: ChampionType[]) {
    this.champions = champions;
    this.uniqueTags = [];
    this.updateUniqueTags();
  }

  private updateUniqueTags() {
    this.champions.forEach((champion) => {
      champion.tags.forEach((tag) => {
        if (!this.uniqueTags.includes(tag)) {
          this.uniqueTags.push(tag);
        }
      });
    });
  }

  public getAllUniqueTags(): string[] {
    return this.uniqueTags;
  }

  public addTag(tag: string) {
    if (!this.uniqueTags.includes(tag)) {
      // this.uniqueTags.push(tag);
      this.uniqueTags = [tag, ...this.uniqueTags];
    }
  }
}

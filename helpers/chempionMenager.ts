import { ChampionType } from "../types";

export class ChampionManager {
  private champions: ChampionType[];
  private uniqueTags: string[];

  constructor(inputObject: Record<string, any>[]) {
    this.champions = this.objectToArray(inputObject);
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
  private objectToArray(inputObject: Record<string, any>): any[] {
    if (Object.keys(inputObject).length === 0) {
      return [];
    }
    const keys = Object.keys(inputObject);
    const resultArray = keys.map((key) => inputObject[key]);
    return resultArray;
  }
  public getChempionsInArray = (): ChampionType[] => this.champions;

  public getAllUniqueTags = (): string[] => this.uniqueTags;

  public addTag = (tag: string): void => {
    if (!this.uniqueTags.includes(tag)) {
      this.uniqueTags = [tag, ...this.uniqueTags];
    }
  };
}

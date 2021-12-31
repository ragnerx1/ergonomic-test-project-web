export interface IResearchContextData {
  registerResearch(data: any): Promise<void>;
  registerDisconfortMap(data: any): Promise<void>;
}

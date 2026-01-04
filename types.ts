export interface FeatureSection {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

export enum RotationAxis {
  X = "X",
  Y = "Y",
  Z = "Z",
}
export interface TimelineCard {
  id: number;
  destination: string;
  date: string;
  highlight: string;
  emotion: string;
  emotionTag: string;
}

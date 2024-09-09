export interface IAchievement {
    id: number;
    title: string;
    description?: string;
    score: number;
}
export interface ICriteria {
    id: number;
    name: string;
    description?: string;
    achievements: IAchievement[];
}
export interface ICell {
    rowIndex: number;
    colIndex: number;
    description: string;
    score: number;
}
declare const generateData: (criteria: ICriteria[]) => {
    achievements: Omit<IAchievement, "description">[];
    categories: Omit<ICriteria, "achievements">[];
    maxScore: number;
    cells: ICell[][];
};
export default generateData;

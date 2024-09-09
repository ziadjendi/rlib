import { ICell, ICriteria } from "./Helpers";
interface IRowData {
    index: number;
    category: Omit<ICriteria, "achievements">;
    cells: ICell[];
}
interface IRowProps {
    data: IRowData;
    isSelected(cell: ICell): boolean;
    selectCellHandler: (cell: ICell) => void;
}
declare function Row({ data: { index, category, cells }, isSelected, selectCellHandler }: IRowProps): import("react/jsx-runtime").JSX.Element;
export default Row;

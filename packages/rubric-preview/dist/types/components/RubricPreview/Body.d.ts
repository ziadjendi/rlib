import { ICell, ICriteria } from "./Helpers";
interface IBodyProps {
    categories: Omit<ICriteria, "achievements">[];
    cells: ICell[][];
    isSelected: (cell: ICell) => boolean;
    selectCellHandler: (cell: ICell) => void;
}
declare function Body({ categories, cells, isSelected, selectCellHandler }: IBodyProps): import("react/jsx-runtime").JSX.Element;
export default Body;

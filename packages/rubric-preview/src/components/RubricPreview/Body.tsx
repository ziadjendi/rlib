import { Typography } from "@mui/material";
import { Fragment } from "react";
import Row from "./Row";
import { ICell, ICriteria } from "./Helpers";
import { CSSObject } from "../../utils/interfaces";
const customStyles = {
  body: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    height: "fit-content",
  },
  divider: {
    height: "38px",
    width: "100%",
    borderBottom: "1px rgb(236, 237, 239) solid",
  },
} satisfies CSSObject;
interface IBodyProps {
  categories: Omit<ICriteria, "achievements">[];
  cells: ICell[][];
  isSelected: (cell: ICell) => boolean;
  selectCellHandler: (cell: ICell) => void;
}

function Body({ categories, cells, isSelected, selectCellHandler }: IBodyProps) {
  return (
    <Typography component="div" sx={customStyles.body}>
      {categories.map((category, rowIndex) => (
        <Fragment key={"rowWrapper" + rowIndex}>
          <Row
            data={{ index: rowIndex, category, cells: cells[rowIndex] }}
            isSelected={isSelected}
            selectCellHandler={selectCellHandler}
          />
          {rowIndex !== categories.length - 1 ? (
            <Typography component="div" sx={customStyles.divider} />
          ) : null}
        </Fragment>
      ))}
    </Typography>
  );
}

export default Body;

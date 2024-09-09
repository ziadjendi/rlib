import { Typography } from "@mui/material";
import { ICell, ICriteria } from "./Helpers";
import { CSSObject } from "../../utils/interfaces";

const customStyles = (size: number) =>
  ({
    row: {
      display: "grid",
      gridTemplateColumns: `1.25fr ${Array(size).fill("1fr").join(" ")}`,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      width: "100%",
      maxWidth: `${size * 150 + 188}px`,
      height: "fit-content",
      minHeight: "170px",
      "& *": {
        textWrap: "wrap",
        fontSize: "12px !important",
        userSelect: "none",
      },
    },
    category: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      flexDirection: "column",
      gap: "10px",
      height: "100%",
      width: "auto",
      maxWidth: "250px",
      minWidth: "150px",
      paddingTop: "32px",
    },
    categoryName: {
      fontSize: "14px",
    },
    categoryDescription: { padding: "10px" },
    cell: {
      height: "100%",
      padding: "22px",
      width: "auto",
      cursor: "pointer",
      maxWidth: "150px",
      minWidth: "110px",
    },
    selectedCell: {
      backgroundColor: "var(--Interactive-10, rgb(232, 248, 247))",
      cursor: "default",
    },
  }) satisfies CSSObject;
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

function Row({ data: { index, category, cells }, isSelected, selectCellHandler }: IRowProps) {
  const classes = customStyles(cells.length);
  return (
    <Typography component="div" sx={classes.row} key={"row" + index}>
      <Typography component="div" sx={classes.category} key={"category" + category.id + index}>
        <Typography component="div" sx={classes.categoryName}>
          {category.name}
        </Typography>
        <Typography component="div" sx={classes.categoryDescription}>
          {category.description}
        </Typography>
      </Typography>
      {cells.map((cell, colIndex) => (
        <Typography
          component="div"
          sx={{
            ...classes.cell,
            ...(isSelected(cell) ? classes.selectedCell : {}),
          }}
          key={"cell" + index + colIndex}
          onClick={() => selectCellHandler(cell)}
        >
          {cell.description}
        </Typography>
      ))}
    </Typography>
  );
}
export default Row;

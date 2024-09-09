import { Typography } from "@mui/material";
import { IAchievement } from "./Helpers";
import { CSSObject } from "../../utils/interfaces";
const customStyles = (size: number) =>
  ({
    headers: {
      display: "grid",
      gridTemplateColumns: `1.25fr ${Array(size).fill("1fr").join(" ")}`,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      width: "100%",
      textAlign: "center",
      height: "40px",
      "& div": {
        fontSize: "12px",
        "&:first-of-type": {
          textAlign: "left",
        },
      },
    },
  }) satisfies CSSObject;
interface IHeaderProps {
  title: string;
  headers: Omit<IAchievement, "description">[];
}
function Header({ title, headers }: IHeaderProps) {
  const classes = customStyles(headers.length);
  return (
    <Typography component="div" sx={classes.headers}>
      <Typography component="div" key="titleHead">
        {title}
      </Typography>
      {headers.map((head, index) => (
        <Typography component="div" key={"head" + index}>
          {`${head.title} (${head.score})`}
        </Typography>
      ))}
    </Typography>
  );
}

export default Header;

import { IAchievement } from "./Helpers";
interface IHeaderProps {
    title: string;
    headers: Omit<IAchievement, "description">[];
}
declare function Header({ title, headers }: IHeaderProps): import("react/jsx-runtime").JSX.Element;
export default Header;

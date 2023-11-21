import { AuthContextProvider } from "./_utils/auth-context";
 
/**
 * Renders the layout of the application with authentication context provider.
 * @param {Object} props - The props object containing the children to be rendered.
 * @returns {JSX.Element} - The JSX code for the layout with authentication context provider.
 */
const Layout = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};
 
export default Layout;
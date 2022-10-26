import "./App.css";

import { Route, Routes } from "react-router";

import { BrowserRouter } from "react-router-dom";
import ThemeContext from "contexts/theme-context";
import useTheme from "hooks/useTheme";
import Login from "pages/login";
import Header from "components/molecules/header";

function App() {
  const { theme, setTheme } = useTheme();
  return (
    <ThemeContext theme={theme}>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext>
  );
}

export default App;

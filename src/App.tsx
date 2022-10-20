import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import GlobalAnimations from "./styles/animations";
import GlobalStyle from "./styles/global";
import GlobalTypography from "./styles/typography";

// import Search from "./pages/Search";
// import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <GlobalTypography />
      <GlobalAnimations />

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/global";
import GlobalTypography from "./styles/typography";

// import Search from "./pages/Search";
// import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <GlobalTypography />

      <Routes>
        {/* <Route path="/" element={<Search />} />
        <Route path="user/:username" element={<User />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

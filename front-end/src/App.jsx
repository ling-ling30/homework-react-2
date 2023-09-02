import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBarComponent } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

import { Logout } from "./pages/logout";
import { DashboardNav } from "./components/DashboardNav";
import { Dashboard } from "./pages/Dashboard";
import { Collection } from "./pages/Collection";
import { BookForm } from "./components/bookForm";
import EditBookPage from "./pages/Editpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBarComponent />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<DashboardNav />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/books" element={<BookForm />} />
          <Route path="/books/:id" element={<EditBookPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

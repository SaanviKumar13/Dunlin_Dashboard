import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import UploadCsv from "./components/UploadCsv";
import Signin from "./pages/SignIn";
import Login from "./pages/Login";
import Transactions from "./pages/transactions";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route path="/uploadcsv" element={<UploadCsv />} />
          <Route path="/upload" element={<UploadCsv />} />
        </Route>
        <Route path="/transactions" element={<Transactions />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

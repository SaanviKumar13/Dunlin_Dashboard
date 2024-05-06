import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import PageNotFound from './pages/PageNotFound';
import UploadCsv from './components/UploadCsv';
import Signin from "./pages/SignIn";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/login' element={<Login/> } />
        <Route element={<AppLayout />}>
          <Route path='/uploadcsv' element={<UploadCsv />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

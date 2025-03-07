import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Country } from './pages/Country/Country';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

import './styles/globalStyle.scss';


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />} errorElement={<ErrorPage />}>
    <Route path="/" element={<Home />} />
    <Route path="country/:id" element={<Country />} />
    <Route path="*" element={<ErrorPage />} />
  </Route>
))


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App

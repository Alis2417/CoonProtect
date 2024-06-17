
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/main';
import AppHeader from './components/app-header';

function App() {
  const router =  createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: "courses",
          element: <MainPage />,
        },
        {
          path: "news",
          element: <MainPage />,
        },
        {
          path: "about",
          element: <MainPage />,
        },
        {
          path: "contacts",
          element: <MainPage />,
        },
        {
          path: "login",
          element: <MainPage />,
        },
        {
          path: "register",
          element: <MainPage />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <AppHeader></AppHeader>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/main';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import RegisterPage from './pages/register';
import NewsPage from './pages/news';
import AboutPage from './pages/about';
import ContactsPage from './pages/contacts';
import LoginPage from './pages/login';
import CoursesPage from './pages/courses';
import ProfilePage from './pages/profile';
import KeisPage from './pages/keis';

function App() {
  const router =  createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "",
          element: <MainPage />,
        },
        {
          path: "courses",
          element: <CoursesPage/>,
        },
        {
          path: "news",
          element: <NewsPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "contacts",
          element: <ContactsPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
        {
          path: "keis",
          element: <KeisPage />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <AppHeader></AppHeader>
      <RouterProvider router={router} />
      <AppFooter></AppFooter>
    </div>
  );
}

export default App;

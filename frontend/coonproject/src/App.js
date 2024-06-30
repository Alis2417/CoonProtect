import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import RegisterPage from './pages/register/registrat';
import NewsPage from './pages/news';
import AboutPage from './pages/about';
import ContactsPage from './pages/contacts';
import LoginPage from './pages/login';
import CoursesPage from './pages/courses';
import ProfilePage from './pages/profile';
import KeisPage from './pages/keis';

function App() {
  const path = window.location.pathname;
  const hideHeaderAndFooter = path === "/login" || path === "/register";

  return (
    <div className="App">
     <Router>
       <AppHeader />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/keis" element={<KeisPage />} />
        </Routes>
        {!hideHeaderAndFooter && <AppFooter />}
      </Router>

    </div>
  );
}

export default App;

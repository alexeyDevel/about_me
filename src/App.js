import logo from './logo.svg';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PageWrapper from './pages/PageWrapper/PageWrapper';
import MainPage from './pages/MainPage/MainPage';
import TaskPage from './pages/TaskPage/TaskPage';
import './reset.css';
import './App.scss';
import { useEffect } from 'react';



function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/about_me");
  }, []);

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route
          path="about_me"
          element={<MainPage />}
        />
        <Route path="task" element={<TaskPage />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;

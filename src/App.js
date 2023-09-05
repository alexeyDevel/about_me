import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import PageWrapper from './pages/PageWrapper/PageWrapper';
import MainPage from './pages/MainPage/MainPage';
import './reset.css';
import './App.scss';
import TaskPage from './pages/TaskPage/TaskPage';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route
          path="/"
          element={<MainPage />}
        />
        <Route path="task" element={<TaskPage />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;

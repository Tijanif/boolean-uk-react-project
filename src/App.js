import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import MainWrapper from './Components/MainWrapper';
import HomePage from './pages/HomePage';
import TeachersPage from './pages/TeachersPage';
import StudentssPage from './pages/StudentsPage';
import Footer from './Components/Footer';
import Cards from './Components/Cards';

import useStore from './store';
import './styles.css';

export default function App() {
  const fetchTeachers = useStore((store) => store.fetchTeachers);
  const teachers = useStore((store) => store.teachers);
  const fetchStudents = useStore((store) => store.fetchStudents);
  const students = useStore((store) => store.students);

  useEffect(() => {
    fetchTeachers();
    fetchStudents();
  }, []);

  return (
    <div className='App'>
      <MainWrapper>
        <Router>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/home'>
            <HomePage />
          </Route>
          <Route exact path='/teachers'>
            <TeachersPage />
          </Route>
          <Route exact path='/students'>
            <StudentssPage />
          </Route>
        </Router>
        <Footer />
      </MainWrapper>
    </div>
  );
}

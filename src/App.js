import { useEffect } from 'react';
import Footer from './Components/Footer/Footer';
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
      <Footer />
    </div>
  );
}

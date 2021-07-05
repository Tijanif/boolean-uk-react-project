import { useEffect } from 'react';
import useStore from './store';
import './styles.css';

export default function App() {
  const fetchTeachers = useStore((store) => store.fetchTeachers);
  const teachers = useStore((store) => store.teachers);

  useEffect(() => {
    fetchTeachers();
  }, []);

  console.log(fetchTeachers);
  console.log(teachers);
  return (
    <div className='App'>
      <h1>Hello Fulano</h1>
      <h2>Edit to see some magic happen!</h2>
    </div>
  );
}

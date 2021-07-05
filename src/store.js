import create from 'zustand';

const useStore = create((set, get) => ({
  teachers: [],
  fetchTeachers() {
    return fetch('http://localhost:3004/teachers')
      .then((resp) => resp.json())
      .then((teachers) => set({ teachers: teachers }));
  },
  students: [],
  fetchStudents() {
    return fetch('http://localhost:3004/students')
      .then((resp) => resp.json())
      .then((students) => set({ students: students }));
  },
}));

export default useStore;

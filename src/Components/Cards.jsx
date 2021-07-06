import Card from './Card';
import teacherImg from '../assets/images/teachers.jpeg';
import studentImg from '../assets/images/students.jpeg';

const Cards = () => {
  return (
    <>
      <h1>Welcome to my boolean year book</h1>
      <div className='wrapper-center'>
        <ul className='cards-wrapper'>
          <Card
            img={teacherImg}
            title={'Teachers'}
            alt={'picture of a teacher'}
            content={'Best teachers in the world'}
          />
          <Card
            img={studentImg}
            title={'Students'}
            alt={'picture of students'}
            content={'Best students in the world'}
          />
        </ul>
      </div>
    </>
  );
};

export default Cards;

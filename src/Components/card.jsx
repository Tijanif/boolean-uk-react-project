import styled from 'styled-components';
import useStore from '../store';

const Card = () => {
  const teachers = useStore((store) => store.teachers);
  console.log(teachers[1]);
  return (
    <div className='card'>
      <img
        src={teachers[1].image}
        alt={`${teachers[1].firstName} ${teachers[1].lastName}`}
        style={{ width: '50%' }}
      />
      <h1>{`${teachers[1].firstName} ${teachers[1].lastName}`}</h1>
      <p className='title'>{teachers[1].title}</p>
      <p>{teachers[1].school}</p>
      <a href='#'>
        <i className='fa fa-linkedin icons'></i>
      </a>
      <a href='#'>
        <i className='fa fa-github icons'></i>
      </a>
      <p>
        <button>Contact</button>
      </p>
    </div>
  );
};

export default styled(Card)`
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
  }
  .title {
    color: grey;
    font-size: 18px;
  }

  .button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }

  a {
    text-decoration: none;
    font-size: 22px;
    color: black;
    margin: 20px;
  }

  .fa {
    margin: 10px;
  }

  button:hover,
  a:hover {
    opacity: 0.7;
  }
`;

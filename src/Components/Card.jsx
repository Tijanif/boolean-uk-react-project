import '../css/Card.css';

const Card = ({ img, alt, title, content }) => {
  return (
    <li>
      <div className='card'>
        <img src={img} alt={alt} style={{ width: '100%' }} />
        <div className='container'>
          <h4>
            <b>{title}</b>
          </h4>
          <p>{content}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;

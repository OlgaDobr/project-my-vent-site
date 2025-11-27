import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Card.css'; 

function MyCard(props) {
  const [showInfo, setShowInfo] = useState(false);  // Начальное состояние: карточка отображается

  const handleClick = () => {
    setShowInfo(true); // При клике - показываем информацию
  };

  const handleBackClick = () => {
    setShowInfo(false); // Возвращаемся к карточке
  };



  return (
    <>
      {!showInfo ? (  // Если showInfo == false, показываем карточку

        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={props.imageUrl} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
            <Button variant="primary" onClick={handleClick}>Подробнее</Button>  
          </Card.Body>
        </Card>
      ) : ( // Иначе показываем информацию
        <div>
          <h2>{props.title} - Подробная информация</h2>
          {/* <p>Дополнительная информация, которую нужно отобразить...</p> */}
          <p>{props.fullDescription}</p>
          <Button variant="secondary" onClick={handleBackClick}>Назад к карточке</Button>
        </div>
      )}
    </>

  );
}

export default MyCard;


//исходный код
	// import React from 'react';
	// import { Card as BootstrapCard, Button } from 'react-bootstrap';
    // import './Card.css'; // Ваши стили для карточек
	
	// function Card({ imageUrl, title, description, link }) {
	//   return (
	//     <BootstrapCard className="custom-card">
	//       <BootstrapCard.Img variant="top" src={imageUrl} alt={title} />
	//       <BootstrapCard.Body>
	//         <BootstrapCard.Title>{title}</BootstrapCard.Title>
	//         <BootstrapCard.Text>{description}</BootstrapCard.Text>
	//         {link && (
	//           <Button variant="primary" href={link} target="_blank" rel="noopener noreferrer">
	//             Подробнее
	//           </Button>
	//         )}
	//       </BootstrapCard.Body>
	//     </BootstrapCard>
	//   );
	// }
	
	// export default Card;



	


	





	
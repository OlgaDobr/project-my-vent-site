import React from 'react';
import { Card as BootstrapCard, Button } from 'react-bootstrap';


// import React, { useState } from 'react';
// import { Card, Button, Modal } from 'react-bootstrap';


// import React, { useState } from 'react';
// import { Card, Button, Collapse } from 'react-bootstrap';




import './Card.css'; 
	
	function Card({ imageUrl, title, description, link }) {
	  return (
	    <BootstrapCard className="custom-card">
	      <BootstrapCard.Img variant="top" src={imageUrl} alt={title} />
	      <BootstrapCard.Body>
	        <BootstrapCard.Title>{title}</BootstrapCard.Title>
	        <BootstrapCard.Text>{description}</BootstrapCard.Text>
	        {link && (
	          <Button variant="primary" href={link} target="_blank" rel="noopener noreferrer">
	            Подробнее
	          </Button>

            
	        )}
	      </BootstrapCard.Body>
	    </BootstrapCard>
	  );
	}

    

	export default Card;




// const items = [
//   {
//     id: 1,
//     title: 'Карточка 1',
//     excerpt: 'Короткое описание 1',
//     details: 'Подробная информация о карточке 1. Здесь можно привести любой текст.',
//     image: '/assets/img/Вентилятор.jpeg'
//   },
//   {
//     id: 2,
//     title: 'Карточка 2',
//     excerpt: 'Короткое описание 2',
//     details: 'Подробная информация о карточке 2. Дополнительные сведения.',
//     image: 'https://via.placeholder.com/150'
//   },
//   // добавляйте по вкусу
// ];

// function CardsWithModal() {
//   const [show, setShow] = useState(false);
//   const [active, setActive] = useState(null);

//   const handleOpen = (item) => {
//     setActive(item);
//     setShow(true);
//   };

//   const handleClose = () => {
//     setShow(false);
//     setActive(null);
//   };

//   return (
//     <>
//       <div className="d-flex flex-wrap gap-3">
//         {items.map((item) => (
//           <Card key={item.id} style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={item.image} />
//             <Card.Body>
//               <Card.Title>{item.title}</Card.Title>
//               <Card.Text>{item.excerpt}</Card.Text>
//               <Button variant="primary" onClick={() => handleOpen(item)}>
//                 Подробнее
//               </Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{active?.title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>{active?.details}</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Закрыть
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default CardsWithModal;



// const items = [
//   {
//     id: 1,
//     title: 'Карточка 1',
//     excerpt: 'Короткое описание 1',
//     details: 'Подробная информация о карточке 1. Здесь можно привести любой текст.',
//     image: 'src/assets/img/Вентилятор.jpeg'
//   },
//   {
//     id: 2,
//     title: 'Карточка 2',
//     excerpt: 'Короткое описание 2',
//     details: 'Подробная информация о карточке 2. Дополнительные сведения.',
//     image: 'https://via.placeholder.com/150'
//   },
// ];

// function CardsWithCollapse() {
//   const [openId, setOpenId] = useState(null);

//   const toggle = (id) => {
//     setOpenId((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div className="d-flex flex-wrap gap-3">
//       {items.map((item) => (
//         <div key={item.id} style={{ width: '18rem' }}>
//           <Card>
//             <Card.Img variant="top" src={item.image} />
//             <Card.Body>
//               <Card.Title>{item.title}</Card.Title>
//               <Card.Text>{item.excerpt}</Card.Text>
//               <Button
//                 variant="primary"
//                 onClick={() => toggle(item.id)}
//               >
//                 Подробнее
//               </Button>
//               <Collapse in={openId === item.id}>
//                 <div className="mt-2">
//                   {item.details}
//                 </div>
//               </Collapse>
//             </Card.Body>
//           </Card>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CardsWithCollapse;




	

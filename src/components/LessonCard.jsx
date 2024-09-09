import React from 'react'
import { data } from '../helper/data';

const LessonCard = () => {
  return (
    <div className='container'>
      <div className='row'>
        {data.map((item, index) => {
          return (
            <div key={index} className='col-lg-6 col-12 d-flex align-items-center gap-3 mb-4'>
              <img 
                src={item.image} 
                alt="icon" 
                className="img-fluid" 
                style={{ width: '100px', height: '100px' }} 
              />
              <div className='flex-grow-1'>
                <h4>Lesson Name: {item.name}</h4>
                <h4>Lesson Hour: {item.hour}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LessonCard;
import React from 'react';


const generateStars = (rating) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <span key={index} role="img" aria-label="star">
      ⭐ 
    </span>
  ));
  return stars;
};

const CustomerReview = ({ name, rating, comment }) => (
  <div className="review" style={styles.review}>
    <h3 style={styles.heading}>{name}</h3>
    <p style={styles.rating}>
      <strong>Rating: </strong>
      {generateStars(rating)}
    </p>
    <p style={styles.comment}>{comment}</p>
  </div>
);

const CustomerReviews = () => {
 
  const reviews = [
    {
      name: 'Customer 1',
      rating: 5,
      comment: 'I love the product! It exceeded my expectations.'
    },
    {
      name: 'Customer 2',
      rating: 4,
      comment: 'Great purchase. The quality is impressive.'
    },
    {
      name: 'Customer 3',
      rating: 3,
      comment: 'Good product, but it could be better in terms of durability.'
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Customer Reviews</h2>
      {reviews.map((review, index) => (
        <CustomerReview key={index} {...review} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: '60%',
    margin: 'auto',
  },
  review: {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '15px',
  },
  heading: {
    color: '#333',
  },
  rating: {
    margin: '5px 0',
    color: '#007bff',
  },
  comment: {
    margin: '5px 0',
  },
};

export default CustomerReviews;

import React, { useState, useEffect } from "react";
import "./DynamicRenderingReviews.css"; // Импортируйте файл стилей

const DynamicRenderingReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const reviewsPerPage = 15; // Количество отзывов на одной странице

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/testimonials");
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        } else {
          console.error("Ошибка получения данных");
        }
      } catch (error) {
        console.error("Произошла ошибка:", error);
      }
    };

    fetchReviews();
  }, []);

  const startIndex = (page - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const displayedReviews = reviews.slice(startIndex, endIndex);

  return (
    <div className="reviews-container">
      <h1 className="Testimonials">Testimonials</h1>
      <div className="reviews-grid">
        {displayedReviews.map((review) => (
          <div className="review-card" key={review.id}>
            <div className="infoOfReview">
              <p> {review.employee}</p>
              <p>
                {review.employee_position}- {review.company}
              </p>
              <p>{review.review}</p>
            </div>
            <div className="user-info">
              <div className="user-photo">
                <div>
                  <img src="/Avatar (1).svg" alt="Логотип" />
                </div>
              </div>
              <div className="user-details">
                <h2>{review.reviewer}</h2>
                <div className="user-rating">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span
                      key={index}
                      className={
                        index < review.rating ? "star-filled" : "star-empty"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Предыдущая страница
        </button>
        <span>Страница {page}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={endIndex >= reviews.length}
        >
          Следующая страница
        </button>
      </div>
    </div>
  );
};

export default DynamicRenderingReviews;

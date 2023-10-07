import React, { useState, useEffect } from "react";
import "./DynamicRenderingReviews.css";

const DynamicRenderingReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const reviewsPerPage = 15;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/testimonials");
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        } else {
          console.error("Error receiving data");
        }
      } catch (error) {
        console.error("An error has occurred:", error);
      }
    };

    fetchReviews();
  }, []);

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handlePageClick = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const startIndex = (page - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const displayedReviews = reviews.slice(startIndex, endIndex);

  const pageButtons = [];
  const visiblePageRange = 1;

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= page - 1 && i <= page + 1) ||
      (i <= visiblePageRange && page <= visiblePageRange + 1) ||
      (i >= totalPages - visiblePageRange + 1 &&
        page >= totalPages - visiblePageRange)
    ) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={i === page ? "page-button active-page" : "page-button"}
        >
          {i}
        </button>
      );
    } else if (
      (i === 2 && page > visiblePageRange + 2) ||
      (i === totalPages - 1 && page < totalPages - visiblePageRange)
    ) {
      pageButtons.push(<span key={`ellipsis-${i}`}>...</span>);
    }
  }

  return (
    <div className="reviews-container">
      <h1 className="Testimonials">Testimonials</h1>
      <div className="reviews-grid">
        {displayedReviews.map((review) => (
          <div className="review-card" key={review.id}>
            <div className="infoOfReview">
              <p>{review.employee}</p>
              <p>
                {review.employee_position}- {review.company}
              </p>
              <p>{review.review}</p>
            </div>
            <div className="user-info">
              <div className="user-photo">
                <div>
                  <img src="/Avatar.svg" alt="Avatar"  loading='lazy'/>
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
        <button
          onClick={() => handlePageClick(page - 1)}
          className={page === 1 ? "page-button disabled" : "page-button"}
          disabled={page === 1}
        >
          &lt;
        </button>
        {pageButtons}
        <button
          onClick={() => handlePageClick(page + 1)}
          className={
            page === totalPages ? "page-button disabled" : "page-button"
          }
          disabled={page === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default DynamicRenderingReviews;
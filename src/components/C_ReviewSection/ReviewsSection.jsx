import React, { useState } from 'react';

const ReviewCard = ({ name, rating, date, text }) => {
return (
    <div className="border rounded-lg p-4 mb-4 shadow-md">
    <div className="flex items-center justify-between">
        <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{date}</p>
        </div>
        <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <box-icon 
            key={i}
            name="star" 
            type="solid" 
            color={i < rating ? "#FFD700" : "#E5E7EB"}
            size="md"
            ></box-icon>
        ))}
        </div>
    </div>
    <p className="mt-2 text-gray-700">{text}</p>
    </div>
);
};

const ReviewSection = () => {
const allReviews = [
    {
    name: 'John Doe',
    rating: 4,
    date: 'June 10, 2024',
    text: 'Great product! I really enjoyed using it and found it very helpful.',
    },
    {
    name: 'Jane Smith',
    rating: 5,
    date: 'June 11, 2024',
    text: 'Amazing! Exceeded my expectations in every way.',
    },
    {
    name: 'Bob Johnson',
    rating: 3,
    date: 'June 12, 2024',
    text: 'It was okay, but I found some issues that need to be addressed.',
    },
    {
    name: 'Alice Brown',
    rating: 4,
    date: 'June 13, 2024',
    text: 'Good value for the price. Will buy again.',
    },
    {
    name: 'Charlie Davis',
    rating: 2,
    date: 'June 14, 2024',
    text: 'Not what I expected. Quality could be better.',
    },
];

const [showMoreReviews, setShowMoreReviews] = useState(false);

return (
    <div className="max-w-2xl mx-4 p-4 md:ml-[5%] md:mr-[5%] md:max-w-screen-2xl">
    <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
    {showMoreReviews ? (
        allReviews.map((review, index) => (
        <ReviewCard 
            key={index}
            name={review.name}
            rating={review.rating}
            date={review.date}
            text={review.text}
        />
        ))
    ) : (
        allReviews.slice(0, 3).map((review, index) => (
        <ReviewCard 
            key={index}
            name={review.name}
            rating={review.rating}
            date={review.date}
            text={review.text}
        />
        ))
    )}
    <div className="flex justify-center mt-8 mb-20 md:mb-44">
        <button
        onClick={() => setShowMoreReviews(!showMoreReviews)}
        className="text-white bg-yellow-700 lg:text-xl px-4 py-2 rounded-2xl hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1 whitespace-nowrap"
        >
        {showMoreReviews ? 'Hide' : 'Load More'}
        </button>
    </div>
    </div>
);
};

export default ReviewSection;
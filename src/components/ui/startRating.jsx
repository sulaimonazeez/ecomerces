import { StarIcon } from "./tools.jsx";


export const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <StarIcon
        key={i}
        className={`w-4 h-4 ${i < fullStars ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    );
  }
  return <div className="flex items-center space-x-0.5">{stars}</div>;
};
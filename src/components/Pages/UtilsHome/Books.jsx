import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Books = ({book}) => {
  const {bookId, bookName, author, rating, category, tags, image} = book
  // console.log(typeof(bookId, bookName, author, rating, category, tags, image))
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 p-4 pb-0 border-2 h-[460px]">
        <figure><img src={image} className='h-40' alt="Book Image" /></figure>
        <div className="card-body px-2 space-y-2">
          <div className="flex gap-2 items-center justify-center"> Tags:
            {
              tags.map((tag, index) => <div className='bg-gray-200 p-2 rounded-md text-green-500' key={index}>#{tag}</div>)
            }
          </div>
          <h2 className="text-center text-green-500 font-bold text-2xl">{bookName}</h2>
          <p className='text-center text-gray-500 font-bold'>By: {author}</p>
          <hr className='border-dashed border-t-2' />
          <div className="flex justify-between font-bold">
            <div>{category}</div>
            <div className='flex items-center gap-1'>{rating}<FaRegStar /></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Books;

Books.propTypes = {
  book : PropTypes.object,
  bookId : PropTypes.string, 
  bookName : PropTypes.string,
  author : PropTypes.string, 
  rating : PropTypes.string, 
  category : PropTypes.string, 
  tags : PropTypes.string, 
  image : PropTypes.string,
}
import { useLoaderData, useParams } from "react-router-dom";
import { saveRead } from "../../utility/locatStorage";

const BookDetails = () => {

  const books = useLoaderData();
  // console.log(books)
  const {bookId} = useParams();
  // console.log(bookId)
  const idInt = parseInt(bookId);
  const book = books.find(book => book.bookId === idInt);
  // console.log(book);

  const handleReadList = book => {
    console.log("Book added");
    saveRead(book);
  }

  return (
    <div>
      <div className="hero bg-base-200 p-2">
        <div className="hero-content flex-col lg:flex-row justify-between gap-6">
          <img src={book.image} className="h-60 rounded-lg shadow-2xl" />
          <div className="flex-1 space-y-1">
            <h2 className="text-green-500 font-bold text-3xl">{book.bookName}</h2>
            <p className='text-gray-500 font-bold text-xl'>By: {book.author}</p>
            <hr className="border-t-2" />
            <p className="font-bold">{book.category}</p>
            <hr className="border-t-2" />
            <p><span className="font-bold">Review:</span> {book.review}</p>
            <div className="flex gap-2 items-center"><span className="font-extrabold">Tags:</span> 
            {
              book.tags.map((tag, index) => <div className='bg-gray-200 p-2 rounded-md text-green-500' key={index}>#{tag}</div>)
            }
            </div>
            <hr className="border-t-2" />
            <div>
              <table>
                <tbody>
                  <tr>
                    <td className="text-gray-500 p-2">Number of Pages:</td>
                    <td className="font-bold p-2">{book.totalPages}</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500 p-2">Publisher:</td>
                    <td className="font-bold p-2">{book.publisher}</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500 p-2">Year of Publishing:</td>
                    <td className="font-bold p-2">{book.yearOfPublishing}</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500 p-2">Rating:</td>
                    <td className="font-bold p-2">{book.rating}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex gap-3">
              <button onClick={() => handleReadList(book)} className="btn bg-white border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white hover:border-0">Read</button>
              <button className="btn btn-secondary bg-blue-500 border-0">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
import { useLoaderData } from "react-router-dom";
import Banner from "./UtilsHome/Banner";
import Books from "./UtilsHome/Books";

const Home = () => {
  const books = useLoaderData();
  console.log(books)

  return (
    <div className="sm:px-1 md:px-3 lg:px-12">
      <Banner></Banner>
      <div className="space-y-4 p-7">
        <h3 className="text-center text-green-500 font-extrabold text-5xl py-3">Books</h3>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
         {
          books.map(book => <Books key={book.bookId} book={book}></Books>)
         }
        </div>
      </div>
    </div>
  );
};

export default Home;
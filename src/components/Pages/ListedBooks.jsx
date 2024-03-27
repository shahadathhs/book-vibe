import { IoIosArrowDropdown } from "react-icons/io";
import { getReadBooks, getWishBooks } from "../utility/locatStorage";
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { SlLocationPin } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const handleSorting = sorting => {
  let rBook = getReadBooks()
  let wBook = getWishBooks()

  if (sorting === 'rating') {
    
    const sortedRBooks = rBook.sort((a, b) => b.rating - a.rating);
    const sortedWBooks = wBook.sort((a, b) => b.rating - a.rating);
    return console.log(sortedRBooks, sortedWBooks)
  
  } else if (sorting === 'numberOfPages') {
    
    const sortedRBooks = rBook.sort((a, b) => b.totalPages - a.totalPages);
    const sortedWBooks = wBook.sort((a, b) => b.totalPages - a.totalPages);
    return console.log(sortedRBooks, sortedWBooks)
  
  }else if (sorting === 'publishYear') {
    
    const sortedRBooks = rBook.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    const sortedWBooks = wBook.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    return console.log(sortedRBooks, sortedWBooks)
  
  }
}

const ListedBooks = () => {

  const [tabIndex, setTabIndex] = useState(0);

  let readBooks = getReadBooks()
  let wishBooks = getWishBooks()

  return (
    <div>
      <div className="sm:px-1 md:px-3 lg:px-12 sm:py-2 md:py-3 lg:py-6">
        <p className="p-6 bg-base-200 text-center text-green-500 rounded-lg text-4xl font-extrabold">Books</p>
        <div className="text-center p-3">
          <details className="dropdown">
            <summary className="m-1 btn bg-green-500 text-white text-xl hover:bg-blue-500">Sort By <IoIosArrowDropdown /></summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40 text-gray-500">
              <li onClick={() => handleSorting('rating')}><a>Rating</a></li>
              <li onClick={() => handleSorting('numberOfPages')}><a>Number of pages</a></li>
              <li onClick={() => handleSorting('publishYear')}><a>Publish year</a></li>
            </ul>
          </details>
        </div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Read Books</Tab>
        <Tab>Wishlist Books</Tab>
      </TabList>
      <TabPanel>
        {
          readBooks.map(readBook => 
          <div key={readBook.bookId}>
            <div className="hero p-2 rounded-xl my-3 bg-base-200">
              <div className="hero-content gap-6 justify-between flex-col lg:flex-row">
                <img src={readBook.image} className="h-60 rounded-lg shadow-2xl" />
                <div className='space-y-3 flex-1'>
                  <h2 className="text-green-500 font-bold text-3xl">{readBook.bookName}</h2>
                  <p className='text-gray-500 font-bold text-xl'>By: {readBook.author}</p>
                  <div className='flex flex-col md:flex-col lg:flex-row gap-3'>
                    <div className="flex gap-2 items-center font-bold"><span className="font-extrabold">Tags:</span> 
                    {
                      readBook.tags.map((tag, index) => <div className='bg-gray-200 p-3 rounded-full text-green-500' key={index}>#{tag}</div>)
                    }
                    </div>
                    <div className='flex gap-2 items-center text-gray-500'>
                    <SlLocationPin /><p>Year of Publishing:</p>{readBook.yearOfPublishing}
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-col lg:flex-row gap-3 text-gray-500'>
                    <div className="flex gap-2 items-center">
                      <GoPeople /><p> Publisher:</p>{readBook.publisher}
                    </div>
                    <div className="flex gap-2 items-center">
                      <HiOutlineNewspaper /> <p>Page:</p> {readBook.totalPages}
                    </div>
                  </div>
                  <hr className="border-t-2" />
                  <div className='flex flex-col md:flex-col lg:flex-row gap-3'>
                    <div className='rounded-full text-blue-600 bg-blue-200 font-semibold p-3'>
                      <p> Category: {readBook.category}</p>
                    </div>
                    <div className='rounded-full text-orange-600 bg-orange-200 font-semibold p-3'>
                      <p>Rating: {readBook.rating}</p>
                    </div>
                    <Link to={`/books/${readBook.bookId}`} className='rounded-full text-white bg-green-500 hover:bg-blue-500 font-semibold p-3'>
                      <p>View Details</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>)
        }
      </TabPanel>
      <TabPanel>
        {
          wishBooks.map(wishBook => 
            <div key={wishBook.bookId}>
            <div className="hero p-2 rounded-xl my-3 bg-base-200">
              <div className="hero-content gap-6 justify-between flex-col lg:flex-row">
                <img src={wishBook.image} className="h-60 rounded-lg shadow-2xl" />
                <div className='space-y-3 flex-1'>
                  <h2 className="text-green-500 font-bold text-3xl">{wishBook.bookName}</h2>
                  <p className='text-gray-500 font-bold text-xl'>By: {wishBook.author}</p>
                  <div className='flex flex-col md:flex-col lg:flex-row gap-3'>
                    <div className="flex gap-2 items-center font-bold"><span className="font-extrabold">Tags:</span> 
                    {
                      wishBook.tags.map((tag, index) => <div className='bg-gray-200 p-3 rounded-full text-green-500' key={index}>#{tag}</div>)
                    }
                    </div>
                    <div className='flex gap-2 items-center text-gray-500'>
                    <SlLocationPin /><p>Year of Publishing:</p>{wishBook.yearOfPublishing}
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-col lg:flex-row gap-3 text-gray-500'>
                    <div className="flex gap-2 items-center">
                      <GoPeople /><p> Publisher:</p>{wishBook.publisher}
                    </div>
                    <div className="flex gap-2 items-center">
                      <HiOutlineNewspaper /> <p>Page:</p> {wishBook.totalPages}
                    </div>
                  </div>
                  <hr className="border-t-2" />
                  <div className='flex flex-col md:flex-col lg:flex-row gap-3'>
                    <div className='rounded-full text-blue-600 bg-blue-200 font-semibold p-3'>
                      <p> Category: {wishBook.category}</p>
                    </div>
                    <div className='rounded-full text-orange-600 bg-orange-200 font-semibold p-3'>
                      <p>Rating: {wishBook.rating}</p>
                    </div>
                    <Link to={`/books/${wishBook.bookId}`} className='rounded-full text-white bg-green-500 hover:bg-blue-500 font-semibold p-3'>
                      <p>View Details</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>)
        }
      </TabPanel>
    </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
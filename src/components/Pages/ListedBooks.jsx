import { IoIosArrowDropdown } from "react-icons/io";
import TabData from "./UtilsListedBook/TabData";

const ListedBooks = () => {
  return (
    <div>
      <div className="sm:px-1 md:px-3 lg:px-12 sm:py-2 md:py-3 lg:py-6">
        <p className="p-6 bg-base-200 text-center text-green-500 rounded-lg text-4xl font-extrabold">Books</p>
        <div className="text-center p-3">
          <details className="dropdown">
            <summary className="m-1 btn bg-green-500 text-white text-xl hover:bg-blue-500">Sort By <IoIosArrowDropdown /></summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40 text-gray-500">
              <li><a>Rating</a></li>
              <li><a>Number of pages</a></li>
              <li><a>Publish year</a></li>
            </ul>
          </details>
        </div>
        <TabData></TabData>
      </div>
    </div>
  );
};

export default ListedBooks;
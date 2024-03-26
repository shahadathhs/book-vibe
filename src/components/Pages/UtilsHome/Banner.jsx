import { Link } from 'react-router-dom';
import heroimg from '../../../assets/pngwing 1.png'

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between lg:gap-20">
          <img src={heroimg} className="rounded-lg" />
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-5xl font-bold text-blue-500">Books to freshen <br/> up your bookshelf</h1>
            <Link to='/ListedBooks' className="btn btn-primary text-white border-0 bg-green-500">View The List</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
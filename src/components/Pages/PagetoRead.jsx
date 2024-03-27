import PropTypes from 'prop-types';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getReadBooks } from '../utility/locatStorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink','#0088FE', '#00C49F', '#FFBB28',];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height  } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagetoRead = () => {
  
  let pageBooks = getReadBooks()
  const namesPages = pageBooks.map(book => {
    return {
      name: book.bookName,
      uv: book.totalPages,
    };
  });
  console.log(namesPages)
 
  return (
    <div className='flex justify-center items-center h-full w-full bg-base-200 p-5'>
      <BarChart
        width={900}
        height={400}
        data={namesPages}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis angle={-20} dataKey="name"  />
        <YAxis />
        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {namesPages.map((entry, index) => (
            <Cell key={`${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default PagetoRead;

TriangleBar.propTypes = {
  x : PropTypes.number,
  y : PropTypes.number,
  width : PropTypes.number,
  height : PropTypes.number,
  fill : PropTypes.string,
}

// textAnchor="end"
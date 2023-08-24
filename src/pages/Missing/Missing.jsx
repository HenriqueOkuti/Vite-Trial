import { Link } from 'react-router-dom';

function Missing() {
  return (
    <>
      <div>No such page</div>
      <Link to='/'>Home</Link>
    </>
  );
}

export default Missing;

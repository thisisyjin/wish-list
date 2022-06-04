import { Link } from 'react-router-dom';
const Deleted = () => {
  return (
    <div className="deleted-content">
      <p className="deleted-text">
        Your wish come true! <br />
        Keep Going!
      </p>
      <Link to="/">OK</Link>
    </div>
  );
};
export default Deleted;

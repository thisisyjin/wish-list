import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

const Wish = ({ text, deleteWishes, id }) => {
  const onClickButton = () => {
    deleteWishes();
  };
  return (
    <li>
      <Link className="detail-link" to={`/${id}`}>
        {text}
      </Link>
      <button className="home-delete-button" onClick={onClickButton}>
        DEL
      </button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteWishes: () => dispatch(actionCreators.deleteWish(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(Wish);

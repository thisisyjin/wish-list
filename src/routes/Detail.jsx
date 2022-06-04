import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';
import Deleted from '../components/Deleted';

const Detail = ({ wish, deleteTodo }) => {
  const { id } = useParams();
  const wishText = wish.find((wish) => wish.id === parseInt(id));

  const onClickButton = () => {
    deleteTodo(id);
    console.log(wish);
  };

  const writtenDate = new Date(+id);
  const year = writtenDate.getFullYear();
  const month = writtenDate.getMonth() + 1;
  const date = writtenDate.getDate();

  const writtenDateString = `${year}-${month.toString().padStart(2, '0')}-${date
    .toString()
    .padStart(2, '0')}`;

  return (
    <>
      <header>
        <h1 className="header-logo">
          <Link to="/">WISH LIST</Link>
        </h1>
      </header>
      {wishText ? (
        <>
          <div>I wish ...</div>
          <h2 className="wish-title">{wishText.text}</h2>
          <h5 className="">written date : {writtenDateString}</h5>
          <button className="detail-delete-button" onClick={onClickButton}>
            DELETE
          </button>
        </>
      ) : (
        <Deleted />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    wish: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(actionCreators.deleteWish(+id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

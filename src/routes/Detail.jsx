import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, StyledMain } from '../styles/HomeStyle';
import {
  StyledDetailHeader,
  StyledSpan,
  DetailInfo,
} from '../styles/DetailStyle';
import { actionCreators } from '../store';
import Deleted from '../components/Deleted';
import { ReactComponent as Delete } from '../assets/delete.svg';

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
      <Container>
        <StyledDetailHeader>
          <h1 className="header-logo">
            <span className="header-span">
              {' '}
              “ If you sincerely hope, It will come true. “
            </span>
            <Link to="/">WISH LIST</Link>
          </h1>
        </StyledDetailHeader>
        <StyledMain>
          {wishText ? (
            <>
              <StyledSpan>I wish ...</StyledSpan>
              <DetailInfo>
                <h2 className="wish-title">{wishText.text}</h2>
                <h5 className="wish-date">
                  <span className="date-title">written date </span>{' '}
                  {writtenDateString}
                </h5>
                <button
                  className="detail-delete-button"
                  onClick={onClickButton}
                >
                  <Delete />
                </button>
              </DetailInfo>
            </>
          ) : (
            <Deleted />
          )}
        </StyledMain>
      </Container>
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

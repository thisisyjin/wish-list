import { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import { Container, StyledHeader, StyledMain } from '../styles/HomeStyle';
import { ReactComponent as Plus } from '../assets/plus.svg';
import { ReactComponent as Clear } from '../assets/clear.svg';

import Wish from '../components/Wish';

const Home = ({ wishes, addWishes, clearAll }) => {
  const [text, setText] = useState('');
  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    addWishes(text);
    setText('');
  };

  const clearLocal = () => {
    clearAll();
  };

  return (
    <>
      <Container>
        <StyledHeader>
          <h1 className="header-logo">
            <Link to="/">WISH LIST</Link>
          </h1>
          <form onSubmit={onSubmitForm}>
            <input
              type="text"
              value={text}
              onChange={onChangeInput}
              className="wish-input"
              placeholder="If you sincerely hope, It will come true."
            />
            <button className="wish-button">
              <Plus />
            </button>
          </form>
        </StyledHeader>
        <StyledMain>
          <ul className="wish-list">
            {wishes.map((wish) => (
              <Wish text={wish.text} id={wish.id} key={wish.id} />
            ))}
          </ul>
          <button className="clear-button" onClick={clearLocal}>
            <Clear />
          </button>
        </StyledMain>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return { wishes: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addWishes: (text) => {
      dispatch(actionCreators.addWish(text));
    },
    clearAll: () => {
      dispatch(actionCreators.clearAll());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import { Container, StyledHeader, StyledMain } from '../styles/HomeStyle';
import { ReactComponent as Plus } from '../assets/plus.svg';
import { ReactComponent as Clear } from '../assets/clear.svg';

import Wish from '../components/Wish';

const Home = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const wishes = useSelector((state) => state);

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(actionCreators.addWish(text));
    setText('');
  };

  const clearLocal = () => {
    dispatch(actionCreators.clearAll());
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

export default Home;

import { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

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
      <header>
        <h1 className="header-logo">
          <Link to="/">WISH LIST</Link>
        </h1>
      </header>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          value={text}
          onChange={onChangeInput}
          className="wish-input"
        />
        <button className="wish-button">Add</button>
      </form>
      <ul className="wish-list">
        {wishes.map((wish) => (
          <Wish text={wish.text} id={wish.id} key={wish.id} />
        ))}
      </ul>
      <button className="clear-button" onClick={clearLocal}>
        Clear All
      </button>
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

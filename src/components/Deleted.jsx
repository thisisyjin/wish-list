import { StyledLink, DeleteBlock } from '../styles/DetailStyle';
import { ReactComponent as Delete } from '../assets/delete.svg';

const Deleted = () => {
  return (
    <DeleteBlock>
      <div className="deleted-content">
        <Delete />
        <p className="deleted-text">
          Your wish come true! <br />
          Keep Going!
        </p>
        <StyledLink to="/">OK</StyledLink>
      </div>
    </DeleteBlock>
  );
};
export default Deleted;

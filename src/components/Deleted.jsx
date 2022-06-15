import { StyledLink, DeleteBlock } from '../styles/DetailStyle';
import { ReactComponent as Delete } from '../assets/delete.svg';
import { useParams } from 'react-router-dom';

const Deleted = () => {
  const { id } = useParams();
  const dateDiff = new Date() - new Date(+id);
  const perDay = 24 * 60 * 60 * 1000;
  const dayCount = Math.floor(dateDiff / perDay);

  return (
    <DeleteBlock>
      <div className="deleted-content">
        <Delete />
        <p className="deleted-text">
          Your wish comes true! <br />
          Keep Going!
          <span className="date-diff">in {dayCount} days</span>
        </p>

        <StyledLink to="/">OK</StyledLink>
      </div>
    </DeleteBlock>
  );
};
export default Deleted;

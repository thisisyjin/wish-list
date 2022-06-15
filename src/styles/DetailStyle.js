import styled from 'styled-components';
import { pallet } from '../assets/lib/pallet';
import { Link } from 'react-router-dom';

export const StyledDetailHeader = styled.header`
  width: 100%;
  height: 35%;
  background-color: ${pallet.gray[0]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .header-logo {
    font-weight: 400;
    font-size: 32px;
    a {
      transition: all 0.15s ease-in-out;
      &:hover,
      &:active {
        transform: scale(1.1);
        font-weight: 700;
        color: ${pallet.skyblue[2]};
        text-shadow: 1px 1px #333;
      }
    }

    .header-span {
      display: block;
      font-size: 10px;
      color: ${[pallet.gray[1]]};
      margin-bottom: 10px;
    }
  }
`;

export const StyledSpan = styled.div`
  text-align: center;
  color: ${pallet.skyblue[1]};
  margin: 30px 0;
  font-weight: 700;
`;

export const DetailInfo = styled.div`
  text-align: center;
  .wish-title {
    padding: 20px 10px;
    background-color: #fff;
    border-radius: 100px;
    border: 6px solid #88888815;
    margin-bottom: 60px;
    font-size: 20px;

    &::before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      background-color: ${pallet.skyblue[2]};
      border-radius: 50%;
      margin-right: 10px;
    }
  }

  .wish-date {
    margin-bottom: 40px;
    letter-spacing: 0.02em;
    .date-title {
      font-size: 18px;
      font-weight: 400;
      margin-right: 20px;
    }
  }

  .detail-delete-button {
    cursor: pointer;
    background-color: transparent;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    &:hover,
    &:active {
      transform: scale(1.1);
      filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));
    }
  }
`;

// Deleted

export const DeleteBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  svg {
    margin-bottom: 35px;
  }

  .deleted-text {
    margin-bottom: 40px;
    line-height: 1.75;

    .date-diff {
      display: block;
      color: ${pallet.skyblue[1]};
      font-size: 14px;
      margin-top: 10px;
      font-weight: 500;
    }
  }
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  margin: 0 auto;
  display: block;
  width: 120px;
  background-color: ${pallet.skyblue[2]};
  padding: 15px 10px;
  border-radius: 100px;
  font-size: 20px;
  color: #fff;
  font-weight: 700;

  &:hover,
  &:active {
    background-color: ${pallet.skyblue[1]};
  }
`;

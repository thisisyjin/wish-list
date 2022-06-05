import styled from 'styled-components';
import { pallet } from '../assets/lib/pallet';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const StyledHeader = styled.header`
  width: 100%;
  height: 35%;
  background-color: ${pallet.gray[0]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header-logo {
    font-weight: 400;
    font-size: 32px;
    margin-bottom: 20px;
    transition: all 0.15s ease-in-out;
    &:hover,
    &:active {
      transform: scale(1.1);
      font-weight: 700;
      color: ${pallet.skyblue[2]};
      text-shadow: 1px 1px #333;
    }
  }

  .wish-input {
    text-align: center;
    width: 200px;
    font-size: 10px;
    background-color: transparent;
    padding: 4px 0;
    border-bottom: 1px solid #fff;
    color: ${pallet.gray[2]};
    margin-bottom: 16px;

    &::placeholder {
      color: ${pallet.gray[1]};
    }

    &:focus {
      &::placeholder {
        color: transparent;
      }
    }
  }

  .wish-button {
    display: block;
    cursor: pointer;
    margin: 0 auto;
    svg {
    }
    &:hover,
    &:active {
      svg rect:first-child {
        fill: ${pallet.skyblue[1]};
      }
    }
  }
`;

export const StyledMain = styled.main`
  height: 75%;
  background-color: ${pallet.skyblue[0]};
  padding: 10% 10%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .wish-list {
    letter-spacing: -0.02em;

    li {
      margin-bottom: 30px;
      font-size: 16px;
    }

    .detail-link {
      margin-right: 20px;
      &:hover,
      &:active {
        color: ${pallet.skyblue[2]};
        font-weight: 700;
      }
      &::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${pallet.skyblue[2]};
        margin-right: 10px;
      }
    }

    .home-delete-button {
      cursor: pointer;
      position: relative;
      top: 3px;
      background-color: transparent;
      padding: 0;
      transition: all 0.15s ease-in-out;
      svg {
        width: 20px;
        height: 20px;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .clear-button {
    position: fixed;
    bottom: 40px;
    right: 40px;
    cursor: pointer;
    background-color: transparent;
    transition: all 0.15s ease-in-out;
    border-radius: 50%;
    svg {
      width: 50px;
      height: 50px;
    }
    &:hover,
    &:active {
      transform: scale(1.1);
      filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));
    }

    @media screen and (min-width: 760px) {
      bottom: 45px;
      right: 25%;
    }
  }
`;

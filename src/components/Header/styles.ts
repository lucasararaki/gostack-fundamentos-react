import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        position: relative;
        transition: opacity 0.2s;

        &::after {
          content: '';
          background: #ff872c;
          display: block;
          height: 2px;
          width: 95%;
          position: absolute;
          top: 35px;
          transform: translateX(-50%);
          left: 50%;
          opacity: 0;
          transition: opacity 0.2s;
        }

        &.active::after {
          opacity: 1;
        }

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;

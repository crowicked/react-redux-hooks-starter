import styled from 'styled-components';

const App = styled.div`
  text-align: center;
  padding-top: 50px;
`;

const ItemsContainer = styled.div`
  margin: 20px;
  height: 100%;
`;

const Button = styled.div`
  padding: 12px;
  width: 70px;
  border-radius: 3px;
  margin-left: 3px;
  margin-right: 3px;
  text-decoration: none;
  border: ${props => (props.loading ? 'lightgrey solid 1px' : '#555555 solid 1px')};
  user-select: none;
  display: inline-block;
  outline: none;
  color: ${props => (props.loading ? 'lightgrey' : '#555555')};
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  letter-spacing: 8px
`;

const Image = styled.img`
  height: 100px;
  width: 150px;
`;

export {
  Button,
  Title,
  App,
  Image,
  ItemsContainer,
};

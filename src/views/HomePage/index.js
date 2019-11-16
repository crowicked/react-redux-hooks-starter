import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import {
  App, Title, ItemsContainer, Button
} from '../../style/home';
import Item from '../../components/Item';
import { updateFinalized } from '../../components/Item/actions';

const HomePage = () => {
  const appRef = React.useRef(null);
  const finalized = useSelector(state => state.finalized, shallowEqual);

  const dispatch = useDispatch();

  return (
    <App ref={appRef}>
      <Title>atVenu Settlement</Title>
      <ItemsContainer>
        <Item />
      </ItemsContainer>
      <Button disabled={finalized} className="moreButton" type="button" onClick={e => dispatch(updateFinalized(e.target.value))}>SETTLE</Button>
    </App>
  );
};

export default HomePage;

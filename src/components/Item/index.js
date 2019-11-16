import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/images/logo.png';
import { Button, Image } from '../../style/home';
import { updateAdd, updateComp, updateCountIn, updatePrice, updateNote, updateCountOut } from './actions';
import './Item.scss';

const Item = () => {
  const dispatch = useDispatch();
  const itemDummy = useSelector(state => state.Item, shallowEqual);

  const totalOut = itemDummy.countIn + itemDummy.add - itemDummy.comp - itemDummy.countOut;

  const text = (
    <div>
      <div>Price:</div>
      <div><input disabled={itemDummy.finalized} defaultValue={itemDummy.price} onBlur={e => dispatch(updatePrice(parseFloat(e.target.value || 0) || 0))} /></div>
      <div>Note:</div>
      <textarea disabled={itemDummy.finalized} defaultValue={itemDummy.note} onBlur={e => dispatch(updateNote(e.target.value))} />
    </div>
  );

  return (
    <div className="item__container">
      <div className="item__info">
        <div style={{ position: 'relative' }}>
          <div className="item__info__title">{itemDummy.title}</div>
          <Image src={logo} />
          <Tooltip trigger={['hover']} placement="bottom" overlay={itemDummy.note}>
            <div className="item__info__icon">
              <FontAwesomeIcon icon={faInfoCircle} />
            </div>
          </Tooltip>
        </div>
        <div className="item__info__price">{`$${itemDummy.price.toFixed(2)}`}</div>
      </div>
      <div className="item__table">
        <div className="item__table__columns">
          <div className="column">
            <div className="label">QTY Avail.</div>
            <div className="value">-{totalOut}</div>

            <Tooltip trigger={['click']} placement="bottom" overlay={text}>
              <Button className="moreButton" type="button" onClick={() => {}}>More</Button>
            </Tooltip>
          </div>
          <div className="column">
            <div className="label">Count In</div>
            <div className="value input">
              <input
                disabled={itemDummy.finalized}
                type="number"
                name="countIn"
                defaultValue={itemDummy.countIn}
                onBlur={e => dispatch(updateCountIn(parseInt(e.target.value || 0, 10)))}
              />
            </div>
          </div>
          <div className="column">
            <div className="label"><span>Add</span></div>
            <div className="value input green">
              <input
                disabled={itemDummy.finalized}
                type="number"
                className="green"
                name="addQty"
                defaultValue={itemDummy.add}
                onBlur={e => dispatch(updateAdd(parseInt(e.target.value || 0, 10)))}
              />
            </div>
          </div>
          <div className="column">
            <div className="label">Total In</div>
            <div className="value blue">{itemDummy.countIn + itemDummy.add}</div>
            <div className="value blue">{itemDummy.countIn + itemDummy.add}</div>
          </div>
          <div className="column">
            <div className="label"><span>Comp</span></div>
            <div className="value input red">
              <input
                disabled={itemDummy.finalized}
                className="red"
                type="number"
                name="comp"
                defaultValue={itemDummy.comp}
                onBlur={e => dispatch(updateComp(parseInt(e.target.value || 0, 10)))}
              />
            </div>
            <div className="value red">{itemDummy.comp}</div>
          </div>
          <div className="column">
            <div className="label">Count Out</div>
            <div className="value input green">
              <input
                disabled={itemDummy.finalized}
                type="number"
                name="countOut"
                defaultValue={itemDummy.countOut}
                onBlur={e => dispatch(updateCountOut(parseInt(e.target.value || 0, 10)))}
              />
            </div>
            <div className="value">{itemDummy.countOut}</div>
          </div>
          <div className="column">
            <div className="label">Total Sold</div>
            <div className="value blue">{totalOut}</div>
            <div className="totalSoldProgress">
              <CircularProgressbar
                value={(totalOut) * 100 / (itemDummy.countIn + itemDummy.add)}
                text={`${(totalOut)}`}
                styles={buildStyles({
                  strokeLinecap: 'butt',
                  textSize: '35px',
                  pathTransitionDuration: 0.5,
                  pathColor: '#00c7fc',
                  textColor: '#808080',
                  trailColor: '#d6d6d6',
                })}
              />
            </div>
          </div>
          <div className="column">
            <div className="label"><span>Gross</span></div>
            <div className="value blue">{((totalOut) * itemDummy.price.toFixed(2)).toFixed(2)}</div>
            <div className="value blue">${((totalOut) * itemDummy.price.toFixed(2)).toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

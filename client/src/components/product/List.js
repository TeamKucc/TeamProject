import React, { useEffect, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import Timer from '../common/Timer';
import DealTimer from './DealTimer';

const List = ({ deal, join, product, onCheck, make }) => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(true);
  const [items] = useState(deal);
  const fadingTextPropsTransition = useTransition(
    items[index],
    (item) => item.id,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { tension: 220, friction: 120 },
    },
  );

  const onToggle = () => {
    if (display) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => (state + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="product-details-content ml-40">
        <div className="pro-details-quality">
          <div className="pro-details-cart btn-hover text-center">
            <button className="button mr-20" onClick={make}>
              딜생성
            </button>
            <button className="button-pay mb-40" onClick={onCheck}>
              결제하기
            </button>
            {display ? (
              <>
                {fadingTextPropsTransition.map(({ item, props, key }) => (
                  <animated.div key={key} className="deal-content">
                    <table className="list-table mt-10">
                      <tbody>
                        <tr>
                          <td className="td-name">
                            <span>{item.userName}</span>
                          </td>
                          <td className="td-timer">
                            <DealTimer deal={item} />
                          </td>
                          <td className="td-button">
                            <button
                              className="button"
                              onClick={() => {
                                join(item._id);
                              }}
                            >
                              딜참여
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </animated.div>
                ))}
              </>
            ) : (
              <>
                {deal.map((item, index) => (
                  <div key={index} className="deal-content">
                    <table className="list-table mt-10">
                      <tbody>
                        <tr>
                          <td className="td-name">
                            <span>{item.userName}</span>
                          </td>
                          <td className="td-timer">
                            <DealTimer deal={item} />
                          </td>
                          <td className="td-button">
                            <button
                              className="button"
                              onClick={() => {
                                join(item._id);
                              }}
                            >
                              딜참여
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))}
              </>
            )}
            <div>
              <button className="button-more mt-30" onClick={onToggle}>
                더보기
              </button>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default List;

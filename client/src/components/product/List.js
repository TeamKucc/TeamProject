import React, { useEffect, useState } from 'react';
import { useTransition, animated } from 'react-spring'
import Timer from '../common/Timer';
import DealTimer from './DealTimer';


const List = ({ deal, join }) => {
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((state) => (state + 1) % items.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);
    const [index, setIndex] = useState(0);
    const [display, setDisplay] = useState(true)
    const [items] = useState(deal);
    const fadingTextPropsTransition = useTransition(items[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { tension: 220, friction: 120 },
    });

    const onToggle = () => {
        if (display) {
            setDisplay(false)
        } else {
            setDisplay(true)
        }
    }

    return (
        <>
            <div className="Timer">
                <button onClick={onToggle}>더보기</button>
                {display ? (
                    <>
                        {fadingTextPropsTransition.map(({ item, props, key }) => (
                            <animated.div
                                key={key}
                            >
                                <span>{item.userName}</span>
                                <DealTimer deal={item} /><button className="btn-full" onClick={() => { join(item._id) }}>참여하기</button>
                            </animated.div>
                        ))}
                    </>
                ) : (
                        <>
                            {
                                deal.map((item,index) => (
                                    <div key={index}>
                                        <span>{item.userName}</span>
                                        <DealTimer deal={item} /><button className="btn-full" onClick={() => { join(item._id) }}>참여하기</button>
                                    </div>
                                ))
                            }
                        </>
                    )}
            </div>
        </>
    )
}

export default List
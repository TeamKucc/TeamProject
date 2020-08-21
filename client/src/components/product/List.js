import React, { useEffect, useState } from 'react';
import { useTransition, animated } from 'react-spring'

const List = ({deal,join}) => {
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((state) => (state + 1) % items.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);
    const [index, setIndex] = useState(0);
    const [items] = useState(deal);
    const fadingTextPropsTransition = useTransition(items[index], item => item._id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { tension: 220, friction: 120 },
    });

    return (
        <div>
            {fadingTextPropsTransition.map(({ item, props, key }) => (
                <animated.div
                    key={key}
                    style={{ ...props, position: 'absolute' }}
                > 
                    {item._id} <button className="btn-full" onClick={() => { join(item._id) }}>참여하기</button>
                </animated.div>
            ))}
        </div>
    )
}

export default List
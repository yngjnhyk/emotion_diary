import { useState } from 'react';

import MyHeader from './../components/MyHeader';
import MyBuuton from './../components/MyButton';

const Home = () => {
  const [curDate, setCurDate] = useState(new Date());
  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;
  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyBuuton text={'<'} onClick={decreaseMonth} />}
        rightChild={<MyBuuton text={'>'} onClick={increaseMonth} />}
      />
    </div>
  );
};

export default Home;

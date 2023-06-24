<<<<<<< HEAD
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
=======
const Home = () => {
  return <div>Home</div>;
>>>>>>> c0d9b71296f63f9eafa7db7e6f722c1bccf10e33
};

export default Home;

import React, { useReducer, useRef } from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      break;
    }
    case 'REMOVE': {
      newState = state.filter((it) => it.id !== action.targetId);
    }
    case 'EDIT': {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

<<<<<<< HEAD
const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: '오늘의일기 1번',
    date: 1687579739257,
  },
  {
    id: 2,
    emotion: 3,
    content: '오늘의일기 2번',
    date: 1687579739258,
  },
  {
    id: 3,
    emotion: 5,
    content: '오늘의일기 3번',
    date: 1687579739259,
  },
];

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  console.log(new Date().getTime());

=======
function App() {
  const [data, dispatch] = useReducer(reducer, []);

>>>>>>> c0d9b71296f63f9eafa7db7e6f722c1bccf10e33
  const dataId = useRef(0);

  //CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId += 1;
  };

  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: 'REMOVE', targetId });
  };

  //EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: 'EDIT',
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };
  return (
    <DiaryStateContext.Provider value={data}>
<<<<<<< HEAD
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
=======
      <DiaryDispatchContext value={{ onCreate, onEdit, onRemove }}>
>>>>>>> c0d9b71296f63f9eafa7db7e6f722c1bccf10e33
        <BrowserRouter>
          <div className='App'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/new' element={<New />} />
              <Route path='/edit' element={<Edit />} />
              <Route path='/diary/:id' element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
<<<<<<< HEAD
      </DiaryDispatchContext.Provider>
=======
      </DiaryDispatchContext>
>>>>>>> c0d9b71296f63f9eafa7db7e6f722c1bccf10e33
    </DiaryStateContext.Provider>
  );
}

export default App;

import React from 'react'
import Homeitem from '../components/Homeitem'
import {useSelector} from 'react-redux';

const Home = () => {
  const items = useSelector(state=>state.items);

  return (
    <div className='xl:px-20 flex flex-wrap w-full gap-8 justify-center items-center p-6'>
      {
        items.map((item)=>(
          <Homeitem key={item.id} item={item}/>
        ))
      }
    </div>
  )
}

export default Home
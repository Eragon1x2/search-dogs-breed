import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDogs } from './store/listActions'
import Loading from './components/Loading'
import DogsList from './components/DogsList'
import HeaderComponent from './components/HeaderComponent'
function App() {
  const dispatch = useDispatch();
  const loading = useSelector(store => store.list.loading);
  useEffect(() => {
    dispatch(fetchDogs())
  },[])
  return (
    <div className='app-wrapper'>
    <HeaderComponent></HeaderComponent>
    {loading ? <Loading/> : <DogsList></DogsList>}
    </div>
  )
}

export default App

import React from 'react'
import { fetchDogsbyBreed } from '../store/listActions'
import header_icon from '../assets/icon.png';
import { useDispatch } from 'react-redux'
function HeaderComponent() {
    const dispatch = useDispatch();
    const onBreedClick = (e) => {
        dispatch(fetchDogsbyBreed(e.target.value)) 
      }
    return (
        <header>
      <img src={header_icon} alt="" />
    <select name="cars" id="cars" onChange={onBreedClick}>
    <option value="none" selected disabled hidden>Select breed</option> 
  <option value="affenpinscher">Affenpinscher</option>
  <option value="african">African</option>
  <option value="airedale">Airedale</option>
  <option value="akita">Akita</option>
  <option value="appenzeller">Appenzeller</option>
  <option value="australian/shepherd">Shepherd Austalian</option>
  <option value="basenji">Basenji</option>
  <option value="beagle">Beagle</option>
  <option value="bluetick">Bluetick</option>
  <option value="borzoi">Borzoi</option>
  <option value="bouvier">Bouvier</option>
  <option value="boxer">Boxer</option>
  <option value="brabancon">Brabancon</option>
  <option value="briard">Briard</option>
  <option value="buhund/norwegian">Norwegian Buhund</option>
  <option value="bulldog/boston">Boston Bulldog</option>
  <option value="bulldog/english">English Bulldog</option>
  <option value="bulldog/french">French Bulldog</option>
  <option value="bullterrier/staffordshire">Staffordshire Bullterrier</option>
</select>
    </header>
    )
}

export default HeaderComponent

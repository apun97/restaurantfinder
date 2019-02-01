import React from 'react';
import './CategoryOptions.css';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { categories } from '../../../constraints';


const CategoryOptions = ({ className ,onChange }) => (
  <div className={className}>
    <ToggleButtonGroup
      className="categories-button-group"
      type="checkbox"
      onChange={ onChange }
      vertical
    >
      {CategoriesMapped}
    </ToggleButtonGroup>
  </div>
);

const fetchRestaurantOptions = categories.categories.filter( (item) =>
  (item.parents.includes("restaurants") && IsUSOption(item))
);

function IsUSOption(item){
  if(item.hasOwnProperty("country_blacklist")){
    if(item.country_blacklist.includes("US")){
      return false;
    }
  }
  if(item.hasOwnProperty("country_whitelist")){
    if(!item.country_whitelist.includes("US")){
      return false;
    }
  }
  return true;
}


const CategoriesMapped = fetchRestaurantOptions.map((item) =>
  <ToggleButton
    key={item.title}
    value={item.alias}
  >
    {item.title}
  </ToggleButton>
);

export default CategoryOptions;

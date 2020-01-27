import { combineReducers } from "redux";
import SideNavItem from './SideNavItem';
import ThemeOptions from './ThemeOptions';
import Location from './Location';

const rootReducers = combineReducers({    
    SideNavItem,
    ThemeOptions,
    Location
  });

export default rootReducers;


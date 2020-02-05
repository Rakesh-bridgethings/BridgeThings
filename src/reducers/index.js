import { combineReducers } from "redux";
import SideNavItem from './SideNavItem';
import ThemeOptions from './ThemeOptions';
import Location from './Location';
import Status from './status';

const rootReducers = combineReducers({    
    SideNavItem,
    ThemeOptions,
    Location,
    Status
  });

export default rootReducers;


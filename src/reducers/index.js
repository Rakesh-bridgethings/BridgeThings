import { combineReducers } from "redux";
import SideNavItem from './SideNavItem';
import ThemeOptions from './ThemeOptions';
import Location from './Location';
import User from './User';
import Status from './status';

const rootReducers = combineReducers({ 
    SideNavItem,
    ThemeOptions,
    Location,
    User,
    Status
  });

export default rootReducers;


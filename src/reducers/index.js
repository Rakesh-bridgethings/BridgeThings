import { combineReducers } from "redux";
import SideNavItem from './SideNavItem';
import ThemeOptions from './ThemeOptions';
import Location from './Location';
import User from './User';
import Status from './status';
import Entities from './Entities';

const rootReducers = combineReducers({ 
    SideNavItem,
    ThemeOptions,
    Location,
    User,
    Status,
    Entities
  });

export default rootReducers;


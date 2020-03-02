import { combineReducers } from "redux";
import SideNavItem from './SideNavItem';
import ThemeOptions from './ThemeOptions';
import Location from './Location';
import User from './User';
import Status from './status';
import Entities from './Entities';
import IOTDevice from './IOTDevice';
import Sensors from './Sensors';

const rootReducers = combineReducers({ 
    SideNavItem,
    ThemeOptions,
    Location,
    User,
    Status,
    Entities,
    IOTDevice,
    Sensors
  });

export default rootReducers;


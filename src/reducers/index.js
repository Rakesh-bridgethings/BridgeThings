import { combineReducers } from "redux";
import ThemeOptions from './ThemeOptions';
import SideNavItem from './SideNavItem';

const rootReducers = combineReducers({
    ThemeOptions,
    SideNavItem
  });

export default rootReducers;

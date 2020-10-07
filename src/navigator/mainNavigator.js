import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings131466Navigator from '../features/Settings131466/navigator';
import ArticleList131432Navigator from '../features/ArticleList131432/navigator';
import ArticleList131431Navigator from '../features/ArticleList131431/navigator';
import ArticleList131430Navigator from '../features/ArticleList131430/navigator';
import ArticleList131413Navigator from '../features/ArticleList131413/navigator';
import ArticleList131412Navigator from '../features/ArticleList131412/navigator';
import ArticleList131411Navigator from '../features/ArticleList131411/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings131466: { screen: Settings131466Navigator },
ArticleList131432: { screen: ArticleList131432Navigator },
ArticleList131431: { screen: ArticleList131431Navigator },
ArticleList131430: { screen: ArticleList131430Navigator },
ArticleList131413: { screen: ArticleList131413Navigator },
ArticleList131412: { screen: ArticleList131412Navigator },
ArticleList131411: { screen: ArticleList131411Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from "../view/Home";
import Task from "../view/Task";
import QrCode from "../view/QrCode";
const AppNavigation = createAppContainer(
  createSwitchNavigator({
    Home,
    Task,
    QrCode
  })

)

const routes = () => {
  return <AppNavigation/>;
}

export default routes;
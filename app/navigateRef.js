import {CommonActions} from '@react-navigation/native';

let navigator;
const getNavigator = () => {
  return navigator;
};

const setNavigator = nav => {
  navigator = nav;
};

const goBack = () => {
  navigator.dispatch(CommonActions.goBack());
};

const navigate = (name, params) => {
  navigator.dispatch(
    CommonActions.navigate({
      name,
      params,
    }),
  );
};

export default {
  getNavigator,
  setNavigator,
  goBack,
  navigate,
};

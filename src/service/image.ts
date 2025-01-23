import { Platform } from 'react-native';
import { ALERT_TYPE } from '../config/ENV';
import type { IConfigDialog } from '../containers/Dialog';

export const getImage = (type: IConfigDialog['type']): any => {
  // switch (type) {
  //   case ALERT_TYPE.SUCCESS:
  //     return require('../assets/success.png');
  //   case ALERT_TYPE.WARNING:
  //     return require('../assets/warning.png');
  //   case ALERT_TYPE.DANGER:
  //     return require('../assets/danger.png');
  //   case ALERT_TYPE.INFO:
  //     return require('../assets/info.png');
  // }
  switch (type) {
    case ALERT_TYPE.SUCCESS:
      return {
        uri: `${Platform.OS === "android" ? "asset:/" : ""}success.png`,
      };
    case ALERT_TYPE.WARNING:
      return {
        uri: `${Platform.OS === "android" ? "asset:/" : ""}warning.png`,
      };
    case ALERT_TYPE.DANGER:
      return {
        uri: `${Platform.OS === "android" ? "asset:/" : ""}danger.png`,
      };
    case ALERT_TYPE.INFO:
      return {
        uri: `${Platform.OS === "android" ? "asset:/" : ""}info.png`,
      };
  }
};

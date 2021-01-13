import { createGlobalStyle } from 'styled-components';

import RobotoBold from './RobotoMono-Bold.woff';
import RobotoRegular from './RobotoMono-Regular.woff';
import RobotoThin from './RobotoMono-Thin.woff';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'Bold';
    src: url(${RobotoBold}) format('woff');
    font-style: normal;
  }
  @font-face {
    font-family: 'Regular';
    src: url(${RobotoRegular}) format('woff');
    font-style: normal;
  }
  @font-face {
    font-family: 'Thin';
    src: url(${RobotoThin}) format('woff');
    font-style: normal;
  }
`;
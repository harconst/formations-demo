import lightBlue from 'material-ui/colors/lightBlue';
import pink from 'material-ui/colors/pink';

const configuredTheme = {
  direction: 'ltr',
  typography: {
    fontFamily: 'Barlow',
    fontSize: 14,
    subheading: {
      fontSize: '14px'
    }
  },
  palette: {
    type: 'light',
    primary: lightBlue,
    secondary: pink
  },
  status: {
    danger: 'orange'
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: '#FFF',
        color: '#000'
      }
    }
  }
};

export default configuredTheme;

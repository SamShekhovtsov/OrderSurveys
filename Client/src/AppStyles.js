import { red, green } from '@material-ui/core/colors';

const AppStyles = theme => ({
  root: {
    width: '100%',
    maxWidth: '40rem',
    textAlign: 'center',
    padding: '0rem 1.35rem 0rem 1.35rem',
    margin: 'auto',
  },
  headerText: {
    'text-align': 'left',
    'padding-top': '2.5rem',
    'padding-bottom': '0.2rem'
  },
  headerSplitLine: {
    'min-height': '0.0856rem',
    width: '100%',
    'background-color': '#979797',
    margin: 'auto',
    padding: 0,
  },
  orderValidateForm: {
    display: 'unset',
  },
  positionRelative: {
    position: 'relative',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

export default AppStyles;
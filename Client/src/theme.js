import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import muliVariations from './fontDefinitions';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1DB954',
      contrastText: "#fff"
    },
    secondary: {
      main: '#4A90E2',
    },
    alternative: {
      main: '#4A91E3',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: "#4A4A4A",
    }
  },
  typography: {
    fontFamily: "'Muli', sans-serif",
    //fontSize: '6.5vmin',
    button: {
      textTransform: 'none'
    },
    body1: {
      //fontSize: '0.7rem',
    },
    h6: {

    },
    //h3: {
    //  fontSize: 33,
    //  fontFamily: "Montserrat",
    //  fontWeight: 300,
    //  color: "#2882F8",
    //  letterSpacing: "0.0075em",
    //  verticalAlign: "middle",
    //  alignItems: "center",
    //  textAlign: "center"
    //},
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "0.4em",
        borderColor: "#138C3E",
        borderStyle: "solid",
        borderWidth: "0.078em",
        lineHeight: 1.45,
      }, 
    },
    MuiSvgIcon: {
      root: {
        fontSize: '1.4em',
      },
    },
    MuiSelect: {
      select: {
        width: '20rem',
        border: '0.0999em solid #979797',
        boxShadow: '0 2px 0 3px rgba(0, 0, 0, 0.06)',
        borderRadius: '.3em',
        //backgroundColor: '#fff',
        backgroundImage: 'linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%)',
        //backgroundRepeat: 'no-repeat, repeat',
        //backgroundPosition: 'right .7em top 50%, 0 0',
        //backgroundSize: '.65em auto, 100%',
        padding: '.58rem 0 .58rem 1.2rem',
        "&:focus": {
          borderRadius: '.3em',
          backgroundColor: '#fff',
          border: '0.078em solid #979797',
        },
        "&&": {
          paddingRight: 0,
          borderRadius: '.3em',
        },
      },
      /* Styles applied to the select component if `variant="filled"`. */
      filled: {
        '&&': {
          paddingRight: 0,
          borderRadius: '.3em',
        },
      },
      /* Styles applied to the select component if `variant="outlined"`. */
      outlined: {
        paddingRight: 0,
        borderRadius: '.3em',
        '&&': {
          paddingRight: 0,
          borderRadius: '.3em',
        },
      },
      icon: {
        top: 'calc(50% - .68rem)',
        right: '.3em',
        color: '#46474B',
      },
    },
    MuiInput: {
      underline: {
        "&:before": {
          content: "",
          transition: "",
          border: '0.078em solid #979797',
        },
        "&:after": {
          content: "",
          transition: "",
          border: '0.078em solid #979797',
        },
      },
      formControl: {
        "label + &": {
          marginTop: "1.8em"
        },
      },
    },
    MuiInputLabel: {
      formControl: {
        left: '1.3em',
        zIndex: '10',
        transform: 'translate(0, 2.4em) scale(1)',
      }
    },
    MuiCssBaseline: {
      '@global': {
        '@font-face': muliVariations,
        html: {
          fontSize: '2.2vmin',
          '@media (min-width:600px)': {
            //fontSize: '2.75vmin',
          },
          '@media (min-width:960px)': {
            //fontSize: '2.75vmin',
          },
          '@media (min-width:1280px)': {
            //fontSize: '2.75vmin',
          },
          '@media (max-width:1920px)': {
            //fontSize: '2.75vmin',
          },
          '@media (min-width:1920px)': {
            //fontSize: '2.75vmin',
          },
          '@media (orientation: portrait)': {
            fontSize: '1.75vmin',
          },
          '@media (max-aspect-ratio: 5/8)': {
            fontSize: '3.75vmin',
          }
        },
        strong: {
          fontWeight: 800,
        }
      },
    },
  }, 
});

/*
      
    //letterSpacing: '0.01071em',    [theme.breakpoints.up("sm")]: {
            fontSize: '7.5vmin'
          },
          [theme.breakpoints.up("md")]: {
            fontSize: '8.5vmin'
          },
          [theme.breakpoints.up("lg")]: {
            fontSize: '9.5vmin'
          }
*/



export default theme;
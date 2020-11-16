import { fade } from '@material-ui/core/styles/colorManipulator';
const styles = ({
  breakpoints,
  palette,
  shape,
  spacing,
  transitions,
}) => {
  return {
    root: {
      width: '100%',
      marginBottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: 'none',
      [breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: shape.borderRadius,
      backgroundColor: fade(palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [breakpoints.up('sm')]: {
        marginLeft: spacing(),
        width: 'auto',
      },
    },
    searchIcon: {
      width: spacing(9),
      height: '100%',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputMain: {
      paddingTop: spacing(),
      paddingRight: spacing(),
      paddingBottom: spacing(),
      paddingLeft: spacing(10),
      transition: transitions.create('width'),
      width: '100%',
      [breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  };
};

export default styles;

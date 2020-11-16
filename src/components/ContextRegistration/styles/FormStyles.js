const styles = ({ spacing, breakpoints, palette }) => {
  return {
    main: {
      width: 'auto',
      display: 'block',
      marginLeft: spacing(3),
      marginRight: spacing(3),
      [breakpoints.up('sm')]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${spacing(2)}px ${spacing(3)}px ${spacing(
        3
      )}px`,
    },
    avatar: {
      margin: spacing(),
      backgroundColor: palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: spacing(3),
    },
    submit: {
      marginTop: spacing(3),
    },
  };
};

export default styles;

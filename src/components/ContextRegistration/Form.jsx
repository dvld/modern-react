import React, { Component } from 'react';
import {
  Avatar,
  Button,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  InputLabel,
  Paper,
  Typography,
  MenuItem,
  Select,
  withStyles,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { LanguageContext } from './contexts/LanguageContext';

import styles from './styles/FormStyles';

const lang = {
  english: {
    email: 'Email',
    signIn: 'Sign In',
    password: 'Password',
    remember: 'Remember Me',
  },
  french: {
    email: 'Adresse Electrinique',
    signIn: 'Se Connecter',
    password: 'Mot de Passe',
    remember: 'Souviens-toi De Moi',
  },
  spanish: {
    email: 'Correo Electronico',
    signIn: 'Registrarse',
    password: 'Contrasena',
    remember: 'Recuerdame ',
  },
};

class Form extends Component {
  static contextType = LanguageContext;
  render() {
    const { language, changeLanguage } = this.context;
    const { classes } = this.props;
    const { email, signIn, password, remember } = lang[
      language
    ];
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5'>{signIn}</Typography>
          <Select
            value={language}
            onChange={changeLanguage}
          >
            <MenuItem value='english'>English</MenuItem>
            <MenuItem value='french'>French</MenuItem>
            <MenuItem value='spanish'>Spanish</MenuItem>
          </Select>
          <form className='classes.form'>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='email'>
                {email}
              </InputLabel>
              <Input id='email' name='email' autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='password'>
                {password}
              </InputLabel>
              <Input
                id='password'
                name='password'
                autoFocus
              />
            </FormControl>
            <FormControlLabel
              label={remember}
              control={<Checkbox color='primary' />}
            ></FormControlLabel>
            <Button
              variant='contained'
              type='submit'
              fullWidth
              color='primary'
              className={classes.submit}
            >
              {signIn}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Form);

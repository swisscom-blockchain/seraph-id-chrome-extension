import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';
import dictionary from "../../commons/dictionary";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    display: 'flex',
    backgroundColor: theme.palette.text.primary,
    borderRadius: '3px',
    height: '40px',
    color: theme.palette.text.light,
    fontSize: 14,
    paddingLeft: theme.spacing(1)
  },
  error: {
    border: '2px solid',
    borderColor: theme.palette.primary.error,
  }
}));

const PasswordInput = ({ value, handleChange, hasError }) => {
  const classes = useStyles();

  return (
    <InputBase
      id="outlined-adornment-password"
      className={clsx(classes.textField, hasError && classes.error)}
      type={'password'}
      placeholder={dictionary.commons.password}
      value={value}
      onChange={handleChange('password')}
    />
  );
};

PasswordInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  hasError: PropTypes.bool,
};

export default PasswordInput;

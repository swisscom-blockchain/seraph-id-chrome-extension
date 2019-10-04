import React from 'react';
import { Box, ClickAwayListener } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(({ palette, spacing }) => ({
  wrapper: {
    position: 'absolute',
    width: 'calc(100% - 48px)',
    height: 'calc(100% - 48px)',
    top: spacing(2),
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 99999,
  },
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    background: palette.primary.main,
    zIndex: 99999,
    width: '100%',
    maxHeight: '100%',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
  },
  header: {
    backgroundColor: palette.primary.dark,
    height: '42px',
  },
  content: {
    paddingTop: spacing(2),
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
}));

const BaseModal = ({ isOpen, onClose, children, HeaderCompoennt, style }) => {
  const classes = useStyles();

  return (
    isOpen && (
      <Box className={classes.wrapper} style={style}>
        <ClickAwayListener onClickAway={onClose}>
          <Box
            onClose={onClose}
            className={classes.container}
          >
            <Box className={classes.header}>
              {HeaderCompoennt()}
            </Box>
            <Box className={classes.content}>
              {children}
            </Box>
          </Box>
        </ClickAwayListener>
      </Box>
    )
  );
}

export default BaseModal;

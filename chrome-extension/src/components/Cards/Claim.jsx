// Copyright (c) 2019 Swisscom Blockchain AG
// Licensed under MIT License

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Card,
  CardHeader,
  CardContent,
  Collapse,
  IconButton,
  Box,
} from '@material-ui/core';
import { Close, ExpandMore } from '@material-ui/icons';
import JsonViewer from '../JsonViewer/JsonViewer';

/**
 * Claim styles
 * @type {StylesHook<Styles<Theme, {}, string>>}
 */
const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    borderBottom: 'solid 1px rgba(255, 255, 255, 0.1)',
  },
  cardContent: {
    maxWidth: '100%',
    overflow: 'auto',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    color: theme.palette.text.primary,
    fontSize: '30px',
    padding: 0,
    marginRight: theme.spacing(1),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {},
  title: {
    fontSize: '16px',
  },
  subheader: {
    fontSize: '10px',
    paddingTop: theme.spacing(0.5),
    color: theme.palette.text.hint,
  },
  removeIcon: {
    color: theme.palette.text.secondary,
    padding: 0,
    fontSize: '14px',
  },
  root: {
    padding: `${theme.spacing(2)} 0 ${theme.spacing(1)}`,
    marginRight: theme.spacing(1),
  },
  action: {
    marginTop: theme.spacing(1.5),
    paddingRight: theme.spacing(1),
  },
}));

/**
 * <Claim />
 * The collapsible claim item.
 * @param id
 * @param schema
 * @param content
 * @param onRemoveClaim
 * @return {*}
 * @constructor
 */
const Claim = ({ id, schema, content, onRemoveClaim }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const renderActionIcons = () => (
    <Box>
      <IconButton
        data-test-id={'claim-expand-button'}
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        disableRipple
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMore color="inherit" fontSize="inherit" />
      </IconButton>

      <IconButton
        data-test-id={'claim-remove-button'}
        className={classes.removeIcon}
        disableRipple
        onClick={() => onRemoveClaim(id)}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <Close color="inherit" fontSize="inherit" />
      </IconButton>
    </Box>
  );

  return (
    <Card className={classes.card}>
      <CardHeader
        action={renderActionIcons()}
        classes={{
          root: classes.root,
          title: classes.title,
          subheader: classes.subheader,
          action: classes.action,
        }}
        title={schema}
        subheader={id}
      />

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.cardContent}>
          <JsonViewer content={content} />
        </CardContent>
      </Collapse>
    </Card>
  );
};

Claim.propTypes = {
  id: PropTypes.number,
  schema: PropTypes.string,
  content: PropTypes.object,
  onRemovalClaim: PropTypes.func,
};

export default Claim;

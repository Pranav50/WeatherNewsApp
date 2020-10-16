import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles'; 

const arrowGenerator = (color) => {
    return {
      '&[x-placement*="top"] $arrow': {
        bottom: 0,
        left: 5,
        marginBottom: '-0.95em',
        width: '2em',
        height: '1em',
        '&::before': {
          borderWidth: '1em 1em 0 1em',
          borderColor: `${color} transparent transparent transparent`,
        },
      },
      '&[x-placement*="right"] $arrow': {
        left: -2,
        marginBottom: '1em',
        marginLeft: '-0.95em',
        width: '2em',
        height: '1em',
        '&::before': {
          borderWidth: '1em 1em 1em 0',
          borderColor: `transparent ${color} transparent transparent`,
        },
      },
      '&[x-placement*="left"] $arrow': {
        right: 2,
        marginBottom: '1em',
        marginRight: '-0.95em',
        width: '2em',
        height: '1em',
        '&::before': {
          borderWidth: '1em 0 1em 1em',
          borderColor: `transparent transparent transparent ${color}`,
        },
      },
    };
  }
  
  const useStylesArrow = makeStyles(theme => ({
    tooltip: {
      position: 'relative',
      backgroundColor: '#a29bfe'
    },
    arrow: {
      position: 'absolute',
      fontSize: 6,
      '&::before': {
        content: '""',
        margin: 'auto',
        display: 'block',
        width: 0,
        height: 0,
        borderStyle: 'solid',
      },
    },
    popper: arrowGenerator(theme.palette.common.white),
    tooltipPlacementRight: {
      margin: '0 10px',
    },
    tooltipPlacementLeft: {
      margin: '10px 0',
    },
  }));
  
  export const ArrowTooltip = (props) => {
    const { arrow, ...classes } = useStylesArrow();
    const [arrowRef, setArrowRef] = React.useState(null);
  
    return (
      <Tooltip
        classes={classes}
        PopperProps={{
          popperOptions: {
            modifiers: {
              arrow: {
                enabled: Boolean(arrowRef),
                element: arrowRef,
              },
            },
          },
        }}
        {...props}
        title={
          <React.Fragment>
            {props.title}
            <span className={arrow} ref={setArrowRef} />
          </React.Fragment>
        }
      />
    );
  }
  
  ArrowTooltip.propTypes = {
    title: PropTypes.node,
  };
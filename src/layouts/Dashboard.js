import React from 'react'
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import Section from './Section'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    }
  }));

const Dashboard = ({match}) => {
    const classes = useStyles();
    return(
        
        <div className={classes.root}>
            <CssBaseline/>
            <DrawerProvider>
                
                <Section path={match}/>
            </DrawerProvider>
            
        </div>
        
    )
}

export default Dashboard
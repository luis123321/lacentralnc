import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    itemContent: {
        padding:'20px'
    },
    item: {
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        margin: '5px',
        paddingBottom: '20px',
        justifyContent:'center'
    },
    itemSecond: {
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        margin: '5px',
        paddingBottom: '20px',
        justifyContent:'center'
    },
    button: {
        margin: '5px',
        display: 'flex',
        paddingBottom: '20px',
        justifyContent:'center'
    }
}));

const textItems = [
    'TP1',
    'TP2',
    'TP3',
    'TP4',
    'TP5',
    'TP6',
    'TP7',
    'TP8',
    'TP9',
    'TP10',
]

const ParlayDialog = (props) => {

    const classes = useStyles();
    const { onClose, selectedValue, open } = props;

    const [values, setValues] = useState({
        TP1: 0,
        TP2: 0,
        TP3: 0,
        TP4: 0,
        TP5: 0,
        TP6: 0,
        TP7: 0,
        TP8: 0,
        TP9: 0,
        TP10: 0,
        betUnits: 1
    })
    const [parlay, setParlay] = useState(0);

    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value) => {
      onClose(value);
    };

    const handleTextChange = (evt) => {
        const { value, id} = evt.target;
        let upValues = { ...values, [id]:value};
        setValues(upValues);
    }

    const handleClear = () => {
        setValues({
            TP1: 0,
            TP2: 0,
            TP3: 0,
            TP4: 0,
            TP5: 0,
            TP6: 0,
            TP7: 0,
            TP8: 0,
            TP9: 0,
            TP10: 0,
            betUnits: 1
        })
    }

    const handleCalculator = () => {

        const {
            TP1,
            TP2,
            TP3,
            TP4,
            TP5,
            TP6,
            TP7,
            TP8,
            TP9,
            TP10,
            betUnits
        } = values;

        const _TP1 = Number(TP1);
        const _TP2 = Number(TP2);
        const _TP3 = Number(TP3);
        const _TP4 = Number(TP4);
        const _TP5 = Number(TP5);
        const _TP6 = Number(TP6);
        const _TP7 = Number(TP7);
        const _TP8 = Number(TP8);
        const _TP9 = Number(TP9);
        const _TP10 = Number(TP10);
        const _betUnits = Number(betUnits);

        let PF1 = 1;
        let PF2 = 1;
        let PF3 = 1;
        let PF4 = 1;
        let PF5 = 1;
        let PF6 = 1;
        let PF7 = 1;
        let PF8 = 1;
        let PF9 = 1;
        let PF10 = 1;

        if (_TP1 < 0) { PF1 = (-_TP1 + 100) / -_TP1; }
        else if (_TP1 > 0) { PF1 = (_TP1 + 100) / 100; }
        else PF1 = 1;

        if (_TP2 < 0) { PF2 = (-_TP2 + 100) / -_TP2; }
        else if (_TP2 > 0) { PF2 = (_TP2 + 100) / 100; }
        else PF2 = 1;

        if (_TP3 < 0) { PF3 = (-_TP3 + 100) / -_TP3; }
        else if (_TP3 > 0) { PF3 = (_TP3 + 100) / 100; }
        else PF3 = 1;

        if (_TP4 < 0) { PF4 = (-_TP4 + 100) / -_TP4; }
        else if (_TP4 > 0) { PF4 = (_TP4 + 100) / 100; }
        else PF4 = 1;

        if (_TP5 < 0) { PF5 = (-_TP5 + 100) / -_TP5; }
        else if (_TP5 > 0) { PF5 = (_TP5 + 100) / 100; }
        else PF5 = 1;

        if (_TP6 < 0) { PF6 = (-_TP6 + 100) / -_TP6; }
        else if (_TP6 > 0) { PF6 = (_TP6 + 100) / 100; }
        else PF6 = 1;

        if (_TP7 < 0) { PF7 = (-_TP7 + 100) / -_TP7; }
        else if (_TP7 > 0) { PF7 = (_TP7 + 100) / 100; }
        else PF7 = 1;

        if (_TP8 < 0) { PF8 = (-_TP8 + 100) / -_TP8; }
        else if (_TP8 > 0) { PF8 = (_TP8 + 100) / 100; }
        else PF8 = 1;

        if (_TP9 < 0) { PF9 = (-_TP9 + 100) / -_TP9; }
        else if (_TP9 > 0) { PF9 = (_TP9 + 100) / 100; }
        else PF9 = 1;

        if (_TP10 < 0) { PF10 = (-_TP10 + 100) / -_TP10; }
        else if (_TP10 > 0) { PF10 = (_TP10 + 100) / 100; }
        else PF10 = 1;

        const parlayPayout = ((PF1 * PF2 * PF3 * PF4 * PF5 * PF6 * PF7 * PF8 * PF9 * PF10) - 1) * _betUnits;

        setParlay(parlayPayout);
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Parlay calculator</DialogTitle>
            <div className={classes.itemContent}>
                <Grid container>
                    <Grid item xs={6}>
                        {
                            textItems.filter((b,index)=>index<5).map((a, indexa)=>(
                                <div className={classes.item}>
                                    <Typography >{indexa+1}</Typography>
                                    <TextField id={a} value={values[a]} style={{marginLeft:'10px'}} onChange={handleTextChange}/>
                                </div>
                            ))
                        }
                    </Grid>
                    <Grid item xs={6}>
                        {
                            textItems.filter((b,index)=>index>=5).map((a, indexa)=>(
                                <div className={classes.item}>
                                    <Typography >{indexa+1+5}</Typography>
                                    <TextField id={a} value={values[a]} style={{marginLeft:'10px'}} onChange={handleTextChange}/>
                                </div>
                            ))
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{marginTop:'30px'}} />
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.itemSecond}>
                            <Typography >Cantidad ($).</Typography>
                            <TextField id='betUnits' value={values['betUnits']} style={{marginLeft:'10px'}} onChange={handleTextChange}/>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.itemSecond}>
                            <Typography >Pago:</Typography>
                            <TextField id='parlayPayout' value={parlay} style={{marginLeft:'10px'}} />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{marginTop:'30px'}} />
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.button}>
                            <Button variant="contained" color="primary" style={{width:'100px'}} onClick={handleCalculator}>CALCULATE</Button>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.button}>
                            <Button variant="contained" color="primary" style={{width:'100px'}} onClick={handleClear}>CLEAN</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Dialog>
    )
}

export default ParlayDialog;
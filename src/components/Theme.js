import { createMuiTheme  } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const DefaultTheme = createMuiTheme();

const CustomTheme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: '#ff8000',
            contrastText: '#ffffff'
        },
        contrastThreshold: 3,
        text: { primary: '#454545', }
    },
    overrides: {
        MuiPaper: { 
            root: {
                padding: DefaultTheme.spacing.unit * 3,
                marginTop: DefaultTheme.spacing.unit * 3,
                position: 'relative'
            },
        },
        MuiAppBar: {
            root: {
                position: 'fixed !important',
                top: 0,
                left: 0,
                right: 0,
                marginTop: 0,
                padding: 0,
            },
        },
        MuiFormControl: {
            root: {
                width: '100%',
                [DefaultTheme.breakpoints.up('md')]: {
                    margin: '24px auto',
                },
            },
        },
        MuiChip: {
            root: { margin: '0 5px 5px 0', },
        },
        MuiButton: {
            root: {
                textTransform: 'none',
                fontWeight: 700,
            }
        },
        MuiList: {
            root: {
                "&:empty" : {
                    display: 'none',
                },
            }
        },
        MuiListItemText: {
            root: {
                color: '#222222',
            }
        },
        MuiToolbar: {
            root: {
                width: '90%',
                maxWidth: 960,
                padding: '0 !important',
                margin: 'auto'
            }
        },
        MuiStepLabel: {
            labelContainer: {
                [DefaultTheme.breakpoints.down('md')]: {
                    display: 'none',
                },
            }
        },
        MuiModal: {
            root: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        }
    },
});

export default CustomTheme;

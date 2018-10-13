import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import HelperTextButton from './HelperTextButton';
import Section from './Section';
import SectionTitle from './SectionTitle';

class Intro extends Component {

    render() {
        return (
            <Section>
                <SectionTitle title="Intro" tooltip="Add a chord or click 'Help' to start." />
                <Typography variant="body2" style={{marginTop: 10}}>
                    Welcome to Capo Guru. To get started add a chord to your sequence, or click 'Take a tour' below to add a demo sequence and walk through the application. 
                </Typography>
                <HelperTextButton action={() => this.props.toggleHelp()} text='Take a tour' />
            </Section>
        );
    }
}

export default Intro;

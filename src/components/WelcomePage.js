import React from 'react';
import Button from 'react-bootstrap/Button';

// Styled Components
import { AboutButton } from './StyledWidgets';

const WelcomePage = () => {

    return (
        <div>
            <AboutButton>
                <Button variant="primary" href="https://docs.google.com/document/d/1MeHm_DiVa7P88p4FQyyAl9Hz1rb9qzCiPJ6ccIXCFwY/edit?usp=sharing" target="_blank">View Resume</Button>
            </AboutButton>
        </div>
    )
}

export default WelcomePage;
import React from 'react';
import { Container } from 'reactstrap';


function Footer() {
    return (
        <Container
            className="footer"
            fluid>
            <div className="text-center">
                <a
                    href="https://github.com/matthewwolfe/rl-frontend/issues"
                    target="_blank">
                    Issues
                </a>

                <a
                    href="https://github.com/matthewwolfe/rl-frontend"
                    target="_blank">
                    Github
                </a>
                <a
                    href="https://github.com/matthewwolfe/rl-frontend/projects"
                    target="_blank">
                    Roadmap
                </a>
            </div>
        </Container>
    );
}

export default Footer;

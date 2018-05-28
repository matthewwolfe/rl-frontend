import React from 'react';
import { Button } from 'reactstrap';


function SubmitButton({children, onSubmit, ...props}) {
    return (
        <Button
            type="submit"
            onClick={(e) => {
                e.preventDefault();
                onSubmit(e);
            }}
            {...props}>
            {children}
        </Button>
    );
}

export default SubmitButton;

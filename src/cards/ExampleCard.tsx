import { ExperienceCard } from '@ellucian/experience-extension-utils';
import { Button, makeStyles, SimpleDialog, TextLink, Typography } from '@ellucian/react-design-system/core';
import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';
import { useState } from 'react';
import { show } from '../utils/show';

const useStyles = makeStyles()({
    card: {
        margin: `0 ${spacing40}`
    }
});

const ExampleCard: ExperienceCard = (props) => {
    const { classes } = useStyles();

    const [open, setOpen] = useState(false);

    return (
        <div className={classes.card}>
            <Typography variant="h2">Hello World</Typography>
            <Typography component="p">
                <span>For sample extensions, visit the Ellucian Developer</span>
                &nbsp;
                <TextLink href="https://github.com/ellucian-developer/experience-extension-sdk-samples" target="_blank">
                    GitHub
                </TextLink>
            </Typography>
            <Button
                onClick={(e) => {
                    e.stopPropagation();
                    setOpen(!open);
                }}
            >
                Show properties
            </Button>
            <SimpleDialog
                title="Card Properties"
                open={open}
                onClose={() => {
                    setOpen(false);
                }}
                fullScreen
            >
                <pre className={classes.card}>{show('', props)}</pre>
            </SimpleDialog>
        </div>
    );
};

export default ExampleCard;

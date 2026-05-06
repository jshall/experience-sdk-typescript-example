import { ExperienceCard } from '@ellucian/experience-extension-utils';
import { makeStyles, TextLink, Typography } from '@ellucian/react-design-system/core';
import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';

const useStyles = makeStyles()({
    card: {
        margin: `0 ${spacing40}`
    }
});

const ExampleCard: ExperienceCard = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.card}>
            <Typography variant="h2">Hello World</Typography>
            <Typography>
                <span>For sample extensions, visit the Ellucian Developer</span>
                <TextLink href="https://github.com/ellucian-developer/experience-extension-sdk-samples" target="_blank">
                    GitHub
                </TextLink>
            </Typography>
        </div>
    );
};

export default ExampleCard;

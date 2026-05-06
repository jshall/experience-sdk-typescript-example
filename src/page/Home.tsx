import { ExperiencePage, useCache, useCardControl, useCardInfo, useDashboardInfo, useData, useExperienceInfo, useExtensionControl, useExtensionInfo, usePageControl, usePageInfo, useThemeInfo, useUserInfo } from '@ellucian/experience-extension-utils';
import { makeStyles, TextLink, Typography } from '@ellucian/react-design-system/core';
import { spacing20 } from '@ellucian/react-design-system/core/styles/tokens';
import { show } from '../utils/show';

const useStyles = makeStyles()({
    card: {
        margin: `0 ${spacing20}`
    }
});

const HomePage: ExperiencePage = (props) => {
    const { classes } = useStyles();
    const { setPageTitle } = usePageControl();

    setPageTitle('Props and Hooks');

    return (
        <div className={classes.card}>
            <Typography variant={'h2'}>Properties</Typography>
            <pre className={classes.card}>{show('', props)}</pre>
            <Typography variant={'h2'}>Hooks</Typography>
            <pre className={classes.card}>{show('useCache', useCache())}</pre>
            <pre className={classes.card}>{show('useCardInfo', useCardInfo())}</pre>
            <pre className={classes.card}>{show('useData', useData())}</pre>
            <pre className={classes.card}>{show('useExperienceInfo', useExperienceInfo())}</pre>
            <pre className={classes.card}>{show('useExtensionControl', useExtensionControl())}</pre>
            <pre className={classes.card}>{show('useExtensionInfo', useExtensionInfo())}</pre>
            <pre className={classes.card}>{show('useThemeInfo', useThemeInfo())}</pre>
            <pre className={classes.card}>{show('useUserInfo', useUserInfo())}</pre>
            <pre className={classes.card}>{show('useDashboardInfo', useDashboardInfo())}</pre>
            <pre className={classes.card}>{show('useCardControl', useCardControl())}</pre>
            <pre className={classes.card}>{show('usePageControl', usePageControl())}</pre>
            <pre className={classes.card}>{show('usePageInfo', usePageInfo())}</pre>
            <Typography>
                For more information regarding hooks and props, visit the
                <TextLink href="https://resources.elluciancloud.com/r/bundle/ellucian_experience/page/r_page_props_sdk.html" target="_blank">
                    Props and Hooks
                </TextLink>
                section of the Ellucian Experience SDK documentation.
            </Typography>
        </div>
    );
};

export default HomePage;

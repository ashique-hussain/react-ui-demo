import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			display: 'flex',
			justifyContent: 'center',
		},
	}),
);

const NotFound = () => {
	const classes = useStyles();
	return (
		<Container className={classes.root}>
			<img alt='page not found' src='/static/page_not_found.svg' />
		</Container>
	);
};

export default NotFound;

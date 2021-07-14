import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		copyright: {
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white,
			textAlign: 'center',
			margin: 'auto',
			display: 'block',
		},
	}),
);

const Footer = () => {
	const classes = useStyles();
	return (
		<footer>
			<Box className={classes.copyright} py={1} mt={2} textAlign='center'>
				<Typography>Copyright &copy; 2021 | Ecommerce Product UI | Ashique Hussain</Typography>
			</Box>
		</footer>
	);
};

export default Footer;

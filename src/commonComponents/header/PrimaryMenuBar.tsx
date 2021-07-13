import React from 'react';
import { ThemeProvider, alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Link from 'next/link';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import WhiteTheme from '../../theme/themeTypes/WhiteTheme';
import MobileMenu from './MobileMenu';
import Button from '@material-ui/core/Button';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import { FullscreenExitTwoTone } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		grow: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		mainMenu: {
			paddingLeft: theme.spacing(1),
		},
		flexColumn: {
			display: 'flex',
			flexDirection: 'column',
			margin: theme.spacing(0, 1),
			alignItems: 'center',
			fontWeight: 500,
		},
		title: {
			display: 'none',
			[theme.breakpoints.up('sm')]: {
				display: 'block',
			},
		},
		search: {
			position: 'relative',
			borderRadius: theme.shape.borderRadius,
			backgroundColor: alpha(theme.palette.common.black, 0.08),
			'&:hover': {
				backgroundColor: alpha(theme.palette.common.black, 0.12),
			},
			marginRight: theme.spacing(2),
			marginLeft: 0,
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				marginLeft: theme.spacing(3),
				width: 'auto',
			},
		},
		searchIcon: {
			padding: theme.spacing(0, 2),
			height: '100%',
			position: 'absolute',
			pointerEvents: 'none',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		inputRoot: {
			color: 'inherit',
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('md')]: {
				width: '40ch',
			},
		},
		sectionDesktop: {
			display: 'none',
			[theme.breakpoints.up('md')]: {
				display: 'flex',
			},
		},
		sectionMobile: {
			display: 'flex',
			[theme.breakpoints.up('md')]: {
				display: 'none',
			},
		},
	}),
);

export default function PrimarySearchAppBar() {
	const classes = useStyles();
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<MobileMenu
			mobileMoreAnchorEl={mobileMoreAnchorEl}
			mobileMenuId={mobileMenuId}
			isMobileMenuOpen={isMobileMenuOpen}
			handleMobileMenuClose={handleMobileMenuClose}
		/>
	);

	return (
		<div className={classes.grow}>
			<ThemeProvider theme={WhiteTheme}>
				<AppBar position='static'>
					<Toolbar variant='dense'>
						<Typography className={classes.title} variant='h6' noWrap>
							Company-Logo
						</Typography>
						<div className={classes.mainMenu}>
							<Button color='inherit'>Men</Button>
							<Button color='inherit'>Woemn</Button>
							<Button color='inherit'>Kids</Button>
							<Button color='inherit'>Home & Living</Button>
							<Button color='inherit'>Offers</Button>
						</div>
						<div className={classes.grow} />
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder='search for products, brands and more'
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
								inputProps={{ 'aria-label': 'search for products, brands and more' }}
							/>
						</div>
						<div className={classes.sectionDesktop}>
							<Link href='/'>
								<a className={classes.flexColumn}>
									<PersonOutlineIcon fontSize='small' />
									<span>Profile</span>
								</a>
							</Link>
							<Link href='/'>
								<a className={classes.flexColumn}>
									<BookOutlinedIcon fontSize='small' />
									<span>Wishlist</span>
								</a>
							</Link>
							<Link href='/'>
								<a className={classes.flexColumn}>
									<LocalMallOutlinedIcon fontSize='small' />
									<span>Bag</span>
								</a>
							</Link>
						</div>
						<div className={classes.sectionMobile}>
							<IconButton
								aria-label='show more'
								aria-controls={mobileMenuId}
								aria-haspopup='true'
								onClick={handleMobileMenuOpen}
								color='inherit'
							>
								<MoreIcon />
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
			</ThemeProvider>
			{renderMobileMenu}
		</div>
	);
}

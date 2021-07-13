import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React, { useState, useEffect } from 'react';
import ProductCard from '../../views/ProductCard';
import Box from '@material-ui/core/Box';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import Divider from '@material-ui/core/Divider';
import RadioButtonsGroup from '../../views/RadioButtonsGroup';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import RenderLabel from '../../views/RenderLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		count: {
			fontWeight: 500,
			paddingTop: theme.spacing(1),
		},
		borderLeft: {
			borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
			marginTop: '8px',
		},
		divider: {
			marginRight: -theme.spacing(1),
		},
		formControl: {
			margin: theme.spacing(0),
		},
		filterTitle: {
			opacity: 0.8,
			fontSize: theme.spacing(2),
		},
		formControlDropdown: {
			margin: theme.spacing(1),
			minWidth: 230,
		},
		paddingTop0: {
			paddingTop: 0,
		},
		filterHeading: {
			position: 'relative',
			top: theme.spacing(1.5),
		},
		grid: {
			marginTop: theme.spacing(0),
		},
	}),
);

const ProductList = () => {
	const classes = useStyles();
	const [state, setState] = useState({});
	const [totalCount, setTotalCount] = useState(0);
	const [products, setProducts] = useState([]);
	const [brands, setBrands]: [{ [key: string]: any }, any] = useState({});
	const [category, setCategory]: [{ [key: string]: any }, any] = useState({});

	async function fetchProduct() {
		const api = await fetch('https://demo7242716.mockable.io/products');
		const response = await api.json();
		setProducts(response.products);
		setTotalCount(response.totalCount);
	}

	useEffect(() => {
		fetchProduct();
	}, []);

	useEffect(() => {
		const brand: { [key: string]: any } = {};
		const cat: { [key: string]: any } = {};
		products.forEach((product: { [key: string]: any }) => {
			brand[product.brand] = brand[product.brand] ? brand[product.brand] + 1 : 1;
			cat[product.category] = brand[product.category] ? brand[product.category] + 1 : 1;
		});
		setBrands(brand);
		setCategory(cat);
	}, [products]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	const [sortBy, setSortBy] = React.useState('');

	const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setSortBy(event.target.value as string);
	};

	const [radioValue, setRadioValue] = useState('men');

	const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRadioValue((event.target as HTMLInputElement).value);
	};

	const renderBrand = () => {
		let brandName;
		const brandEl = [];
		for (brandName in brands) {
			brandEl.push(
				<FormControlLabel
					key={brandName}
					control={<Checkbox onChange={handleChange} name={brandName} />}
					label={<RenderLabel name={brandName} count={brands[brandName]} />}
				/>,
			);
		}
		return brandEl;
	};
	const renderCategory = () => {
		let categoryName;
		const categoryEl = [];
		for (categoryName in category) {
			categoryEl.push(
				<FormControlLabel
					key={categoryName}
					control={<Checkbox onChange={handleChange} name={categoryName} />}
					label={<RenderLabel name={categoryName} count={category[categoryName]} />}
				/>,
			);
		}
		return categoryEl;
	};

	return (
		<Container maxWidth='xl'>
			<Box mt={2}>
				<Breadcrumb />
				<Typography color='textPrimary' className={classes.count} component='div'>
					Black
					<Typography color='textSecondary' component='span' variant='body1'>
						{' - '}
						{totalCount}
					</Typography>
				</Typography>
			</Box>
			<Grid container spacing={2} className={classes.grid}>
				<Grid item sm={2} className={classes.filterHeading}>
					<Typography variant='h6'>FILTERS</Typography>
				</Grid>
				<Grid item sm={10} className={classes.paddingTop0}>
					<Box display='flex' justifyContent='flex-end' mt={-1}>
						<FormControl size='small' variant='outlined' className={classes.formControlDropdown}>
							<InputLabel id='demo-simple-select-outlined-label'>Sort by: Recommended</InputLabel>
							<Select
								labelId='demo-simple-select-outlined-label'
								id='demo-simple-select-outlined'
								value={sortBy}
								onChange={handleSelectChange}
								label='Sort by: Recommended'
								autoWidth
							>
								<MenuItem value=''>
									<em>none</em>
								</MenuItem>
								<MenuItem value={10}>Recent Product</MenuItem>
								<MenuItem value={20}>Price low to high</MenuItem>
								<MenuItem value={30}>Price high to low</MenuItem>
							</Select>
						</FormControl>
					</Box>
				</Grid>
			</Grid>
			<Divider />

			<Grid container spacing={2}>
				<Grid item sm={2}>
					<RadioButtonsGroup value={radioValue} handleChange={handleRadioChange} />
					<Divider className={classes.divider} />
					<Box display='flex' justifyContent='space-between' pt={1}>
						<Typography className={classes.filterTitle} variant='h6' component='h4'>
							CATEGORIES
						</Typography>
						<IconButton size='small'>
							<SearchIcon />
						</IconButton>
					</Box>
					<FormControl component='fieldset' className={classes.formControl}>
						<FormGroup>{renderBrand()}</FormGroup>
					</FormControl>
					<Divider className={classes.divider} />
					<Box display='flex' justifyContent='space-between' pt={1}>
						<Typography className={classes.filterTitle} variant='h6' component='h4'>
							BARND
						</Typography>
						<IconButton size='small'>
							<SearchIcon />
						</IconButton>
					</Box>
					<FormControl component='fieldset' className={classes.formControl}>
						<FormGroup>{renderCategory()}</FormGroup>
					</FormControl>
					<Divider className={classes.divider} />
					<Box display='flex' justifyContent='space-between' pt={1}>
						<Typography className={classes.filterTitle} variant='h6' component='h4'>
							PRICE
						</Typography>
					</Box>
					<FormControl component='fieldset' className={classes.formControl}>
						<FormGroup></FormGroup>
					</FormControl>
					<Divider className={classes.divider} />
				</Grid>
				<Grid item sm={10} className={classes.borderLeft}>
					<Grid container spacing={2}>
						{products &&
							products.map((product: { [key: string]: any }) => {
								return (
									<Grid item sm={3} key={product.productId}>
										<ProductCard
											productId={product.productId}
											productName={product.productName}
											brand={product.brand}
											productImg={product.searchImage}
											ratingCount={product.ratingCount}
											rating={product.rating}
											discount={product.discount}
											price={product.price}
											mrp={product.mrp}
											gender={product.gender}
											category={product.categrory}
										/>
									</Grid>
								);
							})}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ProductList;

import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: 204,
			marginBottom: theme.spacing(2),
		},
		media: {
			height: 200,
		},
		rating: {
			bottom: 1,
			display: 'flex',
			alignItems: 'flex- end',
			position: 'relative',
			top: 190,
			left: 16,
		},
	}),
);

interface IProps {
	productId: string;
	productName: string;
	brand: string;
	productImg: string;
	ratingCount: number;
	rating: number;
	discount: number;
	price: number;
	mrp: number;
	gender: number;
	category: number;
}

const ProductCard = (props: IProps) => {
	const classes = useStyles();
	const { productName, brand, productImg, ratingCount, rating, discount, price, mrp } = props;

	const calculateCent = discount && ((discount / mrp) * 100).toFixed(0);

	return (
		<Card variant='outlined'>
			<CardActionArea>
				<CardMedia className={classes.media} image={productImg} title={productName}>
					{rating !== 0 && (
						<Box className={classes.rating} bottom={1} left={1}>
							<span>
								{rating && rating.toFixed(2)}{' '}
								<StarIcon fontSize='small' style={{ position: 'relative', top: '5px' }} />
							</span>
							<Divider orientation='vertical' flexItem />
							<span style={{ position: 'relative', top: '8px', left: '4px' }}>{ratingCount}</span>
						</Box>
					)}
				</CardMedia>
				<CardContent>
					<Typography gutterBottom variant='h6' component='h4' noWrap>
						{brand}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p' noWrap>
						{productName}
					</Typography>
					<Typography gutterBottom variant='subtitle2' component='p'>
						Rs. {price}{' '}
						{mrp && (
							<Typography variant='caption' style={{ textDecoration: 'line-through' }}>
								Rs. {mrp}
							</Typography>
						)}
						{calculateCent && (
							<Typography color='secondary' component='span'>
								{'  '}
								{calculateCent}% OFF
							</Typography>
						)}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default ProductCard;

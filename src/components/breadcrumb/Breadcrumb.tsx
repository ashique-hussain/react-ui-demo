import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
}

const Breadcrumb = () => {
	return (
		<Breadcrumbs aria-label='breadcrumb'>
			<Link color='inherit' href='/' onClick={handleClick}>
				Home
			</Link>
			<Typography color='textPrimary'>Black</Typography>
		</Breadcrumbs>
	);
};

export default Breadcrumb;

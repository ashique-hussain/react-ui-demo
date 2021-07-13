import Typography from '@material-ui/core/Typography';

interface IProps {
	name: string;
	count: number;
}
const RenderLabel = (props: IProps) => {
	const { name, count } = props;
	return (
		<Typography component='div'>
			{name}
			<Typography variant='caption'> ({count})</Typography>
		</Typography>
	);
};

export default RenderLabel;

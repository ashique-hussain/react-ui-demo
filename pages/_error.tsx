import { NextApiRequest, NextApiResponse } from 'next';

interface IProps {
	statusCode: number;
}
function Error(props: IProps) {
	const { statusCode } = props;
	return (
		<p>
			{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
		</p>
	);
}

interface IBody {
	res: NextApiResponse;
	err: NextApiRequest;
}
Error.getInitialProps = (body: IBody) => {
	const { res, err } = body;
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;

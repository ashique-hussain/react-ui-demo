import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

interface IProps {
	value: string;
	handleChange: any;
}

const RadioButtonsGroup = (props: IProps) => {
	const { value, handleChange } = props;

	return (
		<FormControl component='fieldset'>
			<RadioGroup aria-label='gender' name='gender' value={value} onChange={handleChange}>
				<FormControlLabel value='men' control={<Radio />} label='Men' />
				<FormControlLabel value='women' control={<Radio />} label='Women' />
				<FormControlLabel value='boys' control={<Radio />} label='Boys' />
				<FormControlLabel value='girls' control={<Radio />} label='Girls' />
			</RadioGroup>
		</FormControl>
	);
};

export default RadioButtonsGroup;

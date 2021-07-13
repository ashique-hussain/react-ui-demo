import { useState } from 'react';

const useForm = (initialState: { [key: string]: any }) => {
	const [values, setValues] = useState(initialState);

	const handleOnChange = (event: { target: any }) => {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
	};

	const handleCheckboxChange = (event: { target: any }) => {
		const { name, checked } = event.target;
		setValues({ ...values, [name]: checked });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleClickShowConfirmPassword = () => {
		setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
	};

	return {
		values,
		handleOnChange,
		handleCheckboxChange,
		handleClickShowPassword,
		handleClickShowConfirmPassword,
	};
};

export default useForm;

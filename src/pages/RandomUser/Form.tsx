import { Button, Form, Input } from 'antd';
import { FC } from 'react';

interface UserFormProps {
	initialValues?: Record<string, any>;
	isEdit?: boolean;
	onSubmit: (values: any) => void;
	onCancel: () => void;
}

const UserForm: FC<UserFormProps> = ({ initialValues, isEdit, onSubmit, onCancel }) => {
	return (
		<Form initialValues={initialValues} onFinish={onSubmit}>
			<Form.Item label='Address' name='address' rules={[{ required: true, message: 'Please input your address!' }]}>
				<Input />
			</Form.Item>

			<Form.Item label='Balance' name='balance' rules={[{ required: true, message: 'Please input your balance!' }]}>
				<Input />
			</Form.Item>

			<div className='form-footer'>
				<Button htmlType='submit' type='primary'>
					{isEdit ? 'Save' : 'Insert'}
				</Button>
				<Button onClick={onCancel}>Cancel</Button>
			</div>
		</Form>
	);
};

export default UserForm;

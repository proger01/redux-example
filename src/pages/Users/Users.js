import { useEffect, useState } from 'react';
import axios from "axios";
import './Users.css';

const Users = () => {
	const [rawUsers, setRawUsers] = useState();
	const [users, setUsers] = useState();
	const [searchName, setSearchName] = useState('');
	const [sex, setSex] = useState('');

	useEffect(() => {
		(async() => {
			try {

			} catch (error) {
				console.log('Error occured on users loading: ', error);
			}
			const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
			console.log('usersResponse', usersResponse);
			usersResponse.data[0].sex = 'male';
			usersResponse.data[1].sex = 'male';
			usersResponse.data[2].sex = 'male';
			usersResponse.data[3].sex = 'female';
			usersResponse.data[4].sex = 'female';
			usersResponse.data[5].sex = 'female';
			usersResponse.data[6].sex = 'female';
			usersResponse.data[7].sex = 'female';
			usersResponse.data[8].sex = 'female';
			usersResponse.data[9].sex = 'female';
			setRawUsers(usersResponse.data);
			setUsers(usersResponse.data);
		})();
	}, []);

	function onSearchName(event) {
		setSearchName(event.target.value);
		filterName(event.target.value);
		// filterSex(sex);
	}

	function filterName(name) {
		const regex = new RegExp(name, 'gi');
		const filteredUsers = rawUsers.filter((user) => regex.test(user.name));
		setUsers(filteredUsers);
	}

	function onFilterSex(event) {
		setSex(event.target.value);
		if (!event.target.value) {
			setUsers(rawUsers);
			return;
		}
		filterSex(event.target.value);
		// filterName(searchName);
	}

	function filterSex(sex) {
		const filteredUsers = rawUsers.filter((user) => user.sex === sex);
		setUsers(filteredUsers);
	}

	function onReset(event) {
		setUsers(rawUsers);
	}

	return (
		<div className='container'>
			<input className='search-name' onChange={onSearchName} type='text' value={searchName} />
			<select className='search-category' onChange={onFilterSex} value={sex}>
			<option value=''>All</option>
				<option value='male'>Male</option>
				<option value='female'>Female</option>
			</select>
			<button onClick={onReset}>Reset</button>
			<div className='users-block'>
				{
					users && users.map((user) => (
						<div className='user-card'>
							<div>{`Name: ${user.name}`}</div>
							<div>{`Email: ${user.name}`}</div>
						</div>
					))
				}
			</div>
		</div>
	);
}

export default Users;

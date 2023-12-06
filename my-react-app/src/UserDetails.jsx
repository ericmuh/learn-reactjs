import PropTypes from 'prop-types';

function UserDetails(props) {
    return (
        <ul>
            <li>{props.name}</li>
            <li>{props.age}</li>
        </ul>
    )
}

UserDetails.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired
};
export default UserDetails
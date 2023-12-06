import PropTypes from 'prop-types';

function Card(props) {
    return (
        <> {props.children}</>
    )
}

Card.propTypes = {

    children: PropTypes.node.isRequired,
};

export default Card;

import PropTypes from 'prop-types';

function Article(props) {
    return (
        <>
            <h1>{props.title}</h1>
            {props.children}
        </>
    )
}

Article.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Article;

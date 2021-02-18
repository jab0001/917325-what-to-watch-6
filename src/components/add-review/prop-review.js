import PropTypes from 'prop-types';

const propReview = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        posterImage: PropTypes.string.isRequired,
        backgroundImage: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })
  ),
  raiting: PropTypes.arrayOf(PropTypes.number.isRequired),
};

export default propReview;

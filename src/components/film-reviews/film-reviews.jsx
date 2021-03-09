import React from 'react';
import PropTypes from 'prop-types';

const FilmReviews = () => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">
              Discerning travellers and Wes Anderson fans will luxuriate in the
              glorious Mittel-European kitsch of one of the director&lsquo;s funniest
              and most exquisitely designed movies in years.
            </p>
            <footer className="review__details">
              <cite className="review__author">Kate Muir</cite>
              <time className="review__date" dateTime="2016-12-24">
                December 24, 2016
              </time>
            </footer>
          </blockquote>
          <div className="review__rating">8,9</div>
        </div>
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">
              Anderson&lsquo;s films are too precious for some, but for those of us
              willing to lose ourselves in them, they&lsquo;re a delight. &rsquo;The Grand
              Budapest Hotel&rsquo; is no different, except that he has added a hint
              of gravitas to the mix, improving the recipe.
            </p>
            <footer className="review__details">
              <cite className="review__author">Bill Goodykoontz</cite>
              <time className="review__date" dateTime="2015-11-18">
                November 18, 2015
              </time>
            </footer>
          </blockquote>
          <div className="review__rating">8,0</div>
        </div>
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">
              I didn&lsquo;t find it amusing, and while I can appreciate the
              creativity, it&lsquo;s an hour and 40 minutes I wish I could take back.
            </p>
            <footer className="review__details">
              <cite className="review__author">Amanda Greever</cite>
              <time className="review__date" dateTime="2015-11-18">
                November 18, 2015
              </time>
            </footer>
          </blockquote>
          <div className="review__rating">8,0</div>
        </div>
      </div>
      <div className="movie-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">
              The mannered, madcap proceedings are often delightful,
              occasionally silly, and here and there, gruesome and/or
              heartbreaking.
            </p>
            <footer className="review__details">
              <cite className="review__author">Matthew Lickona</cite>
              <time className="review__date" dateTime="2016-12-20">
                December 20, 2016
              </time>
            </footer>
          </blockquote>
          <div className="review__rating">7,2</div>
        </div>
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">
              It is certainly a magical and childlike way of storytelling, even
              if the content is a little more adult.
            </p>
            <footer className="review__details">
              <cite className="review__author">Paula Fleri-Soler</cite>
              <time className="review__date" dateTime="2016-12-20">
                December 20, 2016
              </time>
            </footer>
          </blockquote>
          <div className="review__rating">7,6</div>
        </div>
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">
              It is certainly a magical and childlike way of storytelling, even
              if the content is a little more adult.
            </p>
            <footer className="review__details">
              <cite className="review__author">Paula Fleri-Soler</cite>
              <time className="review__date" dateTime="2016-12-20">
                December 20, 2016
              </time>
            </footer>
          </blockquote>
          <div className="review__rating">7,0</div>
        </div>
      </div>
    </div>
  );
};

const {object} = PropTypes;

FilmReviews.propTypes = {
  film: object.isRequired,
};

export default FilmReviews;

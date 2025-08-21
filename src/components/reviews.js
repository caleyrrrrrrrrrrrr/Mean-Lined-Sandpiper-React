import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './reviews.css'

const Reviews = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="reviews-max-width thq-section-max-width">
        <div className="reviews-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="reviews-text24">Guest Reviews</span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card reviews-card1">
                <div className="reviews-container12">
                  <div className="reviews-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="reviews-text26">
                            Sheila &amp; Danny
                          </span>
                        </Fragment>
                      )}
                    </strong>
                  </div>
                </div>
                <span className="reviews-text12 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="reviews-text22">
                        Such a charming property, so peaceful and relaxing.
                        Loved it and will definitely be back again. P.S. Even my
                        husband picked up a book - first time in 35 years!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card reviews-card2">
                <div className="reviews-container14">
                  <div className="reviews-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="reviews-text25">
                            Dan &amp; Maisy
                          </span>
                        </Fragment>
                      )}
                    </strong>
                  </div>
                </div>
                <span className="reviews-text14 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="reviews-text27">
                        Thank you so much for having us here, it&apos;s such and
                        amazing space, we absolutely loved it! :)
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card reviews-card3">
                <div className="reviews-container16">
                  <div className="reviews-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="reviews-text20">
                            Bheks &amp; Tatiana
                          </span>
                        </Fragment>
                      )}
                    </strong>
                  </div>
                </div>
                <span className="reviews-text16 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="reviews-text21">
                        Your flat is a beautiful little hideaway - cosy,
                        colourful and full of charm. We felt like we truly hit
                        the reset button while we were here. &lt;3 Everything
                        from the colours to the peaceful location near the beach
                        made the perfect getaway!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card reviews-card4">
                <div className="reviews-container18">
                  <div className="reviews-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="reviews-text23">Wendy</span>
                        </Fragment>
                      )}
                    </strong>
                  </div>
                </div>
                <span className="reviews-text18 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="reviews-text19">
                        Your flat is beautiful, it suited me perfectly for a
                        weekend visiting a friend nearby. Thanks for the cream
                        tea and other lovely delicacies that you left me. Best
                        wishes.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Reviews.defaultProps = {
  review4: undefined,
  author3Name: undefined,
  review3: undefined,
  review1: undefined,
  author4Name: undefined,
  heading1: undefined,
  author2Name: undefined,
  author1Name: undefined,
  review2: undefined,
}

Reviews.propTypes = {
  review4: PropTypes.element,
  author3Name: PropTypes.element,
  review3: PropTypes.element,
  review1: PropTypes.element,
  author4Name: PropTypes.element,
  heading1: PropTypes.element,
  author2Name: PropTypes.element,
  author1Name: PropTypes.element,
  review2: PropTypes.element,
}

export default Reviews

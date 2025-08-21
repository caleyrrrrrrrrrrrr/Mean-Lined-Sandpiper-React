import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list4.css'

const ContentList4 = (props) => {
  return (
    <div className="content-list4-container thq-section-padding">
      <div className="content-list4-max-width thq-section-max-width thq-flex-column">
        <div className="content-list4-content1 thq-flex-column">
          <ul className="content-list4-ul1 thq-flex-column">
            <li className="content-list4-li10 thq-flex-column list-item">
              <h3 className="thq-heading-3">
                {props.heading9 ?? (
                  <Fragment>
                    <span className="content-list4-text34">
                      <span>Starting my holiday let,</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small content-list4-content9">
                {props.content9 ?? (
                  <Fragment>
                    <span className="content-list4-text12">
                      <span>
                        Starting my holiday let, I had no idea how difficult it
                        would be to find a service to do changeovers to a five
                        star standard. When you enter my property, it needs to
                        feel as if no one has ever stayed here before. I want
                        each guest to feel not only pampered and relaxed, but
                        cared for - that is why the
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="content-list4-text14">only</span>
                      <span>
                        {' '}
                        thing that matters is
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="content-list4-text16">everything</span>
                      <span>.</span>
                      <br></br>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        Initially, being based remotely the journeys to complete
                        change over’s were difficult, but I just couldn’t trust
                        it to anyone else. I wanted change over goodie packs,
                        handwritten welcome cards and freshly laundered linen
                        that smelled like spring. I wanted healthy houseplants
                        and bunches of flowers to greet my guests; for my place
                        to look and feel as perfect as possible.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Contact me today to discuss your requirements.
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </p>
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="content-list4-image"
              />
            </li>
          </ul>
        </div>
        <div className="content-list4-content2 thq-flex-column">
          <div className="content-list4-content3 thq-flex-column">
            <ul className="content-list4-ul2 thq-flex-column"></ul>
          </div>
          <h3 className="thq-heading-3">
            {props.heading31 ?? (
              <Fragment>
                <span className="content-list4-text10">
                  Services available:
                </span>
              </Fragment>
            )}
          </h3>
          <ul className="content-list4-ul3 thq-flex-column">
            <li className="content-list4-li11 thq-flex-column list-item">
              <ul className="content-list4-ul4 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading2 ?? (
                      <Fragment>
                        <span className="content-list4-text30">
                          <span>Goodie packs and welcome cards</span>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading3 ?? (
                      <Fragment>
                        <span className="content-list4-text37">
                          Replace and restock basics
                        </span>
                      </Fragment>
                    )}
                  </h3>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading4 ?? (
                      <Fragment>
                        <span className="content-list4-text28">
                          Fresh flowers
                        </span>
                      </Fragment>
                    )}
                  </h3>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading5 ?? (
                      <Fragment>
                        <span className="content-list4-text27">
                          House plant care
                        </span>
                      </Fragment>
                    )}
                  </h3>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading51 ?? (
                      <Fragment>
                        <span className="content-list4-text26">
                          Change over cleaning 
                        </span>
                      </Fragment>
                    )}
                  </h3>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading511 ?? (
                      <Fragment>
                        <span className="content-list4-text29">
                          Linen care, bedding and towel wash, dry and iron
                        </span>
                      </Fragment>
                    )}
                  </h3>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading5111 ?? (
                      <Fragment>
                        <span className="content-list4-text33">
                          Sourcing new soft furnishing
                        </span>
                      </Fragment>
                    )}
                  </h3>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading51111 ?? (
                      <Fragment>
                        <span className="content-list4-text11">
                          Garden and patio care
                        </span>
                      </Fragment>
                    )}
                  </h3>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList4.defaultProps = {
  heading31: undefined,
  heading51111: undefined,
  content9: undefined,
  imageSrc: '/e45cc3c8-1a6c-4d1b-b0f3-5e5260aced81-200w.jpg',
  imageAlt: 'image',
  heading51: undefined,
  heading5: undefined,
  heading4: undefined,
  heading511: undefined,
  heading2: undefined,
  heading5111: undefined,
  heading9: undefined,
  heading3: undefined,
}

ContentList4.propTypes = {
  heading31: PropTypes.element,
  heading51111: PropTypes.element,
  content9: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  heading51: PropTypes.element,
  heading5: PropTypes.element,
  heading4: PropTypes.element,
  heading511: PropTypes.element,
  heading2: PropTypes.element,
  heading5111: PropTypes.element,
  heading9: PropTypes.element,
  heading3: PropTypes.element,
}

export default ContentList4

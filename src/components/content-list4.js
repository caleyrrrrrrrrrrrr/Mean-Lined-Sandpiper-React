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
                      <span>The Bookcase</span>
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
                        Come and write your heart out in beautiful Dawlish, by the sea! Just twelve minutes along the Riviera Line from Exeter UNESCO City of Literature and a ten minute walk from the sea. 
                      </span>
                      <br></br>
                      <span>
                       The Bookcase is a beautiful garret retreat, set up by a writer for writers. Here you will find a cozy rooftop space in which to read, write, think, reflect and 
re-charge. Ascend the spiral staircase to the private balcony and enter via the sliding glass door. Surrounded by books, you will have a much loved ancient writing table, 5G internet connection, notebooks, blankets, a king sized bed furnished with French linen and your own little kitchen filled with plants. 
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Across the road is the Manor House Garden filled with subtropical plants and benches, ideal for sitting and contemplating by Dawlish Water, a red river which runs down to the Atlantic Ocean. 
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        A five minute stroll will bring you to The Dawlish Bookshop, where you will find a book voucher waiting for you, with compliments of The Bookcase. 
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
            <li className="content-list4-li10 thq-flex-column list-item">
              <h3 className="thq-heading-3">
                {props.heading9 ?? (
                  <Fragment>
                    <span className="content-list4-text34">
                      <span>Dawlish</span>
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
Dawlish is a beautiful seaside town between Exeter and Torquay on the gentle South Devon Coast. Jane Austen stayed here in 1802 and 1804 and the town features in Sense and Sensibility.  
                      </span>
                      <br></br>
                      <span>
                       Dawlish is famous for its seaside location, dramatic red cliffs, sandy beaches and scenic railway (The Riviera Line) and perhaps, most iconically, its black swans.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
Wild swimmers will be pleased to know that Dawlish is a popular year round swim spot, with swimmers favouring sheltered Coryton Cove as a sheltered, year-round spot to take a dip. The outdoor Cove Cafe remains open year round to warm you up with a coffee or hot chocolate afterwards. 
                      </span>
                      <br></br>
                      <br></br>
                      <span>
Fancy a warm swim and sauna? Cofton, spa, sauna and steam room (near Dawlish Warren) can be booked by non-residents: www.coftonholidays.co.uk
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
                  Links to interesting things:
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

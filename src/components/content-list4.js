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
Fancy a warm swim and sauna? Cofton, spa, sauna and steam room (near Dawlish Warren) can be booked by non-residents: <a href="https://www.coftonholidays.co.uk" target="_blank">www.coftonholidays.co.uk</a>
                      </span>
                      <br></br>
                      <br></br>
                      <span>
The beauty of Dawlish is enhanced by Dawlish Water, the river that runs through Dawlish flowing from Haldon moor on the higher ground. On Dawlish Water you will see not only the famous black swans, but a wide variety of rare breed duck species. There is a bird viewing station and hatchery opposite Gays Creamery, which can be visited free of charge.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
Due to the Permian Red Sandstone formed from wind blown desert sand 250 million years ago, the area is known for its red sand and sandstones and is of special interest to geologists while those interested in architecture will appreciate the regency style architecture.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
From here you can join the South West coast path and walk to Dawlish Warren National Nature Reserve (SSSI) along the sea wall or in the other direction the marine town of Teignmouth and quaint village of Shaldon.  A little further afield, the stunning independent town of Totnes <a href="https://www.visittotnes.co.uk" target="_blank">www.visittotnes.co.uk</a> with its many bookshops, quirky cafes, bars and cinema is easily reachable via a 24 minute train ride. 
                      </span>
                      <br></br>
                      <br></br>
                      <span>
Exeter is a UNESCO City of Literature and as such ‘believes in the power of words to change our world…’ <a href="https://www.exetercityofliterature.com" target="_blank">www.exetercityofliterature.com</a> for details of the latest reading and writing events, including the Silent Book Club. 
                      </span>
                      <br></br>
                      <br></br>
                      <span>
The Riviera train line was designed by Isambard Kingdom Brunel and is one of the most scenic in the country, it runs straight along the seawall and goes through seven tunnels in the red rock, which would have been blasted out with dynamite. Brunel’s only surviving pumping house from 1845 can still be seen at nearby Starcross.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
 A list of books set in Devon to inspire your stay: <a href="https://www.visitdevon.co.uk/explore/the-devon-read-list/" target="_blank">www.visitdevon.co.uk/explore/the-devon-read-list/</a> 
                    </span>
                    </span>
                  </Fragment>
                )}
              </p>
              {/*
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="content-list4-image"
              />
            */}
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

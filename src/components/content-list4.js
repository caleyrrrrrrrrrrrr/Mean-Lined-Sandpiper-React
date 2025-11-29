import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list4.css'

const ContentList4 = (props) => {
  // split the long content into sections and provide images that alternate left/right
  const sections = [
    {
      html: `
        <p>Dawlish is a beautiful seaside town between Exeter and Torquay on the gentle South Devon Coast. Jane Austen stayed here in 1802 and 1804 and the town features in Sense and Sensibility.</p>
      `,
      image: props.imageSrc,
    },
    {
      html: `
        <p>Dawlish is famous for its seaside location, dramatic red cliffs, sandy beaches and scenic railway (The Riviera Line) and perhaps, most iconically, its black swans.</p>
      `,
      image: props.imageSrc2,
    },
    {
      html: `
        <p>Wild swimmers will be pleased to know that Dawlish is a popular year round swim spot, with swimmers favouring sheltered Coryton Cove as a sheltered, year-round spot to take a dip. The outdoor Cove Cafe remains open year round to warm you up with a coffee or hot chocolate afterwards.</p>
      `,
      image: props.imageSrc,
    },
    {
      html: `
        <p>Fancy a warm swim and sauna? Cofton, spa, sauna and steam room (near Dawlish Warren) can be booked by non-residents: <a href="https://www.coftonholidays.co.uk" target="_blank" rel="noopener">www.coftonholidays.co.uk</a></p>
      `,
      image: props.imageSrc2,
    },
    {
      html: `
        <p>The beauty of Dawlish is enhanced by Dawlish Water, the river that runs through Dawlish flowing from Haldon moor on the higher ground. On Dawlish Water you will see not only the famous black swans, but a wide variety of rare breed duck species. There is a bird viewing station and hatchery opposite Gays Creamery, which can be visited free of charge.</p>
      `,
      image: props.imageSrc,
    },
    {
      html: `
        <p>From here you can join the South West coast path and walk to Dawlish Warren National Nature Reserve (SSSI) along the sea wall or in the other direction the marine town of Teignmouth and quaint village of Shaldon. A little further afield, the stunning independent town of Totnes <a href="https://www.visittotnes.co.uk" target="_blank" rel="noopener">www.visittotnes.co.uk</a> is easily reachable via a 24 minute train ride.</p>
      `,
      image: props.imageSrc2,
    },
    {
      html: `
        <p>Exeter is a UNESCO City of Literature and as such ‘believes in the power of words to change our world…’ <a href="https://www.exetercityofliterature.com" target="_blank" rel="noopener">www.exetercityofliterature.com</a> for details of the latest reading and writing events, including the Silent Book Club.</p>
      `,
      image: props.imageSrc,
    },
    {
      html: `
        <p>A list of books set in Devon to inspire your stay: <a href="https://www.visitdevon.co.uk/explore/the-devon-read-list/" target="_blank" rel="noopener">www.visitdevon.co.uk/explore/the-devon-read-list/</a></p>
      `,
      image: props.imageSrc2,
    },
  ]

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
                      <span>Dawlish</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </h3>

              {/* replaced the single paragraph with a grid of alternating image/text rows */}
              <div className="content-list4-grid">
                {sections.map((sec, i) => (
                  <div
                    key={i}
                    className={`content-list4-grid-row ${
                      i % 2 === 1 ? 'reverse' : ''
                    }`}
                  >
                    <figure className="content-list4-grid-image">
                      <img src={sec.image} alt={`Dawlish ${i + 1}`} />
                    </figure>
                    <div
                      className="content-list4-grid-text"
                      dangerouslySetInnerHTML={{ __html: sec.html }}
                    />
                  </div>
                ))}
              </div>

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
  imageSrc2: '/IMG_2811.webp',
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
  imageSrc2: PropTypes.string,
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

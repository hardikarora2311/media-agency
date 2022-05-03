import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const query = graphql`
  {
    allContentfulService(sort: {fields: order, order: ASC}) {
      nodes {
        icon {
          gatsbyImageData(placeholder: BLURRED)
        }
        title
        description {
          description
        }
      }
    }
  }
`

const ServiceList = () => {
  const data= useStaticQuery(query)
  const services= data.allContentfulService.nodes
  return (
    <div className="service-list">
        {services.map((service=>{
          const {icon, title, description:{description}}= service
          const iconPath= getImage(icon)
          return <div className="service-box">
            <GatsbyImage image={iconPath} alt={title} className="icon"/>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        }))}
      
    </div>
  )
}

export default ServiceList
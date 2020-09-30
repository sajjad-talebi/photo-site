import React from "react"
import Img from "gatsby-image"
import "./app.css"
export const pageQuery = graphql`
{
  allFile(filter: {absolutePath: {regex: "//photos/"}}) {
    edges {
      node {
        id
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}`

const HomePage = ({ data }) => {

  
  return (
    <div>
<div className="photos">
{data.allFile.edges.map(e=>{
  
  return <Img key={e.node.id} fluid={e.node.childImageSharp.fluid}/>
  })}
</div>
    </div>
  )
}
export default HomePage

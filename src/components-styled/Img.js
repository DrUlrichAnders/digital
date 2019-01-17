import styled from "styled-components"

// pictures and images must be defined as display: block;
// Otherwise they are considered to be fonts and show font descenders
// below the baseline
const Img = styled.img`
  display: block;
  font-size: 0;
  line-height: 0;
  margin-bottom: 0;
  width: 100%;
`

export default Img

import styled, { css } from "styled-components"

/**
 * PictureFrame is surrounding a Picture. The purpose is to fix the margins
 * and also the aspect ratio. The aspect ratio is fixed with the well know
 * trick to set `height: 0` and to then determine the `padding-bottom` in
 * percentages. Which makes the whole content box a percentage of the width.
 */
const PictureFrame = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  height: 0;
  padding-bottom: ${props =>
    (props.paddingsInPercent && props.paddingsInPercent[0] + "%") || "100%"};
  ${props =>
    props.mediaStrings &&
    props.mediaStrings.length >= 1 &&
    css`
      @media ${props => props.mediaStrings[1]} {
        padding-bottom: ${props => props.paddingsInPercent[1]}%;
      }
    `}
  ${props =>
    props.mediaStrings &&
    props.mediaStrings.length >= 2 &&
    css`
      @media ${props => props.mediaStrings[2]} {
        padding-bottom: ${props => props.paddingsInPercent[2]}%;
      }
    `}
  ${props =>
    props.mediaStrings &&
    props.mediaStrings.length >= 3 &&
    css`
      @media ${props => props.mediaStrings[3]} {
        padding-bottom: ${props => props.paddingsInPercent[3]}%;
      }
    `}
`

export default PictureFrame

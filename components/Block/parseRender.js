import {parseAlign} from './parseAlign';

// const parseWidth = ({width, px}, theme) => {
//   if (typeof width === 'string') {
//     if (px) return `width: calc(100% )`
//     if (width) return `width: ${width}`
//     return `width: 100%`
//   }
// }

const parseStyle = (props, theme) => {
  return `
    ${parseAlign(props, theme)}
    ${theme.parseBgColor(props, theme)}
    ${theme.parseDimension(props, theme)}
    ${theme.parseFontColor(props, theme)}
    ${theme.parseFontFamily(props, theme)}
    ${theme.parseCustomDef(props, theme)}
    ${theme.parseCustom(props, theme)}
    ${theme.parseMargin(props, theme)}
    ${theme.parsePadding(props, theme)}
  `;
};

const parseProps = (media, props) => {
  const xs = `
    @media (min-width: ${props.theme.queries.xs}) {
      ${parseStyle(props.xs, props.theme)}
    }
  `;
  const sm = `
    @media (min-width: ${props.theme.queries.sm}) {
      ${parseStyle(props.sm, props.theme)}
    }
  `;
  const md = `
    @media (min-width: ${props.theme.queries.md}) {
      ${parseStyle(props.md, props.theme)}
    }
  `;
  const lg = `
    @media (min-width: ${props.theme.queries.lg}) {
      ${parseStyle(props.lg, props.theme)}
    }
  `;
  const xl = `
    @media (min-width: ${props.theme.queries.xl}) {
      ${parseStyle(props.xl, props.theme)}
    }
  `;
  const noQuery = `
    ${parseStyle(props, props.theme)}
  `;
  switch (media) {
    case 'xs':
      return xs;
    case 'sm':
      return sm;
    case 'md':
      return md;
    case 'lg':
      return lg;
    case 'xl':
      return xl;
    default:
      return noQuery;
  }
};

export {parseProps};
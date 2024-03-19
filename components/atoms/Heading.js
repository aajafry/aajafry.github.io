/* eslint-disable react/no-unescaped-entities */
export default function Heading({ type, classes, label }) {
  switch (type) {
    case "h1":
      return <h1 className={classes}>{label}</h1>;
      break;
    case "h2":
      return <h2 className={classes}>{label}</h2>;
      break;
    case "h3":
      return <h3 className={classes}>{label}</h3>;
      break;
    case "h4":
      return <h4 className={classes}>{label}</h4>;
      break;
    case "h5":
      return <h5 className={classes}>{label}</h5>;
      break;
    case "h6":
      return <h6 className={classes}>{label}</h6>;
      break;
    default:
      return <>you're not define heading type!</>;
      break;
  }
}

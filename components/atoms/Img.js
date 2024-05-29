import Image from "next/image";

export default function Img({ isFixed, source, alt, classes, transitionDuration }) {
  if (isFixed) {
    return (
      <Image
        src={source}
        alt={alt}
        height={100}
        width={100}
        quality={100}
        priority
        // loading="lazy"
        // placeholder="blur"
        className={`${classes} w-full`}
        style={{ transitionDuration: transitionDuration }}
      />
    );
  }
  return (
    <Image
      src={source}
      alt={alt}
      quality={100}
      // fill={true}
      layout="fill"
      loading="lazy"
      placeholder="blur"
      className={classes}
    />
  );
}

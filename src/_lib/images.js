function withVariants(image, site) {
  const src = image.src || site.fallbackImage;
  const width = Number(image.width) || 1280;
  const height = Number(image.height) || 720;
  const webp = src.endsWith(".webp");
  const avif = webp ? src.replace(/\.webp$/, ".avif") : "";
  const small = webp ? src.replace(/\.webp$/, "-640.webp") : "";
  const smallAvif = webp ? src.replace(/\.webp$/, "-640.avif") : "";
  const credit = image.credit || "";
  return {
    src,
    alt: image.alt || site.fallbackImageAlt,
    credit,
    source_url: image.source_url || "",
    licence: image.licence || image.license || "",
    width,
    height,
    avif,
    srcsetWebp: small ? `${small} 640w, ${src} ${width}w` : "",
    srcsetAvif: smallAvif && avif ? `${smallAvif} 640w, ${avif} ${width}w` : "",
    aiGenerated: credit.startsWith("AI-generated"),
  };
}

export function storyImage(image, site) {
  if (image == null || image === "") {
    return withVariants(
      {
        src: site.fallbackImage,
        alt: site.fallbackImageAlt,
        credit: "",
        width: site.fallbackImageWidth,
        height: site.fallbackImageHeight,
      },
      site,
    );
  }
  if (typeof image === "string") {
    const social = image === site.defaultImage;
    return withVariants(
      {
        src: image,
        alt: site.defaultImageAlt,
        width: social ? 1200 : 1280,
        height: social ? 630 : 720,
      },
      site,
    );
  }
  return withVariants(
    {
      src: image.src || site.fallbackImage,
      alt: image.alt || site.defaultImageAlt,
      credit: image.credit || "",
      source_url: image.source_url || "",
      licence: image.licence || image.license || "",
      width: Number(image.width) || 1280,
      height: Number(image.height) || 720,
    },
    site,
  );
}

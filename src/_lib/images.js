export function storyImage(image, site) {
  const fallback = {
    src: site.defaultImage,
    alt: site.defaultImageAlt,
    credit: "",
    source_url: "",
    licence: "",
    width: 1200,
    height: 630,
    avif: "",
    srcsetWebp: "",
    srcsetAvif: "",
  };
  if (!image) return fallback;
  if (typeof image === "string") {
    return { ...fallback, src: image };
  }
  const src = image.src || site.defaultImage;
  const width = Number(image.width) || (src.endsWith(".png") ? 1200 : 1200);
  const height = Number(image.height) || (src.endsWith(".png") ? 630 : 675);
  const webp = src.endsWith(".webp");
  const avif = webp ? src.replace(/\.webp$/, ".avif") : "";
  const small = webp ? src.replace(/\.webp$/, "-640.webp") : "";
  const smallAvif = webp ? src.replace(/\.webp$/, "-640.avif") : "";
  return {
    src,
    alt: image.alt || site.defaultImageAlt,
    credit: image.credit || "",
    source_url: image.source_url || "",
    licence: image.licence || image.license || "",
    width,
    height,
    avif,
    srcsetWebp: small ? `${small} 640w, ${src} ${width}w` : "",
    srcsetAvif: smallAvif && avif ? `${smallAvif} 640w, ${avif} ${width}w` : "",
  };
}

const getCroppedImage = (url: string) => {
  if(!url) return "./assets/images/no-image-placeholder-6f3882e0.webp";
  return url.replace("io/media","io/media/crop/600/400/");
};

export default getCroppedImage;

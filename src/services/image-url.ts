const getCroppedImage = (url: string) => {
  if(!url) return ""
  return url.replace("io/media","io/media/crop/600/400/");
};

export default getCroppedImage;

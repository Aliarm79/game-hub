const getCroppedImage = (url: string) => {
  return url.replace("io/media","io/media/crop/600/400/");
};

export default getCroppedImage;

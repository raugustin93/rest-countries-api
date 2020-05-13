const imagemin = require("imagemin");
const webp = require("imagemin-webp");

var outputFolder = "./src/images",
  PNGImages = outputFolder + "/*.png",
  JPEGImages = outputFolder + "/*.jpg";

imagemin([PNGImages], outputFolder, {
  plugins: [
    webp({
      lossless: true,
    }),
  ],
});
imagemin([JPEGImages], outputFolder, {
  plugins: [
    webp({
      quality: 75,
    }),
  ],
});

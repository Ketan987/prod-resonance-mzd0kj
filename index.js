const cloudinary = require("cloudinary").v2;

// Configuration
cloudinary.config({
  cloud_name: "dyiea0e1o",
  api_key: "177726119676393",
  api_secret: "wgxgIvCRiTL_kx4W3JKT2pmZs1A",
});

const imgs = "https://upload.wikimedia.org/wikipedia/commons/d/d8/United_Nations_Flags_-_cropped.jpg";

const main = async () => {
  const res = await cloudinary.uploader.upload(imgs);
  console.log(`Succesfully Uploaded Image ${imgs}`);
  console.log(`>> Result : ${res.secure_url}`);
};

main()
  .then((res) => console.log(res))
  .catch((err) => console.log("Error", err));

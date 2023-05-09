const cloudinary = require("cloudinary").v2;
const axios = require('axios');

// Configuration
cloudinary.config({
  cloud_name: "dyiea0e1o",
  api_key: "177726119676393",
  api_secret: "wgxgIvCRiTL_kx4W3JKT2pmZs1A",
});

// const imgs = "https://upload.wikimedia.org/wikipedia/commons/d/d8/United_Nations_Flags_-_cropped.jpg";

const downloadFiles = async (url) => {
  console.log('url',url)
  const file = await axios.get(url, {
    responseType: "blob",
  });
  return file.status;
};


const uploadToBlob = (data) => {
  console.log('upload to blob!!')
}

const main = async () => {
  let next_curser = "";
  while (next_curser != null) {
    const res = await cloudinary.api.resources({
      prefix: "samples",
      type: "upload",
      next_cursor: next_curser,
    });
    next_curser = res.next_cursor ? res.next_cursor : null;
    console.log(`Succesfully Uploaded Image ${JSON.stringify(next_curser)}`);
    console.log(`>> Result : ${res.resources.length}`);
    const fileUrls = res.resources.map((res) => res.secure_url);
    Promise.all(fileUrls.map(url => downloadFiles(url)))
    .then(res => {
      console.log(res)
      uploadToBlob(res)
    })
    .catch(err => console.log(err))
    
    console.log("files downloads data", fileUrls);
  }
};

main()
  .then((res) => console.log("Done!"))
  .catch((err) => console.log("Error", err));

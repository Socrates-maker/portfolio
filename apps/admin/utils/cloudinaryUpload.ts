import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadFileToCloudinary = async (file: File) => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const uploadResult: UploadApiResponse | undefined = await new Promise(
      (resolve) => {
        cloudinary.uploader
          .upload_stream(
            { resource_type: "auto", folder: "portfolio" },
            (error, result) => {
              return resolve(result);
            },
          )
          .end(buffer);
      },
    );
    console.log(uploadResult);
    return uploadResult;
  } catch (error) {
    console.log(error);
  }
};

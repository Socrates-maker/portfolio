import { FileSchema } from "@/lib/zodSchema";
import { uploadFileToCloudinary } from "@/utils/cloudinaryUpload";

export async function POST(request: Request) {
  const formSata = await request.formData();
  console.log("data", formSata.get("file"));
  const validate = FileSchema.safeParse({ file: formSata.get("file") });
  if (!validate.success) {
    return Response.json(
      { message: "Field error", errors: validate.error.flatten().fieldErrors },
      { status: 400 },
    );
  }
  const fileUploadResult = await uploadFileToCloudinary(validate.data.file);
  if (!fileUploadResult) {
    return Response.json(
      {
        message: "unknown error",
        errors: "An error occurred. upload file upload failed",
      },
      { status: 500 },
    );
  }
  return Response.json(
    { message: "File uploaded", data: fileUploadResult },
    { status: 200 },
  );
}

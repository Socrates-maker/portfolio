const LOCAL_API_URL = process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL;
const API_URL = process.env.API_BASE_URL;

export const FILE_UPLOAD_URL = `${LOCAL_API_URL}/cloudinary`;
export const apiRoutes = {
  projects: `${API_URL}/projects`,
};

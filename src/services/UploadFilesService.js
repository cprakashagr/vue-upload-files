import http from "../http-common";

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("uploadFile", file);

    return http.post("/inbound/uploadSkus/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "ddd364f2-3b97-4417-9c10-5f4824e9b40a"
      },
      onUploadProgress
    });
  }

  getFiles() {
    return http.get("/files");
  }
}

export default new UploadFilesService();

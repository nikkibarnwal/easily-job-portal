import multer from "multer";
import path from "path";
import { uid } from "../../common/utility.js";

const resumePath = path.join(path.resolve(), "public", "resume");
// Set the maximum file size to 5MB (5 * 1024 * 1024 bytes)
const MAX_SIZE = 5 * 1024 * 1024;

const storageConfiguration = multer.diskStorage({
  limits: { fileSize: MAX_SIZE }, // Limit file size
  fileFilter: (req, file, cb) => {
    // Check file type
    if (file.mimetype !== "application/pdf") {
      return cb(new Error("Only PDF files are allowed"));
    }
    cb(null, true); // Accept the file
  },
  destination: (req, file, cb) => {
    cb(null, resumePath);
  },
  filename: (req, file, cb) => {
    const name = uid() + "-" + file.originalname;
    cb(null, name);
  },
});

const uploadFile = multer({ storage: storageConfiguration });
export default uploadFile;

import multer from "multer";
import path from "path";
import { uid } from "../../common/utility.js";

const resumePath = path.join(path.resolve(), "public", "resume");

const storageConfiguration = multer.diskStorage({
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

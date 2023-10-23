import multer from "multer";
import fs from "fs";
// const uploadDirectory = "../Images";

// if (!fs.existsSync(uploadDirectory)) {
//   fs.mkdirSync(uploadDirectory);
// }

const storage=multer.diskStorage({
    destination :(req,file,cb)=>{
        cb(null,"../Images")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))

    }
})

 const upload =multer({storage:storage})
 export default upload


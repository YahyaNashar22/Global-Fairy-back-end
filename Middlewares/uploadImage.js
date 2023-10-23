import multer from "multer";
const storage=multer.diskStorage({
    destination :(req,file,cb)=>{
        cb(null,"./Images")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))

    }
})

 const upload =multer({storage:storage})
 export default upload
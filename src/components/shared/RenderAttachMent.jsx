import { FileOpen as FileOpenIcon } from "@mui/icons-material";
import { transformImage } from "../../lib/features";

const RenderAttachMent = ( file, url ) => {
    switch (file) {
        case 'video':
        return    <video controls src={url} preload="none" width={'200px'} />
            

        case 'image':
            return  <img src={transformImage( url,200)} alt="" width={'200px'}
                height='150px'
                style={{
                    objectFit: 'contain'
                }}

            />
            case 'audio':
                return    <audio controls src={url} preload="none" />



        default:
           <FileOpenIcon />;
    }
}

export default RenderAttachMent
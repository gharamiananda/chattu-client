const fileFormat=(url='')=>{
    const ext = url.split('.').pop();
    if(ext==='jpg' || ext==='jpeg' || ext==='png' || ext==='gif'){
        return 'image';
    }
    else if(ext==='mp4' || ext==='mov' || ext==='avi'){
return 'video';
    }
    else if(ext==='mp3' || ext==='wav'){
        return 'video';
            }

    return 'unknown_file_type';
};


const transformImage=(url='',width=100,height=100)=>{
    return `${url}?w=${width}&h=${height}`;
}

export {
    fileFormat,
    transformImage
}
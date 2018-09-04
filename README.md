# quill-image-uploader
> Customize image upload for quill module.


## install:
```bash
npm install -S afeiship/quill-image-uploader --registry=https://registry.npm.taobao.org
```

## usage:
```js
import QuillImageUploader from 'quill-image-uploader';

// register module:
Quill.register('modules/image-uploader', QuillImageUploader);

// quill module config:
{
  modules:{
    'image-uploader':{
      onUpload: (inEvent)=>{
        // value is a File object;
        const { value } = inEvent.target;
        return new Promise(function(resolve){
          resolve({
            url:'http://placeholder.qiniudn.com/80x80'
          });
        });
      }
    }
  }
}

```


export const fileUpload = async ( file ) => {


    /* let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Authorization', 'Basic ' + btoa('137711148128255:xJSWnUCSuGxVlxQ9Q3LVFX80XpA')); */
    const cloudUrl = 'https://api.cloudinary.com/v1_1/gobernaci-n-de-risaralda/upload';
    
   /*  console.log(headers) */
    const formData = new FormData();
    formData.append('file',file);
    formData.append('upload_preset','React-Diary');

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData,
            
        });
       
        if( resp.ok){

            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else{
            console.log('entre aqui')
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
}
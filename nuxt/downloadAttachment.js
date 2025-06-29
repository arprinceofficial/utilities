// response 
{
  "status": "success",
  "error": false,
  "data": "https://api-dev.ph.orangebd.com/storage/attachments/attachments_5221_1751172237.zip"
}

// Function 
const downloadAllAttachments = async (id) => {
    console.log('Download all attachments for ID:', id);
    isDownloading.value = true;
    try {
        const getData = await useNuxtApp().$apiFetch(`/api/citizen/application/all-attachment-zip`, {
            method: 'POST',
            body: {
                id: id
            },
            headers: {
                'Authorization': 'Bearer ' + getUserData.value.token,
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': getUserData.value.token
            }
        })
        
        if (getData && getData.status === 'success' && getData.data) {
            const downloadUrl = getData.data;
            
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = `attachments_${id}.zip`;
            link.target = '_blank';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            console.log('Download initiated for:', downloadUrl);
        } else {
            console.error('Unexpected response format:', getData);
            throw new Error('Invalid response format');
        }
        
    } catch (e) {
        console.error('Error downloading attachments:', e);
        throw e;
    } finally {
        isDownloading.value = false;
    }
}

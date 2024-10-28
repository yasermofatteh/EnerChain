import { useState } from 'react';
import { uploadToIPFS } from '../utils/ipfs';
import { storeModelHash } from '../utils/blockchain';

function UploadForm() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (file) {
            const hash = await uploadToIPFS(file);
            await storeModelHash(hash);
            alert("Model uploaded successfully!");
        } else {
            alert("Please select a file first.");
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload & Save</button>
        </div>
    );
}

export default UploadForm;

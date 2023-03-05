import { useEffect, useRef, useState } from "react"
import { 
    AddPhotos,
    Container
} from "../components/styled/AddImages.styled"
import ImagesPreview from "./ImagesPreview"
const MAXSIZE = 1

const AddImages = () => {
    const [files, setFiles] = useState([])
    const [numberOfImages, setNumberOfImages] = useState(files.length)
    const inputFile = useRef(null)

    const onAddImagesClickHanlder = () => {
        console.log("Add click");
        inputFile.current.click()
    }

    const onAddFileHandler = (event) => {
        const newFiles = files
        for(let i = 0; i < event.target.files.length; i++) {
            if(newFiles.length < MAXSIZE)
                newFiles.push(event.target.files[i])
        }
        setFiles([...newFiles])
        event.target.value = null
    }

    const onRemoveImageHandler = (index) => {
        const newFiles = files
        newFiles.splice(index, 1)
        setFiles(newFiles)
        setNumberOfImages(numberOfImages - 1)
    }

    useEffect(() => {
        setNumberOfImages(files.length)
    }, [files])

    return (
            <Container>
                <AddPhotos className="bg-blue py-[8px] px-[24px] rounded-lg text-white" onClick={onAddImagesClickHanlder}>Add Photos</AddPhotos>
                <input 
                    type='file'
                    ref={inputFile}
                    style={{display: 'none'}}
                    accept="image/png, image/gif, image/jpeg"
                    multiple
                    onChange={onAddFileHandler}
                />

                <ImagesPreview
                    numberOfImages={numberOfImages}
                    images={files}
                    onRemoveImageHandler={onRemoveImageHandler}
                />
            </Container>
    )
}

export default AddImages
import { 
    ImageRow,
    ImageContainer,
    SingleImageContainer,
    PreviewImage,
    Circle,
    Cross,
} from "../components/styled/ImagesPreview.styled"
import CrossIcon from "../assets/illustrations/crossIcon.svg"

const ImagesPreview = ({
    numberOfImages,
    images,
    onRemoveImageHandler
}) => {
    return (
        numberOfImages > 0 ? <ImageRow>
            {(numberOfImages > 1) ?
                <>
                    <ImageContainer>
                        <SingleImageContainer halfImage={numberOfImages >= 4}>
                            <PreviewImage
                                alt="uploaded image"
                                src={URL.createObjectURL(images[0])}
                                halfImage={numberOfImages >= 4}/>
                            <Circle onClick={() => onRemoveImageHandler(0)}>
                                <Cross src={CrossIcon} alt="remove"/>
                            </Circle>
                        </SingleImageContainer>

                        {numberOfImages >= 4 &&
                            <SingleImageContainer halfImage={numberOfImages >= 4}>
                                <PreviewImage 
                                    alt="uploaded image"
                                    src={URL.createObjectURL(images[3])}
                                    halfImage={numberOfImages >= 4}/>
                                <Circle onClick={() => onRemoveImageHandler(3)}>
                                    <Cross src={CrossIcon} alt="remove"/>
                                </Circle>
                            </SingleImageContainer>
                        }
                    </ImageContainer>
                    <ImageContainer>
                        {numberOfImages >= 2 &&
                            <SingleImageContainer halfImage={numberOfImages >= 3}>
                                <PreviewImage 
                                    alt="uploaded image"
                                    src={URL.createObjectURL(images[1])}
                                    halfImage={numberOfImages >= 3}/>
                                <Circle onClick={() => onRemoveImageHandler(1)}>
                                    <Cross src={CrossIcon} alt="remove"/>
                                </Circle>
                            </SingleImageContainer>
                        }
                        
                        {numberOfImages >= 3 &&
                            <SingleImageContainer halfImage={numberOfImages >= 3}>
                                <PreviewImage
                                    alt="uploaded image"
                                    src={URL.createObjectURL(images[2])}
                                    halfImage={numberOfImages >= 3}/>
                                <Circle onClick={() => onRemoveImageHandler(2)}>
                                    <Cross src={CrossIcon} alt="remove"/>
                                </Circle>
                            </SingleImageContainer>
                        }
                    </ImageContainer>
                </>
            :
                <ImageContainer>
                    <PreviewImage
                        alt="uploaded image"
                        src={URL.createObjectURL(images[0])}
                    />
                    <Circle onClick={() => onRemoveImageHandler(0)}>
                        <Cross src={CrossIcon}/>
                    </Circle>
                </ImageContainer>
            }
        </ImageRow>
        : <></>
    )
}

export default ImagesPreview
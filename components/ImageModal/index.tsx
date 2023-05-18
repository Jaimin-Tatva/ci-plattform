import { IImageModalProps } from "./image.module"
import Image from 'next/image';

const ImageModal: React.FC<IImageModalProps> = (props) => {

    return (
        <>
            <Image
                src={props.imagePath}
                fill={props.fill}
                width={!props.fill ? props.width : undefined}
                height={!props.fill ? props.height : undefined}
                alt="Picture unable to load" />
                <p className="positioned">Test with positioning</p>
        </>
    )
}

export default ImageModal;
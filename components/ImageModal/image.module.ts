export interface IImageModalProps {
    imagePath: string;
    height: (true extends NonNullable<IImageModalProps["fill"]> ? number | undefined : number);
    width: (true extends NonNullable<IImageModalProps["fill"]> ? number | undefined : number);
    showImage?: boolean;
    fill: boolean;
  }
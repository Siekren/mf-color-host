
    export type RemoteKeys = 'colorList/ColorList';
    type PackageType<T> = T extends 'colorList/ColorList' ? typeof import('colorList/ColorList') :any;
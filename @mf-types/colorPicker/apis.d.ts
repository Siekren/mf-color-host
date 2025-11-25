
    export type RemoteKeys = 'colorPicker/ColorPicker' | 'colorPicker/useColors';
    type PackageType<T> = T extends 'colorPicker/useColors' ? typeof import('colorPicker/useColors') :T extends 'colorPicker/ColorPicker' ? typeof import('colorPicker/ColorPicker') :any;
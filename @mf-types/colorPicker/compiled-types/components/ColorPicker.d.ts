import React from 'react';
interface ColorPickerProps {
    color: string;
    handleChangeColor: React.ChangeEventHandler<HTMLInputElement>;
    handleSubmitSaveColor: React.FormEventHandler<HTMLFormElement>;
}
declare const ColorPicker: ({ color, handleChangeColor, handleSubmitSaveColor }: ColorPickerProps) => import("react/jsx-runtime").JSX.Element;
export default ColorPicker;

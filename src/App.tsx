import ReactDOM from "react-dom/client";
import { lazy, LazyExoticComponent } from "react";
import React from "react";
import { useColors } from "colorPicker/useColors";
import('colorPicker/useColors')

const ColorPicker: LazyExoticComponent<React.ComponentType<any>> = lazy(() => 
    // Esta sintaxis es la que Webpack/Rsbuild con Module Federation transforma
    import('colorPicker/ColorPicker')
);
const ColorList: LazyExoticComponent<React.ComponentType<any>> = lazy(() => 
    // Esta sintaxis es la que Webpack/Rsbuild con Module Federation transforma
    import('colorList/ColorList')
);

const App = () => {
 const {color, colorsList, handleChangeColor, handleSubmitSaveColor} =  useColors();
  
  return(
    <>
      <React.Suspense fallback={<div>Loading ColorPicker...</div>}>
      <h1 className="text-center bg-dark text-white p-3">Color Picker</h1>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-4">
            <ColorList colorsList={colorsList}/>
          </div>
          <div className="col-12 col-md-8">
            <ColorPicker color={color} handleChangeColor = {handleChangeColor} handleSubmitSaveColor={handleSubmitSaveColor}/>
          </div>
        </div>
      </div>
      </React.Suspense>
    </>
  )
}
    

export default App;
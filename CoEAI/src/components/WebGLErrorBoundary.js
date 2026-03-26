// this file is used to check if the webgl is available in the browser 
// if not available then it will not render the shader animation
// and it will show a message to the user to enable the webgl

export const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
};

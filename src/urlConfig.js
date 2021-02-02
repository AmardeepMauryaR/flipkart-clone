 const baseUrl = "https://flipkart-clone-apps.herokuapp.com";

 export const api = `${baseUrl}/api`;
 export const generatePublicUrl = (fileName) => {
    return `${baseUrl}/public/${fileName}`;
}
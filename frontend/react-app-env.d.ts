/// <reference types="react-scripts" />
declare module "*.css" {
  const url: string;
  export default url;
}
declare module "*.scss" {
  const url: string;
  export default url;
}
declare module "*.sass" {
  const url: string;
  export default url;
}
declare module "*.styl" {
  const url: string;
  export default url;
}

interface Mapping {
  [key: string]: string;
}
declare module "*.module.css" {
  const mapping: Mapping;
  export default mapping;
}
declare module "*.module.scss" {
  const mapping: Mapping;
  export default mapping;
}
declare module "*.module.sass" {
  const mapping: Mapping;
  export default mapping;
}
declare module "*.module.styl" {
  const mapping: Mapping;
  export default mapping;
}
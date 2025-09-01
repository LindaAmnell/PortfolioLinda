// src/types/declarations.d.ts

// För vanliga CSS-filer
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// För CSS-moduler om du använder .module.css
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

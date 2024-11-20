declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.svg" {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export { ReactComponent as default };
}

declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const vueComponent: DefineComponent<{}, {}, any>;

  export default vueComponent;
}

declare module "flyio/dist/npm/wx";
declare module "@/components/vupload";

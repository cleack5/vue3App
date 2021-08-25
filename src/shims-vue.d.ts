/**
 * The shims-vue.d.ts file helps your IDE to understand what a file ending in .vue is.
 */
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

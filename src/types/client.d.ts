import { RootState } from '@client/store'

declare global {
  interface Window {
    __PRELOADED_STATE__: Partial<RootState>
  }
}

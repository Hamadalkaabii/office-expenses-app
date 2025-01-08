import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      define: {
        'import.meta.env.VITE_AUTHORIZED_USERS': JSON.stringify(process.env.REACT_APP_AUTHORIZED_USERS)
      }
    })

import {defineConfig} from "vite";
import { resolve} from "node:path";

export default defineConfig({
base:"src/page",
    build:{
        copyPublicDir: true,

        rolldownOptions:{
            input:{
                fr : resolve(import.meta.dirname,'page/fr/index.html'),
                en : resolve(import.meta.dirname,'page/en/index.html')
            }
        }
    }
})
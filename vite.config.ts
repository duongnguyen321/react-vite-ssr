import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv, type UserConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import dotenv from 'dotenv'

dotenv.config()
export default ({ mode }: UserConfig) => {
  const environment = loadEnv(mode ?? 'development', process.cwd());
  process.env = { ...process.env, ...environment };
  return defineConfig({
    plugins: [tsconfigPaths(), react()],
    define: {
      'process.env': JSON.stringify(process.env)
    }
  });
}

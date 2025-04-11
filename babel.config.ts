import { ConfigAPI } from '@babel/core';

const config = (api: ConfigAPI) => {
  api.cache.forever();

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: '> 0.25%, not dead', // 타겟 브라우저 설정 (필요한 경우)
        },
      ],
      '@babel/preset-react', // React 관련 프리셋
      '@babel/preset-typescript', // TypeScript 관련 프리셋
    ],
    plugins: [
      '@emotion/babel-plugin', // Emotion 관련 플러그인
    ],
  };
};

export default config;

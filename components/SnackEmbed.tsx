import { useEffect } from 'react';

interface SnackEmbedProps {
  snackId: string;
  platform?: 'ios' | 'android' | 'web';
  theme?: 'light' | 'dark';
  preview?: boolean;
  height?: number;
}

const SnackEmbed: React.FC<SnackEmbedProps> = ({
  snackId,
  platform = 'ios',
  theme = 'light',
  preview = true,
  height = 505,
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://snack.expo.dev/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      data-snack-id={snackId}
      data-snack-platform={platform}
      data-snack-preview={preview ? 'true' : 'false'}
      data-snack-theme={theme}
      style={{
        overflow: 'hidden',
        background: '#fbfcfd',
        border: '1px solid var(--color-border)',
        borderRadius: '4px',
        height: `${height}px`,
        width: '100%',
      }}></div>
  );
};

export default SnackEmbed;

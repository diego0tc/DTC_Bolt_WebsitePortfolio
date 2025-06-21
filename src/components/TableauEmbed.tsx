import React from 'react';

interface TableauEmbedProps {
  url: string;
  height?: number;
  title?: string;
  interactive?: boolean;
}

const TableauEmbed: React.FC<TableauEmbedProps> = ({ 
  url, 
  height = 600, 
  title = "Tableau Dashboard",
  interactive = false
}) => {
  // Convert Tableau Public URL to embed format if needed
  const getEmbedUrl = (originalUrl: string): string => {
    // If it's already an embed URL, return as is
    if (originalUrl.includes('/views/') && originalUrl.includes('?:embed=yes')) {
      return originalUrl;
    }
    
    // Convert regular Tableau Public URL to embed format
    if (originalUrl.includes('public.tableau.com')) {
      // Extract the view path and add embed parameters
      const urlObj = new URL(originalUrl);
      const embedUrl = `${urlObj.origin}${urlObj.pathname}?:embed=yes&:display_count=yes&:showVizHome=no&:origin=viz_share_link&:tabs=no&:toolbar=no`;
      return embedUrl;
    }
    
    return originalUrl;
  };

  const embedUrl = getEmbedUrl(url);

  return (
    <div className="w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-800">
      <div 
        className="w-full overflow-hidden relative"
        style={{ height: `${height}px` }}
      >
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          title={title}
          className="w-full h-full"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          style={{
            pointerEvents: interactive ? 'auto' : 'none'
          }}
        />
      </div>
      <div className="bg-gray-800 px-4 py-2 text-xs text-gray-400 border-t border-gray-700">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-red-400 transition-colors"
        >
          View full dashboard on Tableau Public →
        </a>
      </div>
    </div>
  );
};

export default TableauEmbed;
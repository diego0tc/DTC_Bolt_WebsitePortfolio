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
  interactive = true
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
      <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-200">{title}</h3>
          {!interactive && (
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
              <span className="text-xs text-gray-400">Preview Mode</span>
            </div>
          )}
        </div>
      </div>
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
        
        {/* Scroll Hint for Non-Interactive Mode */}
        {!interactive && (
          <div className="absolute bottom-4 right-4 bg-gray-900/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-xs border border-gray-700">
            Scroll-friendly mode
          </div>
        )}
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
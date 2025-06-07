import React from 'react';

interface TableauEmbedProps {
  url: string;
  height?: number;
  title?: string;
}

const TableauEmbed: React.FC<TableauEmbedProps> = ({ 
  url, 
  height = 600, 
  title = "Tableau Dashboard" 
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
    <div className="w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gray-700 px-4 py-2 border-b border-gray-600">
        <h3 className="text-sm font-medium text-gray-200">{title}</h3>
      </div>
      <div 
        className="w-full overflow-hidden"
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
        />
      </div>
      <div className="bg-gray-700 px-4 py-2 text-xs text-gray-400 border-t border-gray-600">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          View full dashboard on Tableau Public →
        </a>
      </div>
    </div>
  );
};

export default TableauEmbed;
import React, { useEffect, useRef } from 'react';

interface TableauEmbedProps {
  url: string;
  height?: number;
}

const TableauEmbed: React.FC<TableauEmbedProps> = ({ url, height = 600 }) => {
  const vizRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is a placeholder for actual Tableau embedding
    // In a real implementation, you would use the Tableau JavaScript API
    
    // Simulating the Tableau viz loading for demo purposes
    const loadViz = () => {
      if (vizRef.current) {
        const vizPlaceholder = document.createElement('div');
        vizPlaceholder.innerHTML = `
          <div class="flex flex-col items-center justify-center h-full">
            <div class="text-lg font-medium mb-2">Tableau Visualization</div>
            <div class="text-sm text-gray-400">(Would load from: ${url})</div>
            <div class="mt-4 w-full bg-gray-700 h-[${height - 100}px] rounded-lg flex items-center justify-center">
              <div class="text-center p-6">
                <div class="animate-pulse flex space-x-4">
                  <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-gray-600 rounded"></div>
                    <div class="space-y-3">
                      <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-gray-600 rounded col-span-2"></div>
                        <div class="h-2 bg-gray-600 rounded col-span-1"></div>
                      </div>
                      <div class="h-2 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                </div>
                <p class="mt-4 text-sm text-gray-500">
                  In a production environment, this would display an embedded Tableau dashboard.
                </p>
              </div>
            </div>
          </div>
        `;
        vizRef.current.appendChild(vizPlaceholder);
      }
    };
    
    loadViz();
    
    return () => {
      // Cleanup if needed
      if (vizRef.current) {
        vizRef.current.innerHTML = '';
      }
    };
  }, [url, height]);

  return (
    <div 
      ref={vizRef} 
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden" 
      style={{ height: `${height}px` }}
    ></div>
  );
};

export default TableauEmbed;
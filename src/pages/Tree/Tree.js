import React, { useEffect, useState } from 'react';
import * as phylotree from 'phylotree';


const ViewTree = () => {
  const [treeData, setTreeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch tree data from a Newick format file (replace 'treeDataFile.newick' with the actual file path)
        const response = await fetch('treeDataFile.newick');
        const data = await response.text();
        setTreeData(data);
      } catch (error) {
        console.error('Error fetching tree data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (treeData) {
      const renderedTree = new phylotree.phylotree(document.getElementById('phylotree-container'), treeData);
      renderedTree.show();
    }
  }, [treeData]);

  return (
    <div>
      <div id="phylotree-container"></div>
    </div>
  );
};

export default ViewTree;



import React from 'react';

// Helper function to split a string into chunks of a specified length
const splitIntoChunks = (str, chunkSize) => {
  const result = [];
  for (let i = 0; i < str.length; i += chunkSize) {
    result.push(str.substring(i, i + chunkSize));
  }
  return result;
};

const BlastAlignment = ({ alignments }) => {
  return (
    <div>
      {alignments.map((alignment, index) => {
        // Split sequences into chunks of 60 characters
        const qseqChunks = splitIntoChunks(alignment.qseq, 60);
        const midlineChunks = splitIntoChunks(alignment.midline, 60);
        const sseqChunks = splitIntoChunks(alignment.sseq, 60);

        // Determine the number of lines (chunks) to display
        const maxLines = Math.max(qseqChunks.length, midlineChunks.length, sseqChunks.length);

        return (
          <div key={index} style={{ fontFamily: 'monospace', whiteSpace: 'pre', marginBottom: '20px' }}>
            {Array.from({ length: maxLines }).map((_, lineIndex) => (
              <div key={lineIndex}>
                <span>{`${alignment.query_start + lineIndex * 60}`.padStart(8, ' ')}</span>
                <span>{qseqChunks[lineIndex] || ''}</span>
                <br />
                <span>{' '.repeat(8)}</span>
                <span>{midlineChunks[lineIndex] || ''}</span>
                <br />
                <span>{' '.repeat(8)}</span>
                <span>{sseqChunks[lineIndex] || ''}</span>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default BlastAlignment;

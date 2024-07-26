import React, { useState, useRef } from 'react';
import { PlaceholdersAndVanishInput } from './ui/placeholder-input';
import { AnimatePresence, motion } from 'framer-motion';

const ComparisonTool: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = ((e.target as HTMLFormElement).elements[0] as HTMLInputElement).value;
    const pageSpeedUrl = `https://pagespeed.web.dev/report?url=${encodeURIComponent(url)}`;
    window.open(pageSpeedUrl, '_blank');
  };

  return (
    <div className="comparison-tool">
      <PlaceholdersAndVanishInput
        placeholders={["Enter your web address..."]}
        onChange={(e) => console.log(e.target.value)}
        onSubmit={handleSubmit}
      />
      <div className="report-container mt-6">
        <AnimatePresence>
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="loading-spinner"
              aria-live="polite"
            >
              <p>Loading...</p>
            </motion.div>
          ) : error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="error-message"
              aria-live="assertive"
            >
              <p>{error}</p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ComparisonTool;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCVContext } from '../context/CVContext';
import { useTheme } from '../context/ThemeContext';
import { generateAndDownloadCV, generateCVDataURL } from '../utils/pdfGenerator';
import { sendCVByEmail, openEmailClient } from '../utils/emailService';
import { cvData } from '../data/cvData';

const CVPage = () => {
  const {
    cvTheme,
    selectedProjects,
    cvLanguage,
    cvVersion,
    visibleSections,
    isGenerating,
    updateTheme,
    toggleProject,
    setLanguage,
    setVersion,
    toggleSection,
    resetToDefaults,
    setIsGenerating,
  } = useCVContext();

  const [previewUrl, setPreviewUrl] = useState(null);
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailForm, setEmailForm] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [emailStatus, setEmailStatus] = useState({ type: '', message: '' });
  const [progress, setProgress] = useState('');

  // Generate preview when options change
  useEffect(() => {
    const generatePreview = async () => {
      setIsLoadingPreview(true);
      try {
        const url = await generateCVDataURL({
          theme: cvTheme,
          selectedProjects,
          language: cvLanguage,
          version: cvVersion,
          visibleSections,
        });
        setPreviewUrl(url);
      } catch (error) {
        console.error('Preview generation error:', error);
      } finally {
        setIsLoadingPreview(false);
      }
    };

    // Debounce preview generation
    const timer = setTimeout(generatePreview, 500);
    return () => clearTimeout(timer);
  }, [cvTheme, selectedProjects, cvLanguage, cvVersion, visibleSections]);

  const handleDownload = async () => {
    setIsGenerating(true);
    setProgress('');
    try {
      await generateAndDownloadCV({
        theme: cvTheme,
        selectedProjects,
        language: cvLanguage,
        version: cvVersion,
        visibleSections,
        onProgress: setProgress,
      });
    } catch (error) {
      alert(error.message);
    } finally {
      setIsGenerating(false);
      setProgress('');
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setEmailStatus({ type: '', message: '' });
    setIsGenerating(true);

    try {
      const result = await sendCVByEmail({
        recipientEmail: emailForm.email,
        recipientName: emailForm.name,
        message: emailForm.message,
        cvOptions: {
          theme: cvTheme,
          selectedProjects,
          language: cvLanguage,
          version: cvVersion,
          visibleSections,
        },
      });

      if (result.success) {
        setEmailStatus({ type: 'success', message: result.message });
        setEmailForm({ email: '', name: '', message: '' });
        setTimeout(() => setShowEmailModal(false), 2000);
      } else {
        setEmailStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      setEmailStatus({ type: 'error', message: error.message });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleOpenEmailClient = () => {
    openEmailClient({
      subject: `CV - Junior Donfack Assobjio (${cvLanguage.toUpperCase()})`,
      body: 'Please find attached my CV for your review.',
    });
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Customize Your <span className="text-gradient">CV</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Personalize your CV with different themes, languages, and content options.
            Preview changes in real-time before downloading.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Customization Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Theme Selection */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Theme</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => updateTheme('light')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    cvTheme === 'light'
                      ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20'
                      : 'border-gray-300 dark:border-gray-700'
                  }`}
                >
                  <div className="w-full h-12 bg-white rounded mb-2 border"></div>
                  <p className="text-sm font-medium">Light</p>
                </button>
                <button
                  onClick={() => updateTheme('dark')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    cvTheme === 'dark'
                      ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20'
                      : 'border-gray-300 dark:border-gray-700'
                  }`}
                >
                  <div className="w-full h-12 bg-gray-900 rounded mb-2"></div>
                  <p className="text-sm font-medium">Dark</p>
                </button>
              </div>
            </div>

            {/* Language Selection */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Language</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setLanguage('en')}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    cvLanguage === 'en'
                      ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20'
                      : 'border-gray-300 dark:border-gray-700'
                  }`}
                >
                  <p className="text-2xl mb-1">🇬🇧</p>
                  <p className="text-sm font-medium">English</p>
                </button>
                <button
                  onClick={() => setLanguage('fr')}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    cvLanguage === 'fr'
                      ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20'
                      : 'border-gray-300 dark:border-gray-700'
                  }`}
                >
                  <p className="text-2xl mb-1">🇫🇷</p>
                  <p className="text-sm font-medium">Français</p>
                </button>
              </div>
            </div>

            {/* Version Selection */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Version</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setVersion('full')}
                  className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                    cvVersion === 'full'
                      ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20'
                      : 'border-gray-300 dark:border-gray-700'
                  }`}
                >
                  <p className="font-medium">Full CV</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Complete with all sections
                  </p>
                </button>
                <button
                  onClick={() => setVersion('short')}
                  className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                    cvVersion === 'short'
                      ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20'
                      : 'border-gray-300 dark:border-gray-700'
                  }`}
                >
                  <p className="font-medium">Short CV</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Condensed version
                  </p>
                </button>
              </div>
            </div>

            {/* Project Selection */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">
                Projects ({selectedProjects.length}/5)
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {cvData.projects.map((project) => (
                  <label
                    key={project.id}
                    className="flex items-start space-x-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedProjects.includes(project.id)}
                      onChange={() => toggleProject(project.id)}
                      disabled={
                        !selectedProjects.includes(project.id) &&
                        selectedProjects.length >= 5
                      }
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{project.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {project.tech.join(', ')}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Optional Sections */}
            {cvVersion === 'full' && (
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4">Optional Sections</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={visibleSections.interests}
                      onChange={() => toggleSection('interests')}
                      className="w-4 h-4"
                    />
                    <span>Interests</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={visibleSections.certifications}
                      onChange={() => toggleSection('certifications')}
                      className="w-4 h-4"
                    />
                    <span>Certifications</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={visibleSections.extracurricular}
                      onChange={() => toggleSection('extracurricular')}
                      className="w-4 h-4"
                    />
                    <span>Extracurricular</span>
                  </label>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleDownload}
                disabled={isGenerating}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>{isGenerating ? progress || 'Generating...' : 'Download CV'}</span>
              </button>

              <button
                onClick={() => setShowEmailModal(true)}
                disabled={isGenerating}
                className="w-full btn-secondary flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Send by Email</span>
              </button>

              <button
                onClick={resetToDefaults}
                className="w-full btn-secondary"
              >
                Reset to Defaults
              </button>
            </div>
          </motion.div>

          {/* Preview Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Preview</h3>
              <div className="relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden" style={{ height: '800px' }}>
                {isLoadingPreview ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
                      <p className="text-gray-600 dark:text-gray-400">Generating preview...</p>
                    </div>
                  </div>
                ) : previewUrl ? (
                  <iframe
                    src={previewUrl}
                    className="w-full h-full"
                    title="CV Preview"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-600 dark:text-gray-400">Preview not available</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card p-6 max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Send CV by Email</h3>
              <button
                onClick={() => setShowEmailModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Recipient Email *</label>
                <input
                  type="email"
                  required
                  value={emailForm.email}
                  onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-cyan-500"
                  placeholder="recipient@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Recipient Name</label>
                <input
                  type="text"
                  value={emailForm.name}
                  onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-cyan-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={emailForm.message}
                  onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-cyan-500"
                  placeholder="Please find attached my CV..."
                />
              </div>

              {emailStatus.message && (
                <div
                  className={`p-3 rounded-lg ${
                    emailStatus.type === 'success'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                  }`}
                >
                  {emailStatus.message}
                </div>
              )}

              <div className="flex space-x-3">
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="flex-1 btn-primary"
                >
                  {isGenerating ? 'Sending...' : 'Send Email'}
                </button>
                <button
                  type="button"
                  onClick={handleOpenEmailClient}
                  className="flex-1 btn-secondary"
                >
                  Open Email Client
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CVPage;

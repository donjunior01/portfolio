import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import CVDocument from '../components/CV/CVDocument';
import { cvData } from '../data/cvData';
import { cvTranslations } from '../translations/cvTranslations';

const defaultSelectedExperience = () => cvData.experience.en.map((e) => e.id);

/**
 * Generate and download CV as PDF
 * @param {Object} options - CV generation options
 * @param {Array} options.selectedProjects - Array of project IDs to include
 * @param {Array} options.selectedExperience - Array of experience IDs to include
 * @param {string} options.language - 'en' or 'fr'
 * @param {string} options.version - 'full' or 'short'
 * @param {string} options.profile - 'vision' or 'software'
 * @param {Object} options.visibleSections - Object with section visibility flags
 * @param {Function} options.onProgress - Optional callback for progress updates
 */
export const generateAndDownloadCV = async (options) => {
  const {
    selectedProjects = cvData.projects.en.slice(0, 5).map(p => p.id),
    selectedExperience = defaultSelectedExperience(),
    language = 'en',
    version = 'full',
    profile = 'vision',
    visibleSections = { interests: true, certifications: true, extracurricular: true },
    onProgress = null,
  } = options;

  try {
    if (onProgress) onProgress('Preparing CV data...');

    // Get translations
    const translations = cvTranslations[language];

    // Create the PDF document with optimized settings to prevent blank pages
    if (onProgress) onProgress('Generating PDF...');

    const blob = await pdf(
      CVDocument({
        data: cvData,
        selectedProjects,
        selectedExperience,
        language,
        profile,
        visibleSections,
        translations,
      })
    ).toBlob();

    // Generate filename
    const versionSuffix = version === 'short' ? '_Short' : '';
    const langSuffix = language === 'fr' ? '_FR' : '_EN';
    const filename = `Junior_Donfack_CV${versionSuffix}${langSuffix}.pdf`;

    if (onProgress) onProgress('Downloading...');

    // Download the file
    saveAs(blob, filename);

    if (onProgress) onProgress('Complete!');

    return { success: true, filename };
  } catch (error) {
    console.error('Error generating CV:', error);
    throw new Error('Failed to generate CV. Please try again.');
  }
};

/**
 * Generate CV blob for preview or email
 * @param {Object} options - Same as generateAndDownloadCV
 * @returns {Promise<Blob>} PDF blob
 */
export const generateCVBlob = async (options) => {
  const {
    selectedProjects = cvData.projects.en.slice(0, 5).map(p => p.id),
    selectedExperience = defaultSelectedExperience(),
    language = 'en',
    profile = 'vision',
    visibleSections = { interests: true, certifications: true, extracurricular: true },
  } = options;

  try {
    const translations = cvTranslations[language];

    const blob = await pdf(
      CVDocument({
        data: cvData,
        selectedProjects,
        selectedExperience,
        language,
        profile,
        visibleSections,
        translations,
      })
    ).toBlob();

    return blob;
  } catch (error) {
    console.error('Error generating CV blob:', error);
    throw new Error('Failed to generate CV preview.');
  }
};

/**
 * Get CV data URL for preview
 * @param {Object} options - Same as generateAndDownloadCV
 * @returns {Promise<string>} Data URL
 */
export const generateCVDataURL = async (options) => {
  try {
    const blob = await generateCVBlob(options);
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error('Error generating CV data URL:', error);
    throw error;
  }
};

const pdfGenerator = {
  generateAndDownloadCV,
  generateCVBlob,
  generateCVDataURL,
};

export default pdfGenerator;

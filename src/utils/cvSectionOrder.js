/**
 * Determines the order of the Education / Projects / Experience sections
 * in the main CV content, based on the selected profile and language.
 *
 * French CVs conventionally list education before experience for a
 * student, regardless of profile.
 *
 * @param {'vision'|'software'} profile
 * @param {'en'|'fr'} language
 * @returns {Array<'education'|'projects'|'experience'>}
 */
export const getSectionOrder = (profile, language) => {
  if (language === 'fr') {
    return ['education', 'projects', 'experience'];
  }

  return profile === 'software'
    ? ['experience', 'projects', 'education']
    : ['education', 'projects', 'experience'];
};

/**
 * Resolves a field that may either be a flat value (profile-independent)
 * or an object keyed by profile ({ vision: ..., software: ... }).
 *
 * @param {*} value
 * @param {'vision'|'software'} profile
 */
export const resolveByProfile = (value, profile) => {
  if (Array.isArray(value) || value == null || typeof value !== 'object') {
    return value;
  }
  return value[profile] ?? value.software ?? value.vision;
};

export default getSectionOrder;

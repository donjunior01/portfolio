/**
 * Determines the full order of CV body sections (after the header), based
 * on the selected profile and language.
 *
 * French CVs conventionally list education before experience for a
 * student, regardless of profile. Skills always comes first (right after
 * the header), and Languages / Interests always come last.
 *
 * @param {'vision'|'software'} profile
 * @param {'en'|'fr'} language
 * @returns {Array<'skills'|'education'|'projects'|'experience'|'languages'|'interests'>}
 */
export const getSectionOrder = (profile, language) => {
  const middle = language === 'fr'
    ? ['education', 'projects', 'experience']
    : profile === 'software'
      ? ['experience', 'projects', 'education']
      : ['education', 'projects', 'experience'];

  return ['skills', ...middle, 'languages', 'interests'];
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

// Shared visual constants for the single-column CV layout, matching the
// reference Word documents exactly (see Prompt 3 spec).
export const CV_COLORS = {
  accent: '#1D4E7C',
  name: '#1A1A1A',
  body: '#262626',
  muted: '#595959',
  boxBg: '#F5F5F5',
  boxLine: '#A6A6A6',
};

export const CV_FONT = 'Carlito';

export const CV_PAGE = {
  marginTop: 36,
  marginBottom: 32,
  marginLeft: 43,
  marginRight: 43,
  contentWidth: 465,
};

// Shared styles for a title/dates row + italic subtitle + hanging-indent
// bullets, used by education, experience, and project entries alike.
export const entryStyles = {
  container: {
    marginBottom: 1.5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 0.15,
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    color: CV_COLORS.name,
    flex: 1,
  },
  // Same as `title`, but for use outside a flexDirection:'row' context
  // (e.g. a standalone entry with no trailing dates), where `flex: 1`
  // has no row to fill and causes a layout/overlap glitch instead.
  plainTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: CV_COLORS.name,
  },
  dates: {
    fontSize: 9,
    fontStyle: 'italic',
    color: CV_COLORS.muted,
    textAlign: 'right',
    width: 125,
  },
  subtitle: {
    fontSize: 9.5,
    fontStyle: 'italic',
    color: CV_COLORS.muted,
    marginBottom: 0.5,
    lineHeight: 1.05,
  },
  paragraph: {
    fontSize: 9.5,
    color: CV_COLORS.body,
    marginBottom: 1,
    lineHeight: 1.08,
  },
  // Hanging indent: left indent 11.5pt with an 8pt negative first-line
  // indent, so wrapped lines align under the bullet text, not the bullet.
  bulletRow: {
    flexDirection: 'row',
    paddingLeft: 3.5,
    marginBottom: 0.2,
  },
  bulletMark: {
    fontSize: 9.5,
    color: CV_COLORS.body,
    width: 8,
  },
  bulletText: {
    fontSize: 9.5,
    color: CV_COLORS.body,
    flex: 1,
    lineHeight: 1.05,
  },
};

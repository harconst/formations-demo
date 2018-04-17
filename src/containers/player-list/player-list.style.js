const desktopMenuWidth = 300;

const styles = theme => ({
  mobileMenuPaper: {
    height: '100%',
    position: 'absolute',
    width: '100%'
  },
  desktopMenuPaper: {
    position: 'relative',
    height: '100%',
    width: desktopMenuWidth,
    maxWidth: desktopMenuWidth,
    zIndex: 'auto'
  },
  fullHeight: {
    height: '100%'
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0
  },
  drawerInner: {
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 100%'
  },
  'player-list__item': {
    cursor: 'pointer',
    padding: '10px 16px'
  },
  'player-list__item__text': {
    overflow: 'hidden',
    padding: 0,
    lineHeight: '1.9em'
  }
});

export default styles;

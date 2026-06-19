export const Show = ({ children, on = 'desktop' }) => {
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
  const shouldShow = (on === 'desktop' && isDesktop) || (on === 'mobile' && !isDesktop);
  
  return shouldShow ? children : null;
};

export const Hide = ({ children, on = 'desktop' }) => {
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
  const shouldHide = (on === 'desktop' && isDesktop) || (on === 'mobile' && !isDesktop);
  
  return !shouldHide ? children : null;
};

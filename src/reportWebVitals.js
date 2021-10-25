const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      const cls = getCLS(onPerfEntry);
      const fid = getFID(onPerfEntry);
      const fcp = getFCP(onPerfEntry);
      const lcp = getLCP(onPerfEntry);
      const ttfb = getTTFB(onPerfEntry);
      console.log('Web vitals performace report', {
        cls,
        fid,
        fcp,
        lcp,
        ttfb
      })
    });
  }
};

export default reportWebVitals;

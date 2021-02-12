export default function debounce(func, wait, immediate) {
    let timeout;
    return function debounceClosure(...args) {
      const context = this;
      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
        // if(immediate) const var data= let push
        //comment if you d'ont show the result
        // can you give the result online one the profiee is done
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  
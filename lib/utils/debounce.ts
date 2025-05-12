/**
 * Permet limiter l'appel d'une fonction via le délai en MS fournit en second paramètre
 * 
 * @param callback La fonction à exécuter
 * @param ms Le délai d'exécution minimal
 * 
 * @returns 
 */
export const debounce = (callback: Function, ms: number) => {
  let timeoutId: number | null = null;
  return (...args: any[]) => {
    if (timeoutId)
      window.clearTimeout(timeoutId);

    timeoutId = window.setTimeout(() => {
      callback(args);
    }, ms);
  };
}
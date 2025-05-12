/**
 * Petit utilitaire pour ajouter un grand nombre de valeurs à des paramètres d'URL
 * 
 * @param params L'instance de paramètres sur laquelle ajouter les données
 * @param args Les données à ajouter
 */
export function appendUrlParam(params: URLSearchParams, args: { key: string, values: string[]}) {
  for(const value of args.values) {
    params.append(args.key, value);
  }
}
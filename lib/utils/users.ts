import { z } from "zod"
import { appendUrlParam } from "./url";

/**
 * Schéma de validation d'un utilisateur affiché dans la liste de contacts
 */
const userSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
});

/**
 * Données d'un utilisateur affiché dans la liste de contacts
 */
export type User = z.infer<typeof userSchema>;

/**
 * Récupère une liste d'utilisateurs depuis l'API
 * 
 * @param search Paramètre optionnel de recherche 
 * 
 * @returns Une liste d'utilisateurs. 
 */
export async function getUsers(search?: string) : Promise<User[]> {
  // Encode les différents paramètres d'URL 
  const params = new URLSearchParams({
    sortBy: "lastName",
    order: "asc",
    limit: "0"
  })

  // Si on a une recherche en paramètre, on l'ajoute aux paramètres de requête
  if (search && search.length > 0)
    params.set('q', search);

  // On ajoute aux paramètres de requêtes les différents champs que l'on souhaite récupérer sur l'API
  appendUrlParam(params, {
    key: "select",
    values: ['id', 'firstName', 'lastName']
  });

  // On effectue la requête puis on valide les données obtenues en retours
  const response = await fetch(`https://dummyjson.com/users/search?${params}`);
  const {data, error} = userSchema.array().safeParse((await response.json()).users);
  
  if (error) {
    console.error("*** Error during validating users ***");
    console.error(error.flatten());
    throw error.flatten();
  }

  return data;
}

/**
 * Définit la structure des données utilisées pour afficher les différentes
 * sections de la SectionList affichant les contacts groupés par leur nom de famille
 */
export type UserSection = {
  title: string,
  data: User[]
}

/**
 * Regroupe les différents utilisateurs par sous-groupe (section)
 * en fonction de la première lettre de leur nom de famille
 * 
 * @param users La liste d'utilisateurs pouvant être obtenue via getUsers()
 * @returns Les sections d'utilisateurs
 */
export async function groupUserBySection(users: User[]) : Promise<UserSection[]> {
  return new Promise((resolve) => {
    const map = new Map<string, UserSection>();

    for (const user of users) {
      // Récupère la première lettre du nom de famille
      const letter = user.lastName[0];

      // Si on a pas encore de section pour cette lettre, on l'initialise
      if (!map.has(letter)) {
        map.set(letter, { title: letter, data: [user] });
        continue;
      }

      // Sinon on considère qu'elle existe et on ajoute l'utilisateur à la section
      map.get(letter)?.data.push(user)
    }

    // On termine la promesse en retournant les valeurs sous forme de tableau
    resolve([...map.values()])
  });
}

/**
 * Schéma de validation des données détaillées d'un utilisateur.
 * Utilisé pour l'affichage de l'utilisateur dans une modale après avoir pressé un contact
 */
const userDetailsSchema = userSchema.extend({
  email: z.string(),
  phone: z.string(),
  gender: z.enum(["female", "male"]),
  birthDate: z.coerce.date().transform(date => date.toLocaleDateString('fr', {
    year: "numeric",
    day: "2-digit",
    month: "long"
  })),
});

/**
 * Données détaillées d'un utilisateur utilisées pour l'affichage 
 * de l'utilisateur dans une modale après avoir pressé un contact
 */
export type UserDetails = z.infer<typeof userDetailsSchema> & {image: string};

/**
 * Récupère les données détaillées d'un utilisateur via son ID.
 * Utilisé pour afficher les détails de l'utilisateurs dans une modale
 * après avoir pressé un contact dans la liste
 * 
 * @param id l'ID de l'utilisateur
 * @returns les détails de l'utilisateur ou null si non trouvé
 */
export async function getUserDetails(id: string | number) : Promise<UserDetails | null> {
  // Encode le nom des différents champs que l'on souhaite récupérer
  const params = new URLSearchParams();
  appendUrlParam(params, {
    key: "select",
    values: ['id', 'firstName', 'lastName', 'email', 'phone', 'gender', 'birthDate', 'image']
  });

  // Requête à l'API
  const response = await fetch(`https://dummyjson.com/users/${id}?${params}`);
  if (!response.ok) 
    return null;

  // Validations des données reçues
  const {data, error} = userDetailsSchema.safeParse(await response.json());

  if (error) {
    console.error("*** Error during validating users ***");
    console.error(error.flatten());
    throw error.flatten();
  }

  return {
    ...data,
    // On ajoute une illustration aléatoire en fonction du genre
    image: data.gender === "female"
      ? 'https://avatar.iran.liara.run/public/girl'
      : 'https://avatar.iran.liara.run/public/boy'
  };
}
import { Sub, SubsResponse } from '~/types';

export const getSubs = () => {
  return fetchSubs().then(mapFromApiToSubs);
  // return fetchSubs().then((res) => mapFromApiToSubs(res));
};

const fetchSubs = (): Promise<SubsResponse> => {
  return fetch('http://localhost:5000/subs').then((res) => res.json());
};

/* Creamos la funcion que recibe un array de tipo SubsResponse para que devuelva
    un array de tipo Sub, para que sea compatible  */
const mapFromApiToSubs = (apiResponse: SubsResponse): Array<Sub> => {
  return apiResponse.map((subFromApi) => {
    const {
      nick,
      months: subMonths,
      profileUrl: avatar,
      description,
    } = subFromApi;

    return {
      nick,
      subMonths,
      avatar,
      description,
    };
  });
};

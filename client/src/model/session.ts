/* B"H
 */

import { reactive, ref } from "vue";
import { useRouter } from "vue-router";


export const session = reactive({
  user: null as User | null,
});
interface User {
  name:string;
  lastName: string;
  firstName: string;
  email?: string;
  photo?: string;
  admin: Boolean;
  
}


export function useSession() {
  return session;
}

export function login() {
  session.user = {
    name: "Gisela Fugon",
    lastName: "Fugon",
    firstName:"Gisela",
    email:"gf@hotmail.com",
    admin:true,
  };
}

export function useLogout() {
  const router = useRouter();

  return function () {
    console.log({ router });
    session.user = null;
    router.push("/login");
  };
}

export const workouts = ref([
  {
    typeOfWorkout: "biking",
    date: "03/19/2023",
    duration: 1,
    location: "nature",
    imageURL:
      "https://previews.123rf.com/images/gbh007/gbh0071902/gbh007190200524/117401034-young-man-biking.jpg",
  },
  {
    typeOfWorkout: "running",
    date: "03/12/2023",
    duration: 2,
    location: "park",
    imageURL:
      "https://media.self.com/photos/57d8b8874b76f0f832a0ecff/master/w_1600,c_limit/running-marathon-data.jpg",
  },
  {
    typeOfWorkout: "hitt",
    date: "03/08/2023",
    duration: 20,
    location: "park",
    imageURL:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_09/2770011/190228-knee-high-exercise-ac-611p.jpg",
  },
]);

const karoWorkouts = [
  {
    typeOfWorkout: "biking",
    date: "03/19/2023",
    duration: 1,
    location: "nature",
    imageURL:
      "https://previews.123rf.com/images/gbh007/gbh0071902/gbh007190200524/117401034-young-man-biking.jpg",
  },
  {
    typeOfWorkout: "running",
    date: "03/12/2023",
    duration: 2,
    location: "park",
    imageURL:
      "https://media.self.com/photos/57d8b8874b76f0f832a0ecff/master/w_1600,c_limit/running-marathon-data.jpg",
  },
];

const juanWorkouts = [
  {
    typeOfWorkout: "running",
    date: "03/12/2023",
    duration: 2,
    location: "park",
    imageURL:
      "https://media.self.com/photos/57d8b8874b76f0f832a0ecff/master/w_1600,c_limit/running-marathon-data.jpg",
  },
  {
    typeOfWorkout: "hitt",
    date: "03/08/2023",
    duration: 20,
    location: "park",
    imageURL:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_09/2770011/190228-knee-high-exercise-ac-611p.jpg",
  },
];

const lucasWorkouts = [
  {
    typeOfWorkout: "biking",
    date: "03/19/2023",
    duration: 1,
    location: "nature",
    imageURL:
      "https://previews.123rf.com/images/gbh007/gbh0071902/gbh007190200524/117401034-young-man-biking.jpg",
  },
];

export const workoutsMap = {
  karoWorkouts,
  juanWorkouts,
  lucasWorkouts
};

export const users = ref({
  karo: karoWorkouts,
  juan: juanWorkouts,
  lucas: lucasWorkouts,
});

export const friendsWorkouts = ref([karoWorkouts]);

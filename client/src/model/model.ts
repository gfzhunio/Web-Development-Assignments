/* B"H
 */
import { ref } from "vue";
import type { User } from "./user";

interface Workout {
  _id?: string;
  typeOfWorkout: string;
  duration: number;
  location: string;
  user?: User;
}

export const workout = ref<Workout>({
  typeOfWorkout: "Biking",
  duration: 15,
  location: "Newburgh, NY",
});

export const workouts = ref<Workout[]>([]);

export const mustShowModal = ref(false);

export function showModal() {
  mustShowModal.value = true;
}

export function closeModal() {
  mustShowModal.value = false;
}

/* B"H
 */
import { ref } from "vue";
import { workouts } from "./session";

interface Workout {
  typeOfWorkout: string;
  date: string;
  duration: number;
  location: string;
  imageURL: string;
}

export const workout = ref<Workout>({
  typeOfWorkout: "",
  date: "",
  duration: 0,
  location: "",
  imageURL: "",
});

export const mustShowModal = ref(false);

export function showModal() {
  mustShowModal.value = true;
}

export function closeModal() {
  mustShowModal.value = false;
}

export function deleteWorkout(index: number) {
  workouts.value.splice(index, 1);
}

export const accumulator = {
  email: '',
  size: '',
  solution: '',
  submitted: false
};

export const isSubmittable =() => {
  return !!(accumulator.email && accumulator.size && accumulator.solution);
}
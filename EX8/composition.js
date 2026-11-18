// Task 3: composition instead of inheritance
const canWalk = (state) => ({ walk: () => `${state.name} walks.` });
const canSwim = (state) => ({ swim: () => `${state.name} swims.` });
const canFly = (state) => ({ fly: () => `${state.name} flies.` });
function createDuck(name) {
  const state = { name };
  return { ...state, ...canWalk(state), ...canSwim(state), ...canFly(state) };
}
function createFish(name) {
  const state = { name };
  return { ...state, ...canSwim(state) };
}
const duck = createDuck("Donald");
const fish = createFish("Nemo");
console.log(duck.walk());
console.log(duck.swim());
console.log(duck.fly());
console.log(fish.swim());
console.log("Fish can fly?", typeof fish.fly === "function");
const Logger = (Base) => class extends Base {
  log(message) { console.log(`[${this.constructor.name}] ${message}`); }
};
class Service {}
class UserService extends Logger(Service) {}
new UserService().log("Mixin method is available.");
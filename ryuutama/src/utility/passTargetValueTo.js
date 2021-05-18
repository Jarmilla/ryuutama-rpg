export default function passTargetValueTo(fn) {
  return (event) => fn(event.target.value);
}

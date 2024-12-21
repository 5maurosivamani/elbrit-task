export function* keyGenerator(): Generator<string, never, unknown> {
  let id = 0;
  while (true) {
    yield `key-${id++}`;
  }
}

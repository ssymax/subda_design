export function setBodyOverflow(value: 'hidden' | 'auto'): void {
  const { body } = document;
  if (body) body.style.overflowY = value;
  else console.error('Document body not found.');
}

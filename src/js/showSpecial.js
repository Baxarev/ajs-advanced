export function showSpecial({ special: [ {id, name, icon, description = 'Описание недоступно'} ] }) {
  return [id, name, icon, description];
}

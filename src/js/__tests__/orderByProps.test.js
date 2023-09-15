
import { orderByProps } from '../orderByProps'

describe('test orderByProps', () => {

  it('test orderByProps 1', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  
    const arr = orderByProps(obj, ["name", "level"])
  
    expect(arr).toEqual([
    {key: 'name', value: 'мечник'},
    {key: 'level', value: 2},
    {key: 'attack', value: 80},
    {key: 'defence', value: 40},
    {key: 'health', value: 10}]);
  })

  it('test orderByProps 2', () => {
    const obj = {
        a: 1,
        A: 2,
        b: 3
    };
  
    const arr = orderByProps(obj, [])
  
    expect(arr).toEqual([
        {key: 'A', value: 2},
        {key: 'a', value: 1},
        {key: 'b', value: 3}
    ]);
  });
})